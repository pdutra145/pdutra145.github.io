from flask import Blueprint, send_file
from .models import File
import io

imagem = Blueprint("image", __name__, url_prefix="/image")


@imagem.get("/<int:certificate_id>")
def get_image(certificate_id):
    file = File.query.filter_by(certificate_id=certificate_id).first()

    if file:
        return send_file(
            io.BytesIO(file.content),
            mimetype=f"image/{file.filetype[1:]}",  # Make sure to use the correct MIME type for your images
            as_attachment=True,
            download_name=file.filename,
        )

    return None
