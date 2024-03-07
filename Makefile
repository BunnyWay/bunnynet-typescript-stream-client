.PHONY: generate
generate:
	wget -O ./schema.json https://docs.bunny.net/openapi/6054a6cc63d1a0001e3d22fc
	npx @openapitools/openapi-generator-cli generate -i ./schema.json -g typescript --additional-properties=platform=deno -o ./deno


.PHONY: init
init:
	sudo apt install nodejs
	npm install @openapitools/openapi-generator-cli -g


.PHONY: clean
clean:
	rm ./schema.json
	rm -rf ./deno
