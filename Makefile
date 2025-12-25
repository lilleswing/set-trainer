.PHONY : build test-ci dev package

build:
	rm -rf docs/*
	npm run build-production
	cp -r build/* docs/
	echo "set.lilleswing.com" > docs/CNAME

test-ci: install
	npm test:ci

install:
	npm install

dev:
	npm install
	npm start

package:
	rm -rf docs.tar.gz
	tar czf docs.tar.gz docs
