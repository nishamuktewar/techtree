# Imputation

Imputation of missing data is a very broad topic. It's a useful skill for any
data scientist.

If you need the missing data itself, you're doing imputation. 

If you need it only so you can perform a downstream task, e.g. train a model,
that's a related but different problem. "Explicit imputation" is undesirable
but sometimes unavoidable in this context.

Example applications:
  
 - recommendation (i.e. matrix factorization)
 - genetic data, e.g. [Scalable imputation of genetic data with a discrete
   fragmentation-coagulation process, NIPS
   2012](https://papers.nips.cc/paper/4782-scalable-imputation-of-genetic-data-with-a-discrete-fragmentation-coagulation-process)

## Databases

 - [BayesDB](https://github.com/probcomp/bayeslite) includes an explicit INFER
   keyword to fill in the blanks in a table. We should try again to get this
   running.

 - [ImputeDB, 2017, also MIT](https://github.com/mitdbg/imputedb) does the
   imputation implicitly.

## Research

Nothing about this problem per se in the last NIPS or ICML (although lots on
generative approaches).

[An Empirical Comparison of Multiple Imputation Methods for Categorical Data,
2015](https://arxiv.org/abs/1508.05918) is the most recent survey/shoot-off I
could find. It looks at "chained equations using generalized linear models,
chained equations using classification and regression trees, and a fully
Bayesian joint distribution based on Dirichlet Process mixture models". I
believe the last of these is the one under the hood of BayesDB.

This review looks at the [basic old school nearest neighbor
techniques](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4959387/)

## Concerns

Commoditization breakthroughs like BayesDB and ImputeDB are not nothing, but
the stats/ML community is quiet, which suggests there haven't been any recent
fundamental breakthroughs.

There are lots of approaches, and which is best is probably dataset specific,
so the report risks becoming a box of tricks/best practice survey.
