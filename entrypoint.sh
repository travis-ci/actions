#!/bin/sh

set -e

pwd
ls -la

sh -c "npm run trigger-build"