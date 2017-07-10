## Gaussian processes

Nothing to add to [the
notes](https://github.com/fastforwardlabs/techtree/blob/master/20161129-triage/timeseries_forecasting_gaussianprocesses.md)
collected last time, except to say

 - there are O(n) algorithms and it's attracting
   still more attention from the open source ML community

 - it's still challenging to envisage a prototype that depends on it

## Anomaly detection

This is already a fairly common problem. It's only going to become more common
with the prevalence of sensor data.

Good solutions remain extremely problem-specific though, which is why services
like Datadog use relatively simple robust approaches. Any other approach is the
anomaly detection equivalent of "feature engineering". It's difficult to
imagine us writing a good report about feature engineering. Any useful insight
depends entirely on the problem.

[Mike Galvin did some
research](https://github.com/fastforwardlabs/ff_archive/blob/master/changepoint/Changepoint%20Detection%20Blog%20Post.ipynb)
on changepoint detection, which is a specific subproblem of anomaly detection.
His focus was on "best practices", i.e. on mature approaches rather than new
ideas, but as far as I know he did not dig up anything novel or particular
exciting. 

A useful/breakthrough contribution would support the _online_ use case, i.e.
detect anomalies in live streams of data. To that end me favorite paper in this
field was an online algorithm from 2007, Adams and Mackay,
https://arxiv.org/abs/0710.3742, which has not since set the world on fire in
terms of citations.

(Interestingly, most of the papers that cite it that have done well are about
GPs, so perhaps there _is_ a connection there? Will look into this more.)
