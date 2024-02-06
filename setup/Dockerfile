FROM ubuntu:22.04

WORKDIR /app

RUN apt update
RUN apt install mysql-client nkf -y

ENTRYPOINT ["bash", "-c", "[ -e .ready ] || (nkf -Lu --overwrite ./setup/init.sh && ./setup/init.sh)"]