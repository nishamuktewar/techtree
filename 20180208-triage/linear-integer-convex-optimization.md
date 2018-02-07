# Linear and integer programs and convex optimization

## Definitions

The goal of linear programming is to choose all the xs in f(x1, x2 ... xn) to
minimize x, while simultaneously satisfying a set of constraints (linear
functions of the xs that must be <= 0).

Integer programing is the same deal, but all the xs must be integers. Solving
these problems is NP-hard.

All linear and integer programs are convex optimization problems.

## Applications

Examples on integer programming problems ([taken from
here](https://blog.remix.com/an-intro-to-integer-programming-for-engineers-simplified-bus-scheduling-bd3d64895e92))

 - Transportation problems (such as package delivery, or resource delivery such
   as energy distribution)
 - Warehouse and container packing problems
 - Matching problems (such as what stock brokerages do to match buyers with
   sellers, or scheduling which sports teams play each other)

Examples of linear programming ([taken from Gorubi
docs](http://examples.gurobi.com/))

 - "select the order of blocks removed from an open-pit mine. This example
   includes the more general problem of project selection that can be applied
   to a broad range of industries."
 - "wire together offshore wind turbines"
 - traveling salesman-type problems (e.g. "vehicle routing, circuit design, and
   DNA sequencing")
 - cell tower coverage
 - facility location (e.g. where to build warehouse to supply a large number of
   supermarkets)
 - production scheduling
 - kidney exchange
 - portfolio construction

We saw an example with Birchbox, who want to send (integer!) samples to
customers, while satisfying their inventory.

And we saw it with Burda, who have 3 very expensive printing presses and a
bunch of jobs to schedule subject to paper, ink, delivery location and priority
constraints.

## Solvers

In practice, these problems are solved using off-the-shelf solvers, which allow
you to use a specialized (or general purpose) programming language to define
the problem.

Gorubi is the best-known commercial solver. I think this is what Birchbox were
using?

Pulp is a Python wrapper around the open source CBC solver.

CVXPY is a Python wrapper around [many
solvers](http://www.cvxpy.org/en/latest/tutorial/advanced/index.html#choosing-a-solver),
including CBC.

## Research

As far as I can tell, there's pretty good theoretical arguments that there
won't be fundamental breakthroughs in vanilla convex optimization. It's a set
of algorithms and tricks at this point.

A lot of the new research seems to focus on online convex optimization, and
non-convex optimization.

So purely in terms of that "more possible now than a year ago" rubric, I'm not
sure this is a good topic.

## Challenges

It seems like the hard part is problem formulation (i.e. recognizing a real
world problem can be rendered convex). It's going to be difficult to
communicate this in a a report or prototype.
