.PHONY : build dev

build:
	rm -rf docs/*
	yarn build-production
	cp -r build/* docs/

dev:
	yarn install
	yarn start
