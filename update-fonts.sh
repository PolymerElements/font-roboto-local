#!/bin/bash
# @license
# Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
# This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
# The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
# The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
# Code distributed by Google as part of the polymer project is also
# subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
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
