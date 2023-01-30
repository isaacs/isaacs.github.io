all: index.html

index.html: index.md header.html footer.html
	cp header.html index.html &&\
	cat index.md | node ghlinks.js | marked >> index.html &&\
	cat footer.html >> index.html ||\
	rm index.html &&\
	exit 1

clean:
	rm -f index.html
