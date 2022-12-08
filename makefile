run:
	npm link
	make test-talk

test-talk:
	maid talk

save:
	git add --all
	git commit -m "Progress :writing_hand:"
	git push origin HEAD

new:
	npm version minor -m "${m}"
	npm publish

uninstall:
	npm uninstall -g maid-cli

install:
	npm install -g maid-cli
