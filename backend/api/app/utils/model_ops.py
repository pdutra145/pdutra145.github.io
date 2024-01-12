from typing import List, Type
from sqlalchemy import inspect

def get_model_fields(model):
    # Create an Inspector object to inspect the model's table
    inspector = inspect(model)

    # Get a list of all the column names
    return [column.name for column in inspector.columns]

def fetch_by_title(title: str, model: Type, attrs: List[str]):
    results = model.query.filter(model.title.like(f"%{title}%")).all()

    if len(results) == 0:
        return dict(status='error', message=f'Unable to fetch by title "{title}"')
    elif getattr(model, 'title', None) is None:
        return dict(status='error', message='Model has no attribute "title"')

    return_obj = []
    for text_obj in results:
        return_obj.append({attr:getattr(text_obj, attr) for attr in attrs})

    return dict(status='success', data=return_obj)

def fetch_by_id(model: Type, id):
    data = model.query.filter_by(id=id).first()

    if not data:
        return 'No data was found'

    return data

def convert_image_to_binary(image_path:str):
    with open(image_path, 'rb') as image:
        image_binary = image.read()

    return image_binary