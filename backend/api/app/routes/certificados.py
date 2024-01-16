import os
from io import BytesIO
import datetime as dt
from dateutil import tz
from flask import Blueprint, request, abort, send_file
from werkzeug.utils import secure_filename
from models import Certificados, File
from ..utils.model_ops import get_model_fields
from ..utils.security import check_api_token
from app import db
from config import Config

certificados = Blueprint("certificates", __name__, url_prefix="/certificates")

certificates_fields = get_model_fields(Certificados)


@certificados.post("/")
@check_api_token
def post_to_certificates():
    body = request.form

    new_certificate = Certificados(
        title=body.get("title"), description=body.get("description")
    )
    db.session.add(new_certificate)

    # Flush the session to get the id of new_certificate
    db.session.flush()

    file = request.files["image"]
    filename = secure_filename(file.filename)

    if filename != "":
        file_info = os.path.splitext(filename)
        filename = file_info[0]
        file_ext = file_info[1]
        if file_ext not in Config.ALLOWED_EXTENSIONS:
            abort(400)

        file_binary = file.read()
        new_file = File(
            filename=filename,
            filetype=file_ext,
            table="certificados",
            certificate_id=new_certificate.id,
            content=file_binary,
        )
        db.session.add(new_file)
        new_certificate.image = file_binary

    db.session.commit()

    return dict(
        status="success", data=dict(message="certificado adicionado com sucesso!")
    )


@certificados.get("/<int:certificate_id>")
def certificate_details(certificate_id):
    certificate_details = Certificados.query.filter_by(id=certificate_id).first()

    if certificate_details:
        # Define the UTC and São Paulo time zones
        utc_zone = tz.tzutc()

        # Ensure the post_date is timezone-aware, assuming it's in UTC
        utc_date = certificate_details.post_date.replace(tzinfo=utc_zone)

        # Convert post_date to São Paulo time
        date = utc_date.astimezone(tz.tzlocal()).strftime('%d-%m-%Y %H:%M:%S')

        return dict(
            status="success",
            data=dict(
                id=certificate_details.id,
                title=certificate_details.title,
                description=certificate_details.description,
                date=date,
            ),
        )

    return dict(status="error", message="Certificado não encontrado"), 404


# @certificados.delete('/<int:certificate_id>')
# @check_api_token
# def delete_certificate(certificate_id):
#     pass


@certificados.get("/images/<int:image_id>")
def retrieve_image(image_id):
    uploaded_file = File.query.filter_by(certificate_id=image_id).first()

    if not uploaded_file:
        return dict(status="error", message="Arquivo não encontrado")

    image = BytesIO(uploaded_file.content)

    # if getattr(uploaded_file, "image", None):
    return send_file(
        image,
        as_attachment=True,
        download_name=f"{uploaded_file.filename}.{uploaded_file.filetype}",
    )

    # return dict(status="error", message="Unable to return an image")
