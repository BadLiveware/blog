#!/usr/bin/env sh

script_dir=$(dirname "$(realpath "$0")")

cd "$script_dir/scripts/"
./build.sh "$@"