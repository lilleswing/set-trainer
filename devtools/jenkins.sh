#!/bin/bash
bash devtools/install.sh

export PATH=`pwd`/anaconda/bin:$PATH
source activate set_trainer

make test-ci
make build
make package
