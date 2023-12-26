#!/bin/bash

yarn

pushd server
npx prisma generate
npx prisma db push
popd

yarn dev