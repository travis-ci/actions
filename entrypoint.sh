#!/bin/sh

set -e

pwd
ls -la

sh -c "cd / && node create-build.js"