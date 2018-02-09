## Differential Privacy

Differential privacy refers to techniques for manipulating data to allow meaningful, if not practically identical, query results while preventing imputation of any attribute of the data to any row (possibly person) in that database.

Differential privacy has a clear commercial use case. The report would be a combination of statistical approaches, ideally with a package to focus and concretize the discussion a la LIME. The prototype seems straightforward as a before-and-after, but we would need to think about how to make it engaging.

Notably, Apple seems to be making a lot of noise about using differential privacy.

Next step, if any, is to find out whether there are promising libraries coming out or maturing. This would give the research teeth.  First search shows a few, but I haven't seen any convergence yet.

### Capabilities: 
- Use PII without fear of compromise
- Cut legal risk / GDPR compliance
- Lower insurance premiums
- Test exposure risk

### Prototype:
- Differential privacy on-off switch - show comparative information leaks vs. usable data
- Let user adjust stringency

It would be fun to analyze bulk data of our own, even if trivial, e.g., website visitor IPs or somesuch.

### Special use cases:
- medical analytics / research
- demographic research, esp. sensitive areas like race, gender, drug use
- financial analytics

Basically, anywhere especially sensitive data lies.

### Report: 
Several approaches to differential privacy, so we'd have to choose which to report on (one, some, or all).

### References:
* Dwork, Differential Privacy, 2006, https://www.microsoft.com/en-us/research/publication/differential-privacy/?from=http%3A%2F%2Fresearch.microsoft.com%2Fpubs%2F64346%2Fdwork.pdf
* Erlingsson et al., RAPPOR, 2014, https://arxiv.org/abs/1407.6981
* Dwork, Diff Priv Textbook, 2014, https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf
* https://images.apple.com/privacy/docs/Differential_Privacy_Overview.pdf
* http://userpage.fu-berlin.de/semu/docs/2011_seminar_kressner_implementing.pdf

### Packages:
* https://medium.com/uber-security-privacy/differential-privacy-open-source-7892c82c42b6
* diffpriv - R package https://cran.rstudio.com/web/packages/diffpriv/vignettes/diffpriv.pdf
* https://pypi.python.org/pypi/dp4gp
* https://github.com/prashmohan/GUPT













