run:
	npm link
	make test-talk

test-talk:
	maid talk

save:
	git add --all
	git commit -m "Progress :writing_hand:"
	git push origin HEAD


tests:
	jest tests

new:
	npm version patch -m "${m}"
	npm publishƒ

uninstall:
	npm uninstall -g mastery-cli

install:
	npm install -g mastery-cli
