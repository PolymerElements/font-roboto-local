#!/bin/bash
# @license
# Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
# This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
# The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
# The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
# Code distributed by Google as part of the polymer project is also
# subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
set -x

if [ ! -d .fonts ]; then
  git clone --no-checkout https://github.com/google/fonts.git .fonts
  pushd .fonts
  git config core.sparsecheckout true
  echo "apache/roboto" >> .git/info/sparse-checkout
  echo "apache/robotomono" >> .git/info/sparse-checkout
  git checkout
  popd
else
  pushd .fonts
  git pull
  popd
fi

rm -rf fonts
mkdir fonts
cp -r .fonts/apache/* fonts

cat > roboto.html <<END
<!--
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
-->
<style>
END

node generate-style.js >> roboto.html

echo "</style>" >> roboto.html


echo "Fonts Updated"
