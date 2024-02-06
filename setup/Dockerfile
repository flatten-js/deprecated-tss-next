FROM ubuntu:22.04

WORKDIR /app

RUN apt update
RUN apt install mysql-client -y

ENTRYPOINT ["bash", "-c", "[ -e .ready ] || ./setup/init.sh"]