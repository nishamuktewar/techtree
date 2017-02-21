# ffreport00

Fast Forward Labs' Skeleton Report

## Begin new report

- `cp -R techtree/ffreport /other/directory/ffreportXX`
- `cd /other/directory/ffreportXX`
- Edit title in `README.md` and `book.asciidoc`
- `git init && git add . && git commit -m "Initial commit"`
- Create new github repo and push
- TODO: set up autobuild

## Install

Install the following programs,

* asciidoc
* fop
* a2x


### Linux

This can be done with aptitude,

```
$ sudo apt-get install asciidoc fop
```

You'll probably also want LaTeX, in which case you should do,

```
$ sudo apt-get install texlive
```


### OSX

In OSX world, you can get ready using brew by simply doing,

```
$ brew install asciidoc fop
```

and putting the following in your `~/.bash_profile`,

```
export XML_CATALOG_FILES=/usr/local/etc/xml/catalog
```

To get ready for LaTeX you'll need to install
[MacTex](https://tug.org/mactex/).

## Usage

General usage will simply be running the command,

```
$ make book.pdf
```

in order to generate the entire PDF.  This will look at the
`book.asciidoc` file and build all files referenced inside of it.  If, however, you simply want to build a single file you can run,

```
$ make <arbitrary_file>.pdf
```

and profit.  We also support generating HTML renderings with,

```
$ make book.html
```

## Conventions

* Each section of the report should be in it's own file.  
* The files should be named "XX-section.asciidoc" where XX are
  numbers representing the order of the book
* All lines should be limited to 80 characters
* All files should be in the `images/` folder and named
  "XX-description.png" where XX is the section number that image is
  in.
* If you use vim, please source the `vimrc` provided in this repo
