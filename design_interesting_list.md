# Design/Visualization/Front-End Interesting List

This document is an effort to get a little more organized about things we want to explore dealing with design, visualization and front-end dev. Primarily for the benefit of the prototype/visualization interns.

#### Data Sources Note

Our design and visualization work is generally less modular then our engineering research because it requires a data-source or other back-end engineering work to get started. For that reason, I'm making an effort to think about and note the back-end requirements for the projects listed.

## Ideas

* Some kind of interface foor pix2pix https://github.com/phillipi/pix2pix. Possibly where you draw on the whiteboard and have the result projected on top of it.
* Collaborative filtering explainer
* Recommendation interface? See what Micha is working on.
* Multi-Dimensional Visualization - Exploring/explaining t-SNE.
* t-SNE within a Product - we talked about having a recommendation model (think Netflix or Spotify recommendations) and then visualizing that recommendation model within the product itself – as an interface to influence their own recommendations. The interaction could take the form of drawing shapes to enclose or exclude certain movies or groups of movies. This could also be explored in relation to the cold start problem, with the t-SNE visualization being the interface to select your initial interests.
* 'What is Machine Learning?' explainer with interactive examples. Good example in (http://www.r2d3.us/visual-intro-to-machine-learning-part-1/). Could mine material from many of our talks (Hilary's, Kathryn's).
* t-SNE in 3D - either in WebGL or in VR (or both). Combined with some discussion of what you get out of having a 3rd dimension.
* Gaussian Processes - Visualize how they work (https://www.reddit.com/r/MachineLearning/comments/3zwlpm/eli5_gaussian_processes/)
* Probabilistic Programming Interactive explainer - start from this blog post: http://blog.fastforwardlabs.com/2017/01/30/the-algorithms-behind-probabilistic-programming.html
* Demo of pix2pix (https://github.com/phillipi/pix2pix), we should have a cat dataset/model up and running pretty soon. A good design challenge to come up with an application other than the cat drawing. Something you could more easily imagine being translate/applied to the real world.
* Chat bot (Slack or Twitter bot). Lots of technical resources on how to build, the question is what do we have it do? Interest from clients and FFL, though interest may be tapering a bit. Opportunity to experiment on ourselves with a slackbot, though in that case we would have to plan how to present publically.
* Graph databases and algorithms. Could be an interactive explainer on how they work. Neo4j has an interesting graph interface for interacting with your database. Would have to be very careful about scoping.
* 3D scanning. Demo/idea of interface? Improvement on Thingiverse.
* Data Cleaning - interactive step-by-step explainer of techniques.
* Quantified workplace - do some type of sensor or slack related analysis of our own office.
* UX for elderly.
* Telepresence robots - interfaces for interacting with
* UX for analyzing data.
* User interfaces in 3D (VR)
* Word embeddings interactive explainer
* Entity resolution explainer
* Adaptive data visualizations (visualizations that identify and expose correlations automatically)
* Visualizing decision trees (see this [cry for help](https://twitter.com/amuellerml/status/801146947713306629))
* this might be a fun model to explain with LIME for a post-report blog post or talk https://github.com/kootenpv/whereami – i wouldn't like to couple the intern's initial project to to the interpretability report. they would not have a good experience imo. but there are a couple of ways it could work: 1) the model is simple enough that it might be possible to "explain" it in an ad hoc way kind of like r2d3.us. it uses random forests, which are explainable (in the "r2d3.us explains decision trees" sense), if not interpretable in the ("i know how this model works" sense. or 2) if the intern can wait, we can run LIME on it once the prototype/report is finished and have some fun visualizing its explanations over a 3d environment.





