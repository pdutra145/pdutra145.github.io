FROM python:3.10

WORKDIR /app

# Update the package list and install locales
RUN apt-get update && apt-get install -y locales

# Generate the pt_BR.UTF-8 locale
RUN locale-gen pt_BR.UTF-8

# Set the system locale (you can also set LC_ALL and LANGUAGE)
ENV LANG="pt_BR.UTF-8"
ENV LANGUAGE="pt_BR:pt"
ENV LC_ALL="pt_BR.UTF-8"

COPY requirements.txt /app

RUN pip install -r requirements.txt

COPY . /app/

WORKDIR /app/api

# CMD [ "flask", "--app", "api/app", "run" ]