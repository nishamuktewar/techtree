
### Recurrent Neural Networks for Text Classification with Multi-Task Learning by Pengfeng Liu et al. (2016)
Liu et al. explore three difference RNN architectures for text classification (four benchmark tasks, all movie reviews - sentiment classification, subjectivity classification). Architectures differ in how much information they share or keep task specific (task-specific vs. shared LSTM layers):

- Uniform-layer architecture: tasks share same LSTM layer and embedding layer, besides their own embedding layer.
- Coupled-layer architecture: LSTM layer for each task, which can use information of LSTM layer of other task; gating to control information flow.
- Shared-layer architecture: separate LSTM layer for each task and shared bi-directional LSTM layer; gating mechanism for controlling information flow. Shared layer can be initialized by unsupervised pre-training (used Bengio et al. 2007 language model).

Embedding is always word2vec. The output layer is always task specific (softmax layer).

---

### Adversarial Multi-task learning for text classification by Pengfeng Liu et al. (2016)
Liu et al. use adversarial training to create a "pure" shared embedding layer that only encodes information that is not task specific. They use an adversarial set up where the discriminator is tasked to predict the task the example is drawn from based on the shared layer, which forces the generator to not represent that information (it pushes it into the task-specific layer). Additional regularization ensures no non-task specific information makes it into the task-specific layers (the loss function takes the "prediction loss", plus adversarial loss, plus regularization).

Liu et al. needed to adapt adversarial training to work in multi-class setting. Word embeddings used here are GloVe (without motivation). They demonstrate that shared "word embeddings" are great for transfer learning.

---

### A Unified Architecture for Natural Language Processing: Deep Neural Networks with Multitask Learning by Collobert & Weston (2008)

The first (prominent) paper to apply multi-task learning (and semi-supervised learning) to language modeling. They build a model to solve for different NLP tasks like part of speech tagging, chunking, named entity recognition, and semantic role labelling. POS is often used as a feature in SRL but, if based on a model trained separately from SRL, it may not learn the most relevant information to support SRL, errors are propagated - a great rationale for multi-task learning and a "rule" for choosing tasks to be learned jointly (other than, not enough data in a somewhat related domain).

They don't use word embeddings (pre Mikolov et al. 2013), but a learned look up table for words. At the heart of the NN is a convolutional network, a time-delay neural network (TDNN). Size of the convolution is carefully chosen, somewhat task dependent. It's an old paper, it is important historically (for the prominent introduction to multi-task & NNs), and is nicely motivated RE tasks.

---

### An Overview of Multi-Task Learningin Deep Neural Networks by Ruder 2017

Overview of multi-task learning, the different approaches taken over time. MLT has been around for about 20 years (multi-task learning prior to NNs: linear models, kernel methods, Bayesian algorithms) but until now, hard parameter sharing has been the norm (b/c homogenous (all tasks associated with single output, e.g., MNIST) vs. heterogeneous multi-task learning (each task has a unique set of outputs) until now). With NNs, we can venture into "learning to share", i.e., learning what information should be shared (and converselty, what information is task specific). It is a good overview and motivation for MLT, good for an introduction of the report.

Why does MLT work?
- implicit data augmentation, increase sample size of your model
- attention focusing, helps identify features that matter
- eavesdropping, task A can learn from task B
- Regularization & inductive bias, reduces risk of overfitting

MLT in non-neural models, approaches
- block-sparse regularization
- explicitly learning the task relationships, clustering approaches and (bayesian) hierarchical models

