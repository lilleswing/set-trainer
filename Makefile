.PHONY : build test-ci dev package

build:
	rm -rf docs/*
	npm run build
	cp -r dist/* docs/
	echo "set.lilleswing.com" > docs/CNAME

test-ci: install
	npm run test:ci

install:
	npm install

dev:
	npm install
	npm run dev

package:
	rm -rf docs.tar.gz
	tar czf docs.tar.gz docs
