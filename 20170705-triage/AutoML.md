**Automated ML** refers to data cleaning, feature selection, the tuning of hyperparameters and choosing the right model without human input and has benefitted from recent developments in NN algorithms (although NNs are not a pre-requisite, eg see tpot below). The consensus is that autoML should not be considered as replacement of human expertise, but rather as a productivity enhancement tool. Industries using streams of data might have a special interest in such approaches that reduce the volume of data to be processed.

Comprehensive autoML tools require a lot of computational power and benefit strongly from parallelization. Restricted Boltzmann machines (RBM) and Gaussian RBMs, were *recently shown to improve computation time when compared to standard RBMs using both synthetic and real-world data.

Automated ML has been the focus of the [ChaLearn autoML Kaggle competition](https://competitions.codalab.org/competitions/2321) that ended in 2016 and got significant interest. Auto-sklearn, the package used by the winners of the competition, offers a variety of tools for data preprocessing and algorithm selection. The team from Dstillery shared the second place with their in-house algorithm.  Auto-sklearn is a maintained package built on scikit-learn, while tpot, a new-ish open source package that uses genetic algorithms to fine-tune hyperparameters has drawn interest, however I failed to find applications with it online. A few older packages as well as packages under development exist too. 

Despite this being a field that has attracted interest as it can offer meaningful solutions to a variety of industries, the various package implementations tend to focus on difscrete aspects of automation, eg algorithm selection, hyperparameter selection etc. and a few (eg auto-sklearn, MLbox) deal with the entire workflow.   The field could be mature in terms of technology, tools, and interest, but there is still a plethora of moving parts and incremental algorithmic improvements affect different steps in the pipeline (ie Data preprocessing, model and hyperparameter selection, insights).  If the different implementations can be meaningfully and systematically explored, this is an interesting topic with a wide variety of datasets that can be tested against.

*Recent papers:
 
[A topological insight into restricted Boltzmann machines](https://link.springer.com/article/10.1007/s10994-016-5570-z)

[Learning to learn by gradient descent](https://arxiv.org/abs/1606.04474)

*Recent blogposts:

[AirBnB](https://medium.com/airbnb-engineering/automated-machine-learning-a-paradigm-shift-that-accelerates-data-scientist-productivity-airbnb-f1f8a10d61f8)

[MLBox at Analytics Vidhya](https://www.analyticsvidhya.com/blog/2017/07/mlbox-library-automated-machine-learning/)

*Recent open source tools:

https://github.com/rhiever/tpot

http://www.cs.ubc.ca/labs/beta/Projects/autoweka/

https://github.com/AxeldeRomblay/MLBox

https://github.com/deepmind/learning-to-learn
