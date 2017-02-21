BUILD_SCRIPTS := build_scripts/
NOTEBOOK_DIR  := notebooks/
BUILD_DIR       := build/

NOTEBOOKS           := $(wildcard $(NOTEBOOK_DIR)/*.ipynb)
GENERATED_ASCIIDOCS := $(patsubst $(NOTEBOOK_DIR)/%.ipynb, %.asciidoc, $(NOTEBOOKS))

ALL_ASCIIDOCS := $(wildcard ./*.asciidoc) $(GENERATED_ASCIIDOCS)
PDFS          := $(patsubst %.asciidoc, %.pdf, $(ALL_ASCIIDOCS))
INDESIGN      := $(patsubst %.asciidoc, %.icml, $(ALL_ASCIIDOCS))

book: book.pdf $(ALL_ASCIIDOCS)

prodhtml: book.html
	rm -rf dist
	cp -r build/html dist

indesign: $(INDESIGN)

pdf: $(PDFS)

asciidoc: $(GENERATED_ASCIIDOCS)
	
%.asciidoc: $(NOTEBOOK_DIR)/%.ipynb
	@echo "Building $@ using $<"
	python $(BUILD_SCRIPTS)/ipynbhelper.py --convert $< --output-directory $(PWD)

%.pdf: %.asciidoc
	mkdir -p ${BUILD_DIR}
	@if [ -f /usr/local/etc/xml/catalog ]; then \
		export XML_CATALOG_FILES="/usr/local/etc/xml/catalog" ; \
	elif [ -f /etc/xml/catalog ]; then \
		export XML_CATALOG_FILES="/etc/xml/catalog" ; \
	else \
		@echo "Could not find XML Catalog file... let's hope this works!"; \
	fi;
	a2x -vvvvv -fpdf -L --fop --xsltproc-opts "--stringparam paper.type letter" $<
	mv $@ build/$@

%.html: %.asciidoc
	mkdir -p ${BUILD_DIR}/html
	cp -r figures javascripts stylesheets ${BUILD_DIR}/html/
	asciidoc --conf-file html5.conf -a source-highlighter=pygments -a toc2 -a linkcss -o ${BUILD_DIR}/html/index.html $< 

%.icml: %.asciidoc
	mkdir -p ${BUILD_DIR}/indesign
	asciidoc --conf-file html5.conf -a source-highlighter=pygments -o ${BUILD_DIR}/indesign/tmp.html --attribute toc! -a linkcss $<
	pandoc --standalone -t ICML -o ${BUILD_DIR}/indesign/$@ ${BUILD_DIR}/indesign/tmp.html
	rm ${BUILD_DIR}/indesign/tmp.html

clean:
	rm -rf ${BUILD_DIR} ${GENERATED_ASCIIDOCS}
	git rm -rf ${GENERATED_ASCIIDOCS}
