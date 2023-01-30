#!/usr/bin/env bash
set -e
set -x
cp header.html index.html
cat index.md | node ghlinks.js | marked >> index.html
