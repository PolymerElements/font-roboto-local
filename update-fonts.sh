#!/bin/bash
set -x

if [ ! -d .roboto ]; then
  git clone --no-checkout https://github.com/google/roboto.git .roboto
  pushd .roboto
  git config core.sparsecheckout true
  echo "out/RobotoTTF" >> .git/info/sparse-checkout
  echo "LICENSE" >> .git/info/sparse-checkout
  git checkout
  popd
else
  pushd .roboto
  git pull
  popd
fi

rm -rf RobotoTTF
mkdir RobotoTTF
cp -r .roboto/out/RobotoTTF/* RobotoTTF
cp .roboto/LICENSE RobotoTTF

echo "Fonts Updated"
