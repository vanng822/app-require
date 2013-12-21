VOWS=./node_modules/vows/bin/vows

#TEST_FILES=baseurl.js filename.js path.js run.js writeerror.js image.js imagebaseurl.js

TEST_FILES=$(shell find tests/*.js)

test:
	$(foreach F, ${TEST_FILES},$(VOWS) --spec $(F);)
	
.PHONY: test
