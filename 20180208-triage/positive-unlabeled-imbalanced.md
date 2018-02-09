# Positive-Unlabeled learning and imbalanced classes

## Positive-Unlabeled

Positive-Unlabeled (PU) is learning a (usually/always?) binary classifier from
training data that is only a set of positive examples and a set of unlabelled
examples (assumed to comprise both positive and negative). It's an example of a
set of problems call unsupervised learning (but see [Section 2.2 of this
paper](https://arxiv.org/abs/1608.06807)). It's related to [One class
classification](https://en.wikipedia.org/wiki/One-class_classification) (where
there is no unlabled training data).

This problem has been on the table since about 1998 and solutions fall into two
categories: creating a secondary model that tries to predict negative classes
from unlabeled data OR set unlabeled to negative labels and downweight the
samples in the training process. Much of the current work is being done around
the latter method in terms of methods of setting the weight values as a tradeoff
between overfitting and convergence.

Here's a [stackoverflow
question](https://stats.stackexchange.com/questions/174383/how-to-predict-outcome-with-only-positive-cases-as-training)
with someone asking for help in this situation. Someone active in the field
replies and describes it as "an active niche of semi-supervised learning".

### Examples

 - Building a recommendation engine based only on likes
 - Identifying potential customers based on current customers
 - Friendship imputation or other link prediction
 - "If the negative class is too diverse, it is difficult to collect negative
   data in a representative way. Such a situation is typically observable in
   “one-vs-rest” classification. For example, when classifying land cover
   images into urban and non-urban regions (Li et al., 2011), it is easy to
   obtain urban samples, but it is diffi- cult to representatively collect
   diverse non-urban samples."
 - "For example, over 1000 specialized databases exist in molecular biology
   [7]. Each of these defines a set of positive examples, namely the set of
   genes or proteins included in the database. In each case, it would be useful
   to learn a classifier that can recognize additional genes or proteins that
   should be included. But in each case, the database does not contain any
   explicit set of examples that should not be included, and it is unnatural to
   ask a human expert to identify such a set."
 - "For a search engine, a user may submit a query and click some webpages
   returned by the search engine. The webpages clicked by the user can be
   regarded as positive instances with respect to the query. However, for those
   webpages the user does not click, it is hard to decide whether they are
   irrelevant (i.e., negative instances) or relevant but are not noticed by the
   user (i.e., implicit positive instances)"
 - "Inlier-based outlier detection is aimed at identifying outliers in an
   unlabeled dataset based on another dataset that consists only of inliers
   (Hido et al., 2008; Smola et al., 2009). Thanks to the information brought
   by the inlier dataset, this inlier-based approach is more powerful than the
   conventional completely unsupervised approach. This problem is also known as
   semi-supervised novelty detection (Scott & Blanchard, 2009; Blanchard et
   al., 2010)."

Precisely this problem came up while advising TE Connectivity. They're using
[this 2002 KDD
paper](https://experts.illinois.edu/en/publications/pebl-positive-example-based-learning-for-web-page-classification-)
to build a classifier that can say whether two of their products are compatible
with each other. That paper is 15+ years old and seems kind of naive in
hindsight. I couldn't find public implementations (TE implemented it in PySpark
from scratch), but it doesn't look like it would be hard using, e.g. sklearn.

### Recent papers

 - [Positive-Unlabeled Learning with Non-Negative Risk Estimator, NIPS
   2017](https://arxiv.org/abs/1703.00593) and [reference Python implementation
   using sklearn and chainer](https://github.com/kiryor/NNPUlearning). This
   seems to be a big deal because it mitigates the risk of overfitting in PU
   learning (which is server), and thus makes it possible to use better
   families of models, including neural networks.
 - [Positive-Unlabeled Learning in Streaming Networks, KDD
   2016](http://www.kdd.org/kdd2016/subtopic/view/positive-unlabeled-learning-in-streaming-networks/670).
   How to handle this situation with streaming data in which the learned model
   should evolve with time, e.g. an active social network.
 - [Analysis of Learning from Positive and Unlabeled Data, NIPS
   2014](https://papers.nips.cc/paper/5509-analysis-of-learning-from-positive-and-unlabeled-data.pdf).
   Based on a quick read, this looks like theoretical arguments about
   circumstances in which learning on PU data converges to a model similar to
   that you'd get with data from both classes.
 - [Efficient Training for Positive Unlabeled
   Learning](https://arxiv.org/abs/1608.06807) seems to focus in particular on
   fast PU algorithms for large datasets
 - [Convex Formulation for Learning from Positive and Unlabeled Data, ICML
   2015](http://proceedings.mlr.press/v37/plessis15.pdf)
 - [PU Learning for Matrix Completion, ICML
   2015](http://proceedings.mlr.press/v37/hsiehb15.pdf) looks in detail at
   example of adjacency matrix of friendship network.

### Reviews and old papers (abstracts skimmed)

 - [A Survey on Postive and Unlabelled Learning, 2013
   review](https://www.eecis.udel.edu/~vijay/fall13/snlp/lit-survey/PositiveLearning.pdf),
   clear summary of classes of approaches.
 - [Learning with Positive and Unlabeled Examples Using Weighted Logistic
   Regression, ICML
   2003](https://www.cs.uic.edu/~liub/publications/icml-03.pdf)
 - [Positive Example Learning for Content-Based Recommendations: A
   Cost-Sensitive Learning Based Approach, ICIS
   2009](http://aisel.aisnet.org/cgi/viewcontent.cgi?article=1017&context=icis2009)
 - [Building Text Classifiers Using Positive and Unlabeled Examples, ICDM
   2003](https://www.cs.uic.edu/~liub/publications/ICDM-03.pdf) (and [this
   author's
   bibliograpy](https://www.cs.uic.edu/~liub/NSF/PSC-IIS-0307239.html))
 - [Learning classifiers from only positive and unlabeled
   data, KDD 2008](https://dl.acm.org/citation.cfm?id=1401920&dl=ACM&coll=DL)

## Imbalanced classes

I don't think there's a report in this. It's too context-specific a problem to
have a lot of research directed at it. But there's definitely a good few
sections to be written about it in a report on PU learning. See, e.g. [this SVDS
overview](https://www.svds.com/learning-imbalanced-classes/).
