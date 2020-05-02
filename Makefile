.PHONY : build dev

build:
	yarn build-production
	cp -r build/* docs/

dev:
	yarn install
	yarn start
