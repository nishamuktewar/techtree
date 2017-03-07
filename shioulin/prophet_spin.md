---
layout: post
title: Taking Prophet for a Spin
date: 
preview_image: 
feature: false
author: Shioulin
author_link: 
---

Facebook recently released [Prophet](https://facebookincubator.github.io/prophet/) as a time series forecasting procedure. It is based on an additive model with growth, seasonality and holiday effects. The model is fit using STAN. In this post we look at Prophet and take it for a spin.

## Model
Prophet frames the time series forecasting problem as a curve-fitting exercise. The dependent variable is a sum of three components. The first component is growth. Prophet accomodates both non-linear and linear growth. Non-linear growth is modeled using a logistic growth model with a carrying capacity C(t); linear growth is modeled using a simple piece-wise constant function. Changepoints are modeled using a vector of rate adjustments $\delta$, where $\delta~Laplace(0, $\tau$). Analysts can specify changepoints by providing specific dates or by adjusting the parameter $\tau$. The second component is periodic seasonality, which is modeled using a standard Fourier series. For yearly and weekly seasonality the number of approximation terms is 20 and 6 respectively. The seasonal component is smoothed with a normal prior. The last component is holidays. Holidays are modeled using an indicator function. The indicator function takes on a value of 1 on holidays and is multiplied with a smoothing prior which is normally distributed.

The model is assumed to follow a normal distribution and, along with the priors, is fit in STAN. As mentioned in our report on Probabilistic Programming, using STAN gives a fully specified posterior and allows us to quantify the probability of all events. 

## Using Prophet
We run Prophet on two types of datasets. The first is monthly data on Mauna Loa carbon dioxide levels; the second is daily close price on S&P sector ETFs.

### Mauna Loa CO2 levels
Running Prophet on monthly historical CO2 levels and setting the frequency argument gives the following forecast(FIX:insert mauna_forecast.pdf). Both periodicity and trend are captured. In addition, the plot(FIX:insert mauna_components.pdf) of yearly forecast component shows the impact of seasonality (summer vs fall) on carbon dioxide levels. 
```python
m = Prophet()
m.fit(df);
future = m.make_future_dataframe(periods=120, freq = 'm')
forecast =m.predict(future)
```
### SPY Sector ETFs
Next we run Prophet on the nine S&P Sector ETFs using daily close price from 2015 onwards. Here we discuss the results for XLY (Consumer Discretionary). To avoid overfitting we set the changepoint smoothing parameter to be 0.02 (see Figure x, FIX:insert XLYforecast.pdf) instead of the default value of 0.05 (see Figure y, FIX:insert XLYforecast_default.pdf). These two figures clearly show the effect of the changepoint smoothing parameter - the model using a smoothing parameter of 0.02 is less susceptible to noise and has a smaller error band. The plot of yearly forecast component (FIX:insert XLYcomponent.pdf) shows the shifted effect of consumer discretionary spending - higher in February through July and lower elsewhere.  
```python
m = Prophet(changepoint_prior_scale=0.02)
m.fit(df);
future = m.make_future_dataframe(periods=180)
forecast = m.predict(future)
```
## Advantages of Prophet

Using Prophet to forecast the dependent variable enables us to separate out the trend and seasonality effect. In some cases it could be a helpful way to gain intuition from the data. When used on financial time series, the model enables one to design a trading strategy based on the forecast. Since Prophet provides a fully specified posterior, the risk profile of such a strategy can also be specified. 