Recent approaches in deep learning
- deep relationship networks (computer vision), prior on task relationship
- fully adaptive feature sharing (widening NN as task(s) require)
- cross-stich networks (learning linear combination of task specific output layers)
- low supervision, applicable especially where tasks contain lower level sub tasks, e.g. POS for SRL
- joint many task model, same as low supervision
- weighting losses with uncertainty (need to read more to understand)
- tensor factorization to split task and shared weights
- Sluice networks (the author's approach), learns what should be shared and what should not, uses cross stich and regularization, etc.

Ruder did not include the adversarial approach to (shared) representation learning.

Auxiliary task scenarios
- MLT with related tasks
- MLT with opposite tasks (adversarial), uses adversarial loss and need a gradient reversal layer
- hits
- focusing attention (i.e., what matters)
- quantization smoothing
- predicting inputs
- using the future to predict the present (don't understand how this works)
- (general) representation learning

It is still an open research questions which tasks are actually helpful, i.e., no theoretical guidance / definition. In practice, intuition can guide selection of tasks, learning parameter sharing will counteract "negative transfer", i.e., doing less well in MLT setting compared to single task.

---

##### What type of data do we need?

It depends on the auxiliary task scenario we want to focus on. Related or opposite tasks seems most compelling.

##### What is the approach we want to take?

- We can focus on multi-task learning and then cover multi-task approaches to e.g., linear models before we go to NN-based multitasking.
- We can focus on text classification and then cover different, simpler approaches to text classification, i.e., single-task tf-idf + classifier, single-task embeddings + classifier, single-task end-to-end, mutlti-task end-to-end.
- How much do we want to make this about natural language processing (i.e., POS, NER, SRL) or just classifying text?

##### What's the application?

Personalization is, in a sense, multi-task. Each task for a person.
Topic & doman prediction
Assisted writing.
Plagiarism detection, "this doesn't sound like the NYT"

##### What's exciting?

- Learning how tasks relate to one another.
- Learning task-independent embeddings not just by making the data super general, i.e., all of Wikipedia (transfer learning, pre-training).
- Making use of all the data you have, in one model, to benefit all tasks you want to solve.
- Cool title - "Learning to share, or not."
- revision word embeddings
    + http://ruder.io/word-embeddings-2017/
    + http://multithreaded.stitchfix.com/blog/2017/10/18/stop-using-word2vec/
    + http://multithreaded.stitchfix.com/blog/2017/10/25/word-tensors/

---

### Domain Separation Networks Bousmalis et al. 2016

They use an adversarial network setup in order to obtain from labelled source images good, predicted labels for the target. Specifically, they explicitly model a private and shared space maintained by a loss function that measures similarity in the similarity subspace (penalty if dissimilar) and measures difference between the private spaces and the shared subspace (penality if similar). They use several image data sets, e.g., MNIST and MNIST-M, synthetic to real images of traffic signs. The advantage is that you can now cheaply synthesize labeled image data and then use the unlabelled real world data to learn a shared representation that allows to get labels for the real-world data (results look compelling). The paper has a great and clear discussion of the different loss functions they tried, really the key to the approach, DANN is better empirically for similarity loss than MMD (maximum mean discrepancy), empirically, the difference loss matters. CNN & adversarial approach (gradient reversal layer), uses predicted target on source and reconstruction loss simultaneously.

Similar in approach to Adversarial Multi-task learning for text classification by Pengfeng Liu et al. (2016) but more in depth exploration of loss functions, application to images, different intended task of learned shared representation.

Code: https://github.com/tensorflow/models/tree/master/domain_adaptation (2016 and 2017 paper)

---

### DRAW 

_Article_: https://arxiv.org/abs/1502.04623

Sequential (RNN (LSTM) based) auto-encoding framework with attention mechanism for image generation and classification. Sequential passes through an image and shifting attention allows the network to improve where needed for image generation (or get a better read where needed for classification). Results for simpler images, e.g., MNIST look fine. More complex images are harder. Biggest contribution is expose of attention mechanism. 

---

### Attend, Infer, Repeat

_Article_: https://arxiv.org/abs/1603.08575

Using RNN and attention mechanisms for count the number of objects in a scene and more generally scene understanding. Uses end-to-end learning and amortized variational inference. 

Similar in spirit to DRAW but with a focus on scene understanding (vs. generation) from unlabeled images. Cool, especially the unsupervised nature of model )(and efficiency at test time). 

---



---

TODO:




