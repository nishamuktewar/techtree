Chatbots: conversational agents who either help users solve problems e.g.
scheduling or flighting bookings (goal-directed) or engage in dialogue (open-
ended) or a bit of both. Assumption here is that these chatbots live in
platforms like Slack (i.e. no voice recognition needed). There are distinct
problems when building a chatbot.

Intent recognition: What does the user want?

UX design: how to design a fun, interesting chatbot personality that also helps
with setting expectations for the user (i.e. what the bot can and cannot do -
bot character can function like an implicit user guide)?

Automatic text generation: Generating the chatbot answers. To date, the
community uses templates and pre-defined conversational trees which are
sufficient for goal-directed, closed-domain conversations.

Questions answering and community question answering: A practical bottle neck
to many chatbot applications - how do you take a large body of unstructured
text data and generate answers? There are new data sets
(https://rajpurkar.github.io/SQuAD-explorer/) and community question answering
(http://alt.qcri.org/semeval2017/task3/). Relevant papers:
https://arxiv.org/abs/1607.06275 and https://arxiv.org/abs/1502.05698v1 and
http://cs.umd.edu/~miyyer/pubs/2014_qb_rnn.pdf.

Bot personality, model of turn taking, etc.: Automatic text generation poses
the problem of ensuring a consistent bot personality. One paper where bot tries
to adjust itself to inferred user communication preferences.

Many vendors/platforms: https://aws.amazon.com/blogs/aws/amazon-lex-build-
conversational-voice-text-interfaces/ (just announced), howdy.ai, talla.com,
etc.

For open-domain bots and closed-domain to the extent that quality of
conversation matters - how do we measure success ... unsolved problem but
community is clearly working on it.


