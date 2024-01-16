from flask import Blueprint, request
from models import Articles, ArticlesSerialization
from app import db
from ..utils import convert_utc_to_local
from ..utils.security import check_api_token

artigos = Blueprint("articles", __name__, url_prefix="/articles")

# @artigos.get('/')
# def all_articles():
#     all_articles = Articles.query.all()

#     articles = []


@artigos.route("/<int:article_id>", methods=['GET', 'DELETE'])
def article_by_id(article_id):
    if request.method == 'GET':
        article = Articles.query.filter_by(id=article_id).first()

        return dict(
            status="success",
            data=dict(
                id=article.id,
                header=article.header,
                tags=article.tags.split(","),
                topic=article.topic,
                content=article.content,
                image=article.image,
                creationDate=convert_utc_to_local(article.creationDate),
                lastUpdated=convert_utc_to_local(article.lastUpdated),
            ),
        )
    elif request.method == 'DELETE':
        article = Articles.query.filter_by(id=article_id).first()

        db.session.delete(article)
        db.session.commit()

        article_data = ArticlesSerialization().dump(article)

        return dict(status='success', message='Artigo deletado', data=article_data)

@artigos.post('/')
@check_api_token
def post_article():
    body = request.form

    new_article = Articles()
    for key in body:
        if hasattr(new_article, key):
            setattr(new_article, key, body[key])

    db.session.add(new_article)
    db.session.commit()

    # Assuming there is a method to serialize your model
    article_data = ArticlesSerialization().dump(new_article)  # Replace with your model's serialization method

    return dict(status='success', data=article_data)
