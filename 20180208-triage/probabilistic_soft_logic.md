## Probabilistic Soft Logic (PSL) and / or Statistical Relational Learning (SRL) and / Relational Machine Learning (RML)

PSL / STL / RML is first order logic with soft truth values (i.e., interval [0, 1]) (first order logic only knows hard truth values, 0 or 1). Soft truth values allow for the integration of similarity functions (at the level of individuals and sets) into models and opens up models defined using logic syntax for optimization.

*Propositional logic* allows us to talk about relationships among individuals, for example:
 - If Jack knows Jill, Jill knows Jack.
 - Jack knows Jill.
We infer that Jill knows Jack. However, propositional logic does not allow us to say anything about the rules of people knowing each other *in general*. 

*Relational logic* includes variables and quantifiers that allow us to make such general statements, for example:
 - If one person knows a second person, then the second person knows the first.
Relational logic allows us to express information about multiple objects and the existence of objects that satisfy certain conditions without saying which objects they are. Formally, the vocabulary of relational logic consists of:
 - object constants
 - relationship constants
 - variables
and here is a "sentence" in relational logic expressing that "if p holds of an object, then q holds of that object and itself":
 - (∀x.(p(x) ⇒ q(x,x)))
These kinds of rules allow us to express a great variety of "stuff" about the word, especially relationships amongst objects, some we may know to be true a priori (e.g., If A is bigger and B and C is bigger than A then B is smaller than C). 

*First order logic* is relational logic, a powerful language, and with soft truth values, amendable to use with common convex optimization techniques. We can thus learn (complex) relational structure using ML (as opposed to statistical relationships, what most ML algorithms learn to date).

... for more on relational logic: [Relational Logic chapter](http://logic.stanford.edu/intrologic/notes/chapter_06.html)

Applications of PSL include:
 - Collective classification
 - Link prediction: whether or not two or more objects are related
 - Link-based clustering: clustering of objects where similarity is determined by links of the object (related to collaborative filtering)
 - Social network modeling
 - Object identification / entity resolution / record linkage: e.g. https://www.cs.utexas.edu/~ml/papers/beltagy.acl14.pdf on text similarity

Applied to social networks, for example, PSL allows one to not only model different types of relations between users, such as friendship or family relations, but also multiple notions of similarity, for instance based on hobbies, beliefs, or opinions on specific topics.

... for an introduction to PSL, see [here](http://stephenbach.net/files/kimmig-probprog12.pdf)

A [recent paper](https://arxiv.org/pdf/1603.06318.pdf) shows that logic rules can be used to inform the weights of a neural network (through iterative rule knowledge distillation), a way of inserting a (strong) prior into a network, which improved sentiment analysis and entity recognition. It also makes NNs more interpretable, the authors claim.

Other:
 - NIPS 2017 tutorial https://nips.cc/Conferences/2017/Schedule?showEvent=8739
 - StarAI active conference series: http://www.starai.org/2017/
 - Open source framework: http://psl.linqs.org/

*Overall*: PSL combined with DL / NNs unites the branches of traditional AI (in may ways, PSL is more "traditional"). Logic rules are able to capture regularities that current ML techniques can't (or have to expensively learn). There are many promising applications of PSL, but the field is quite academic. I think this deserves one more look with an emphasis on existing tools that show the field is commodifying.
