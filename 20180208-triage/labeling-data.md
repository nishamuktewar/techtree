# Labeling data

Labeling data feels like a concrete capability in which to examine active
learning.

It's a real-world workflow problem that many/most of our clients have.

The idea is to accelerate the improvement of a model that is being trained in
an online setting by developing a strategy to select examples to show to the
user.

Given a constant rate of classification by the user, this means the model
should become accurate more quickly than if randomly selected examples were
classified.

## Research

The simplest strategy is to select examples who the model classifies with the
highest entropy/most uncertainty. Effectively: you only label examples the
model doesn't know how to.

There are a bunch of other strategies. My impression based on an hour of
research is that most of the research is along the lines of inventing/improving
these strategies in technical detail. The fundamental idea doesn't seem to have
changed for a while.

One-shot active learning seems to be a field where there's some qualitative
breakthroughs, although it is a niche scenario for our clients. In it you don't
have N examples that you rank in some way. Rather you have one example at a
time, and you either show it to the user or you don't, and then on to the next
example.

## Prototype

The obvious thing to do would be to build a web tool to allow the user to train
a model by classifying, e.g. 10 random examples and then 10 actively selected
examples, and demonstrate the improvement (or have an oracle model handle the
labeling of the random examples in a split screen). A fun citizen-science style
classifier might make the actual labeling a bit more interesting (e.g. object
detection or image classification).

At a low level, the tool to do this already exists:
[prodigy](https://prodi.gy/) See [live demo](https://prodi.gy/demo). It does
not show the classifier user the evolution of the model out of the box though.
It would be possible to add this. It's not open source (or particularly cheap!)
though.

### Older review articles

 - [A literature survey of active machine learning in the context of natural
   language processing, 2009](http://eprints.sics.se/3600/)
 - [Active Learning Literature Survey,
   2010](http://burrsettles.com/pub/settles.activelearning.pdf)
