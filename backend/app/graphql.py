import graphene
from .models import Certificados, User, Introduction
from graphene_sqlalchemy import SQLAlchemyObjectType


# GraphQL Types
class UserType(SQLAlchemyObjectType):
    class Meta:
        model = User


class IntroductionType(SQLAlchemyObjectType):
    class Meta:
        model = Introduction


class CertificadosType(SQLAlchemyObjectType):
    class Meta:
        model = Certificados


class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    intro = graphene.List(
        IntroductionType,
        id=graphene.Int(),
        title=graphene.String(),
        text=graphene.String(),
        date=graphene.DateTime(),
        lastUpdated=graphene.DateTime(),
    )
    certificates = graphene.List(CertificadosType,id=graphene.Int())

    def resolve_users(self, info):
        return User.query.all()

    def resolve_intro(self, info, **kwargs):
        query = Introduction.query

        for key, value in kwargs.items():
            if hasattr(Introduction, key):
                query = query.filter(getattr(Introduction, key) == value)

        return query.all()

    def resolve_certificates(self, info, **kwargs):
        query = Certificados.query

        for key, value in kwargs.items():
            if hasattr(Certificados, key):
                query = query.filter(getattr(Certificados, key) == value)

        return query.all()


schema = graphene.Schema(query=Query)
