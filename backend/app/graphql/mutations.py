import graphene
from flask import session
from .types import IntroductionType, CertificadosType
from ..models import Introduction, Certificados
from ..middleware.auth import protected
from app import db

class CreateIntro(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        text = graphene.String(required=True)

    intro = graphene.Field(lambda: IntroductionType)

    @protected
    def mutate(root,info, title, text):
        intro = Introduction(title=title, text=text)
        db.session.add(intro)
        db.session.commit()
        return CreateIntro(intro=intro)
    
class CreateCertificado(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        description = graphene.String(required=True)
        imagePath = graphene.String(required=True)

    certificate = graphene.Field(lambda: CertificadosType)

    @protected
    def mutate(root,info, title, description,imagePath):
        if not session.token:
            raise Exception('No Token')
        
        certificate = Certificados(title=title, description=description, imagePath=imagePath)
        db.session.add(certificate)
        db.session.commit()
        return CreateCertificado(certificate=certificate)