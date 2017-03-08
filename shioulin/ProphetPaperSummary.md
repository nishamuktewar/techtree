Summary of [Prophet paper](https://facebookincubator.github.io/prophet/static/prophet_paper_20170113.pdf)

* Frames time series forecasting as a curve fitting exercise
* Dependant variable is modeled as an additive model and is the summation of three components, growth, seasonality, and holidays y(t) = g(t) + s(t) + h(t) + \epsilon(t).
* Non linear growth is based on g(t) = C/1 + exp(−k(t − b)), where C is carrying capacity, k is growth rate, and b is offset parameter. The actual model incorporates changepoints δ and introduces γ to adjust the offset parameter b such that function is continuous. g(t) = C(t)/(1 + exp(−(k + a(t)'δ)(t − (b + a(t)'γ)))
* δ is modeled using a sparse prior Laplace (0, τ), where τ is an user controlled input variable. Changepoints can also be explicitly specified by providing dates
* Linear growth g(t) = (k + a(t)'δ)t + (b + a(t)'γ)
* The second component, seasonality, is modeled using a standard Fourier Series. For yearly seasonality the total number of approximation terms used is 20, for weekly it is 6.
* The third component is holidays and events. This is modeled using an indicator function. 
* The dependant variable and priors are fitted in STAN. The user does not explicitly call STAN when using Prophet. 
* The rest of the paper introduces "Simulated Historical Forecast" as a way to measure performance of various forecasting methods. Simulated Historical Forecast is done by producing K forecasts at various cutoff points in history, chosen such that the horizons lie in the history and total error can be computed. 
