#!/bin/bash
cp ../*.* .
cp -r ../js ../css ../imgs ../fonts .
git status
git add *
git commit -m "automated git commit"
git push origin main
