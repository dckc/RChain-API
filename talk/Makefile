PANDOC=pandoc


jsRChain.html: jsRChain.md
	$(PANDOC) --standalone --katex -f markdown+smart --to revealjs --slide-level 2 --output $@ $<

