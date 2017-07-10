## Differential privacy

Kathryn wrote great
[notes](https://github.com/fastforwardlabs/techtree/blob/master/20161129-triage/differential%20privacy.md)
on this last time.

I'm broadly a "no" on this topic as an FFL report. My general concern is that
this is a relatively mature (i.e. large) and _very_ mathematical field. This
makes an 8 month report challenging, but also means that it's a field in the
"normal science" phase; lot's of incremental work going on.

It's also an "eat your greens" problem for businesses. I think in most cases
they would rather not care about it, but are constrained by regulations. It's
difficult (but not impossible!) to make a case that it is a _profitable_ field.
One way to do this is to argue that you will get more data (and data == $$$) if
you can guarantee anonymity to your users. The guarantees are extremely
technical though, and it's not obvious to me that they are any more convincing
to most people than "we promise we won't share you're data"-type EULAs.

## Encrypted analytics

I think this is a great paper: [Opaque: An Oblivious and Encrypted Distributed
Analytics Platform](https://people.eecs.berkeley.edu/~wzheng/opaque.pdf).
Downside: it's entirely infrastructure/DB work, which is somewhere we
strategically don't want to be right now.
