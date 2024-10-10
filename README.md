# Basic Informational Site w/ Node

This repo is a project built to practice serving files with node. Here are the assignment:

## Assignment

Make a project directory and create the following files inside that directory:

- index.html
- about.html
- contact-me.html
- 404.html

Create your node.js server file index.js and add the code needed to serve the right page according to the url.

- localhost:8080 should take users to index.html
- localhost:8080/about should take users to about.html
- localhost:8080/contact-me should take users to contact-me.html
- 404.html should display any time the user tries to go to a page not listed above.

## Solution

I have successfully implemented a server that serves different html files depending on the url in the browser. Some additional points to consider for future improvement:

1. Consider making url input case-irrelevant (eg. /About === /about)
2. Serve the 404 page if fs.stat returns an error
3. Make Content-Type dynamic depending on what file is needed => right now it's hardcoded for html only

## Update - Upgrade to Express

To continue learning, I refactored the code using Express. I have achieved the same result, but with no error handling (for now). I just wanted to get it up and running to learn the basics of Express.
