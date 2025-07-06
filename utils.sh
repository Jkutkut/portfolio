#!/bin/env zsh

usage="Usage: $0 <flush|flush-raw>"

if [ -z "$1" ]; then
    echo $usage
fi

if [ "$1" = "flush-raw" ] || [ "$1" = "flush" ]; then
    data2flush="data/repos"
    if [ "$1" = "flush" ]; then
        data2flush="data"
    fi

    while read -r line; do
        grep "$line" --directories=recurse  "$data2flush" | cut -d: -f1 | xargs rm --interactive=once
    done
else
    echo $usage
fi
