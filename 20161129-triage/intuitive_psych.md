Karpathy recognizes lack of intuitive psychology, i.e. understanding an
opponents motivation (as well as lack of intuitive physics) as something that's
holding AI back: http://karpathy.github.io/2016/05/31/rl/

"""
A human brings in a huge amount of prior knowledge, such as intuitive physics (the ball bounces, it’s unlikely to teleport, it’s unlikely to suddenly stop, it maintains a constant velocity, etc.), and intuitive psychology (the AI opponent “wants” to win, is likely following an obvious strategy of moving towards the ball, etc.). You also understand the concept of being “in control” of a paddle, and that it responds to your UP/DOWN key commands. In contrast, our algorithms start from scratch which is simultaneously impressive (because it works) and depressing (because we lack concrete ideas for how not to).
"""

Different sets of rules, one for agents the other for objects, that allows us to
generalize from unseen to observed examples.

Handy wavy paper that explains some of the basic concepts: http://www.iiisci.org/journal/CV$/sci/pdfs/iZA532FA.pdf

Funny, like universal grammar, this research program tries to identify basic
programs or primities that are used to best explain an observed phenomenon
(here applied to handwriting): http://science.sciencemag.org/content/350/6266/1332

Naive utility calculus to understand the motivations of others: https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rRJ9wTJMUB8C&sortby=pubdate&citation_for_view=rRJ9wTJMUB8C:BrOSOlqYqPUC

Intrinstic motivations to simplify learning tasks (i.e. reduce options we need
to consider): https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rRJ9wTJMUB8C&sortby=pubdate&citation_for_view=rRJ9wTJMUB8C:FiDNX6EVdGUC

Action understanding and collaboration:
https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rRJ9wTJMUB8C&sortby=pubdate&citation_for_view=rRJ9wTJMUB8C:mKu_rENv82IC
and https://scholar.google.com/citations?view_op=view_citation&hl=en&user=rRJ9wTJMUB8C&sortby=pubdate&citation_for_view=rRJ9wTJMUB8C:KaMxkj08jr0C

Related but not the same: PhysNet out of FB AI using deep net to learn intuitive
physics (https://arxiv.org/pdf/1603.01312.pdf) (bottom up) vs. work out of the
Tenenbaum lab.