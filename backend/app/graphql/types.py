import graphene
from ..models import Certificados, User, Introduction
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


