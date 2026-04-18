#!/usr/bin/bash

sudo apt install npm

npm install

npx tsc
npx @tailwindcss/cli -i ./src/style.css -o ./src/tailwindstyle.css

mkdir dist

cp src/index.html dist/
cp -r ./src/outTS dist/
cp src/tailwindstyle.css dist/