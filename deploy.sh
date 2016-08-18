#!/bin/bash

DIST_DIR=dist
DIST_REPO=distRepo

CURR_REV="Release $(git rev-parse --short HEAD)"

mkdir -p shippable
cp -R "$DIST_DIR" shippable
if [ "$BRANCH" != master ]; then
    echo 'Only deploying master branch';
    exit 0;
fi

if [ ! -d "$DIST_DIR" -o ! "$(ls -A $DIST_DIR)" ]; then
    echo 'Project should have been built.';
    exit -1;
fi
echo 'Saving built app to git repo.'
rm -rf "$DIST_REPO"
git clone https://${OAUTH_TOKEN}@github.com/angelaigreja/angelaigreja.github.io.git "$DIST_REPO" || { echo 'Failed to get the repository' ; exit 1; }
echo 'Clearing the dist repo.'
cd "$DIST_REPO"
git rm -r *
cd ..
echo 'Updating the dist repo.'
cp -R "$DIST_DIR"/* distRepo
cd "$DIST_REPO"
git add *
git commit -am "$CURR_REV"
git push origin master <&-

