# Time Series Forecasting                                                                             
Verdict - No, hard to imagine a prototype                                                                                        
                                                                                                     
## Overview                                                                                          
                   
- Similar to previous attempts, there is [nothing specific about time series that jumped out](https://github.com/fastforwardlabs/techtree/blob/master/20161129-triage/timeseries_forecasting_gaussianprocesses.md). Previous topic selection effort defined a more narrow scope for time series forecasting: gaussian processes(GP) and anomaly detection. Anomaly detection is a seperate topic this time.           

- On the broader scope of time-series forecasting, the trend seems to be "let's use machine learning approaches to do time series analysis". In particular [one recent (2018) paper](https://www.econstor.eu/bitstream/10419/173659/1/1011563126.pdf) was quite literally a comparison of multilayer perceptron (MLP), logistic regression, naïve Bayes, k-nearest neighbors, decision trees, random forests, and gradient-boosting trees in their use applied to time series forecasting. Another one looks at [deep learning for time series](https://arxiv.org/pdf/1701.01887.pdf). 

- It may be very interesting to compare various ML approaches. However, the report may quickly become unwieldy or unsatisfying for answering the single business use case question, “How should I do time-series forecasting?”                                                                                                                                        
- On GP there is nothing to add
                                                                                                     
## Prototype ideas                                                                                   
- Stock market predictions - will be the first thing to come to most people’s minds and if it’s not making them rich it may be easily dismissed.                      
- Supply chain simulation - determining optimal company production and/or transportation levels (this will be relevant to a lot of clients)                                               
- Gasoline or Electricity pricing simulation (weekly/monthly) - fairly understandable for most people who buy gas/pay electric bills each month.                                                                                       
                                                                                                     
## Papers                                                                                            
                                                                                                     
[Survey, 2018](https://www.econstor.eu/bitstream/10419/173659/1/1011563126.pdf)                                                 
                                                                                                     
[Time Series Forecasting with Extreme ML, 2017](https://books.google.com/books?id=amclDwAAQBAJ&pg=PA113&lpg=PA113&dq=Short+Term+Prediction+of+Continuous+Time+Series+Based+on+Extreme+Learning+Machine+wang&source=bl&ots=QOsXtKK95q&sig=20VfkozYHjFHI0lSTdf3dxKJaek&hl=en&sa=X&ved=0ahUKEwj6p9LzyJXZAhVkw1kKHTOvDy0Q6AEIPjAD#v=onepage&q=Short%20Term%20Prediction%20of%20Continuous%20Time%20Series%20Based%20on%20Extreme%20Learning%20Machine%20wang&f=false)                                            
                                                                                                     
[Time Series Forecasting with LSTMs, 2017](https://blog.statsbot.co/time-series-prediction-using-recurrent-neural-networks-lstms-807fa6ca7f)          

[Deep Learning for Time Series](https://arxiv.org/pdf/1701.01887.pdf)
