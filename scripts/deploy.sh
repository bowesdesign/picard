#! /bin/bash

rm -rf .firebaserc && \
firebase logout && \
firebase login && \
firebase init && \
firebase deploy
