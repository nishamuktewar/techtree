This is things like AWS Lambda and Google AppEngine, i.e. cloud instances that
exist for the duration of a single function call. In that sense it's
Modularization/containerization taken to its ultimate conclusion. The claim is
this simplifies development, but more importantly reduces cost (you scale in
exact proportion to demand with subsecond billing) and simplifies ops (not just
no infrastructure on prem, but no infrastructure period!). Like MapReduce it
seems to require a more functional programming style (shared or persisted data
is presumably awkard)

This would likely be a data engineering-focussed report with some
CS/algorithms, a la report 2.

It's similar but different to spark, dask, etc. See the intro of
http://ericjonas.com/pywren.html

It's of interest to non-DS/ML people too, e.g.
 - front-end apps: https://pragprog.com/book/brapps/serverless-single-page-apps
 - devops: http://martinfowler.com/articles/serverless.html

There's not a ton of algorithmic/fundamental research in this area that I could
find (presumably clever people at Google and AWS are thinking about it from a
CS POV), although it is attracting attention as a tool for data science:
 - http://tothestars.io/blog/2016/10/19/serverless-ai makes the connection with
   automatic ML by using AWS Lambda for gridsearch
 - this goes into some of the difficulties of getting heavyweight ML
   dependencies working on AWS Lambda
   https://serverlesscode.com/post/deploy-scikitlearn-on-lamba/

There's a lot of work on better tooling, to make it live up to the claim of
being easier than traditional development
 - https://github.com/ericmjonas/pywren
   mapreduce-like python futures using aws s3 and lambda on the backend, see
   also http://tothestars.io/blog/2016/11/2/serverless-mapreduce
 - https://github.com/awslabs/chalice, which makes lambda-ization and
   deployment simpler than the manual process, which looks like this
   http://joelgrus.com/2015/12/30/polyglot-twitter-bot-part-3-python-27-aws-lambda/

We should watch this 30 min PyCon 2016 talk:
https://www.youtube.com/watch?v=EpCHD9AIHAM

I think this is extremely cool stuff and I would love to do it FWIW.

Possible prototypes:
 - serverless slack bot, perhaps ingesting lots of small pieces of data, e.g. tweets?
 - parameter optimization of sklearn models?
