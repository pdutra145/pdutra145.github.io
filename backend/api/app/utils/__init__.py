print('Running pkg utils')
from .environs import *
# from api.app.utils.fetch import fetch_by_title, fetch_by_id
import datetime as dt
from datetime import datetime
from dateutil import tz

def convert_utc_to_local(utc_date:datetime):
    utc_zone = tz.tzutc()

    # Ensure the post_date is timezone-aware, assuming it's in UTC
    utc_date = utc_date.replace(tzinfo=utc_zone)

    # Convert post_date to São Paulo time
    date = utc_date.astimezone(tz.tzlocal()).strftime('%d-%m-%Y %H:%M:%S')
    return date