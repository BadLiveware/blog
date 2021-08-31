#!/usr/bin/env sh

script_dir=$(dirname "$(realpath "$0")")
script_name=`basename "$0"`

cd "$script_dir/../blog/"
npm install
npm run build