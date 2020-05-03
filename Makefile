.PHONY : build test-ci dev

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
