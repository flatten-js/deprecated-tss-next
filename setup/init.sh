#!/bin/sh -xe

cp .env.example .env
cp ./app/.env.example ./app/.env

mysql -h $MYSQL_HOST -P $MYSQL_TCP_PORT -u root -p$MYSQL_ROOT_PASSWORD << EOF
  CREATE USER $APP_DATABASE_USER IDENTIFIED BY '$APP_DATABASE_PASSWORD';
  GRANT ALL PRIVILEGES ON $APP_DATABASE_NAME.* TO $APP_DATABASE_USER;
EOF

touch .ready