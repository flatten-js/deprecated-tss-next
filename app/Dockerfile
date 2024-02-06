FROM node:20

WORKDIR /app

RUN apt update
RUN apt install nkf -y

ENTRYPOINT ["bash", "-c", "nkf -Lu --overwrite ./startup.sh && ./startup.sh"]