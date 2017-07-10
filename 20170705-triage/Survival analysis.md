**Survival analysis** has applications in a variety of fields, including (but not necessarily restricted to) healthcare, customer conversion/churn, product lifespan, IoT, insurance, and investments. There is continuing interest in this type of questions as they have unique issues that need to be overcome (most notably the presence of “censored data”, i.e. the fact that oftentimes we cannot observe an outcome, e.g. the patient was in temporary remission when the clinical trial ended). 

The latest version of the package ‘lifelines’ (python implementation of classical statistical survival algorithms) was released in 2017 as well as the R package ‘survival’. This year also a new algorithm, ’WTTE-RNN’ (Weibull Time To Event Recurrent Neural Network) created a lot of interest, as it combines recurrent neural networks with the Weibull distribution. The former ensures that recurrent events, time varying covariates, and non-random temporal patterns are handled appropriately, while the latter allows for flexibility in the fitted function and is addressing the censored data problem. The algorithm pays attention to the definition of churn, ranking the customers as “more or less churned” instead of allocating binary outcomes. This theoretical basis of the algorithm makes intuitive sense in terms of customer attrition, but its validity will need to be evaluated for the other applications of survival models.  This approach has been implemented in two packages (base python and keras, see below). Finally, there is a *recent implementation of survival models using probabilistic programming (‘Survivalstan', Stan/R/Python), which offers a choice of a variety of algorithms, including the Weibull parameterization ([ref](http://journals.sagepub.com/doi/abs/10.1177/0962280214548748)), and also exports posterior probabilities.

This is a mature area of research with various open source tools implementing the different approaches. As a group of algorithms it is of particular interest as it is solving a unique type of problems that involve longitudinal data with a variety of applications. Survival analysis algorithms could be tested against longitudinal datasets such as: clinical patient data, fertility data, customer conversion data, churn data, A/B testing data, stock price data (with “events” log), insurance claim history etc. 

*Recent blogposts:

[lifelines](http://savvastjortjoglou.com/nfl-survival-analysis-kaplan-meier.html)

[wtte-rnn](https://ragulpr.github.io/2016/12/22/WTTE-RNN-Hackless-churn-modeling) 

[wtte-rnn, keras](http://daynebatten.com/2017/02/recurrent-neural-networks-churn)

*Recent open source tools :

https://lifelines.readthedocs.io/en/latest/Quickstart.html

https://github.com/ragulpr/wtte-rnn

https://github.com/daynebatten/keras-wtte-rnn

https://github.com/hammerlab/survivalstan.

*Recent: less than a year old
