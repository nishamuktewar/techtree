**Automated ML** refers to data cleaning, feature selection, the tuning of hyperparameters and choosing the right model without human input and has benefitted from recent developments in NN algorithms (although NNs are not a pre-requisite, eg see tpot below). The consensus is that autoML should not be considered as replacement of human expertise, but rather as a productivity enhancement tool. Industries using streams of data benefit particularly from such approaches, which in this case facilitate automation that reduces the volume of data to be processed.

Automated ML has been the focus of the [ChaLearn autoML Kaggle competition](https://competitions.codalab.org/competitions/2321) that ended in 2016 and got significant interest. Auto-sklearn, the package used by the winners of the competition, offers a variety of tools for data preprocessing, and algorithm selection. The team from Dstillery shared the second place with their in-house algorithm.  

A new open source package, tpot, using genetic algorithms to fine-tune hyperparameters, appeared alongside auto-sklearn, an older drop-in replacement for scikit-learn estimators. A few older packages as well as packages under development exist too. 

Despite this being a very active field that can offer meaningful solutions to a variety of industries, the various implementations of algorithms focus on different aspects of automation, eg algorithm selection, hyperparameter selection etc. A few (eg auto-sklearn ) deal with the entire workflow. As such, comprehensive autoML tools require a lot of CPU power and benefit strongly from parallelization. Topologically restricted Boltzmann machines (RBM) and Gaussian RBMs, were *recently shown to improve computation time when compared to standard RBMs using both synthetic and real-world data.  

The field could be mature in terms of technology, tools, and interest, but there is still a plethora of moving parts and incremental algorithmic improvements affect different steps in the pipeline (ie Data preprocessing, model and hyperparameter selection, insights). Some packages address the entire pipeline (eg auto-sklearn, MLbox), while many recent improvements are implemented as stand-alone tools (eg tpot). Focusing on this topic as the next report will require going through existing packages and adopting an approach that will systematically explore their applicability in (possibly) different combinations.

*Recent papers:
 
[A topological insight into restricted Boltzmann machines](https://link.springer.com/article/10.1007/s10994-016-5570-z)

[Learning to learn by gradient descent by gradient descent](https://arxiv.org/abs/1606.04474)

*Recent blogposts:

[AirBnB](https://medium.com/airbnb-engineering/automated-machine-learning-a-paradigm-shift-that-accelerates-data-scientist-productivity-airbnb-f1f8a10d61f8)

[MLBox at Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/07/mlbox-library-automated-machine-learning/)

*Recent open source tools:

https://github.com/rhiever/tpot

http://www.cs.ubc.ca/labs/beta/Projects/autoweka/

https://github.com/AxeldeRomblay/MLBox

https://github.com/deepmind/learning-to-learn
