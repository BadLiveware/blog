#!/usr/bin/env bash

script_dir=$(dirname "$(realpath "$0")")
script_name=`basename "$0"`

while getopts o: flag
do
    case "${flag}" in
        o) output_dir=${OPTARG};;
    esac
done

"$script_dir"/build.sh

cd "$script_dir/../blog/"
npm run export -o $output_dir