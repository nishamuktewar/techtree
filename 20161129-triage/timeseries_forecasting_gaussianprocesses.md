On the general topic of time series and forecasting, I wasn't able to find
anything generic and fundamental and exciting. It's a _huge_ field (signal
processing, finance, etc.) and I worry it would be a "land war in Asia" report.

I like Gaussian Processes as a way of not biting too much off. Those are a more
general modelling technique that happen to be commonly used for time series,
e.g.
http://andrewgelman.com/2012/06/14/cool-ass-signal-processing-using-gaussian-processes/.
They are a non-parametric/massively parametric Bayesian modelling technique.
They were mentioned in a footnote of FF05 and would build on that.

This is an up-and-coming technique that will be very popular in a couple of
years time IMO.

Micha pointed me in the direction of a fundamental and very significant
algorithmic breakthrough with these:
http://www.gitxiv.com/posts/MThYikh4v6mccqZhz/variational-fourier-features-for-gaussian-processes.
This makes it O(nm) instead of O(nm^2), i.e. very significant speedup (n is
number of data points, m is number of features).

The paper benchmarks the method using a "classic" GP dataset: 6m flight delays
in the US. Key paragraph:

> Running the experiment with ∼ 5.93 million data points for the VFF result using
> our Python implementation took 265±6 seconds (626±11 s CPU time) on a two-core
> MacBook Pro laptop (with all calculation done on the CPU). The results for
> 10,000 data points were calculated in 21 ± 2 seconds (27 ± 4 s CPU time). For
> comparison, according to Samo and Roberts (2016) running the String GP
> experiment took 91.0 hours total CPU time (or 15 h of wall-clock time on an
> 8-core machine).

Currently GPs are used mostly (entirely?!) for offline/batch analyses. The
public Tensorflow implementation of this new algorithm was run on a laptop CPU.
The fundamental big-Oh speedup + running it on a GPU opens up the possibility
of GPs being an effectively online/realtime technique.

This work is exciting and seems like a fundamental breakthrough. The paper is
extremely technical though, and I was not able to critically assess it.

Some of our clients would find it interesting/relevant (Point 72, Celmatix?),
but the applications might not be obvious to others.

## Note added 2017-01-19

[GPs in (R)Stan tutorial from NIPS 2016](https://github.com/rtrangucci/gps_in_stan/)
