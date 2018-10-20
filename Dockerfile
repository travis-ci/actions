FROM node:10-alpine

LABEL "com.github.actions.name"="Travis CI"
LABEL "com.github.actions.description"="Start a build on Travis CI"
LABEL "com.github.actions.icon"="activity"
LABEL "com.github.actions.color"="#eefcff"

LABEL "repository"="http://github.com/travis-ci/actions"
LABEL "homepage"="http://travis-ci.com"
LABEL "maintainer"="Travis CI <support+github-actions@travis-ci.com>"

COPY package*.json /
RUN cd / && npm install

ADD create-build.js /create-build.js
ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"] 
