print('Running pkg utils')
from .environs import *
# from api.app.utils.fetch import fetch_by_title, fetch_by_id
import datetime as dt
from datetime import datetime
from dateutil import tz

def convert_utc_to_local(utc_date:datetime):
    local_date = utc_date.replace(tzinfo=tz.tzlocal())
    print(local_date)
    return local_date