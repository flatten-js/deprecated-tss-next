#!/bin/bash -e

ENV_FILE=.env
APP_ENV_FILE="./app/${ENV_FILE}"

for env_file in "$ENV_FILE" "$APP_ENV_FILE"; do
  [ -e $env_file ] && echo "Already exists ${env_file}" || cp "${env_file}.example" $env_file
done

nkf -Lu --overwrite $ENV_FILE
. $ENV_FILE

mysql -h $MYSQL_HOST -P $MYSQL_TCP_PORT -u root -p$MYSQL_ROOT_PASSWORD << EOF
  CREATE USER IF NOT EXISTS $APP_DATABASE_USER IDENTIFIED BY '$APP_DATABASE_PASSWORD';
  GRANT ALL PRIVILEGES ON $APP_DATABASE_NAME.* TO $APP_DATABASE_USER;
EOF

touch .ready

echo 'All setup is complete'