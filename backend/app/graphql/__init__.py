import graphene
import jwt
from flask import session
from .types import UserType, IntroductionType, CertificadosType
from ..models import Introduction, User, Certificados
from .mutations import CreateIntro, CreateCertificado
from ..middleware.auth import protected

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

    @protected
    def resolve_certificates(self, info, **kwargs):
        query = Certificados.query

        for key, value in kwargs.items():
            if hasattr(Certificados, key):
                query = query.filter(getattr(Certificados, key) == value)

        return query.all()
    
class Mutation(graphene.ObjectType):
    create_intro = CreateIntro.Field()
    create_certificate = CreateCertificado.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
