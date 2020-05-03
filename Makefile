.PHONY : build test-ci dev package

build:
	rm -rf docs/*
	yarn build-production
	cp -r build/* docs/

test-ci: install
	yarn test:ci

install:
	yarn install

dev:
	yarn install
	yarn start

package:
	rm -rf docs.tar.gz
	tar czf docs.tar.gz docs