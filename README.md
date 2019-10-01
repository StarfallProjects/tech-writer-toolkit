# Tech writer toolkit

https://techwritertoolkit.com/

Resources and templates for tech writers.

This site is built with [MkDocs](https://www.mkdocs.org/) and deployed with [Netlify](https://www.netlify.com/). It uses the [mkdocs-material](https://github.com/squidfunk/mkdocs-material) theme.


## Run the site locally

You will need the following installed on your machine:

* [git](https://git-scm.com/downloads)
* [Python](https://www.python.org/) (recommend 3.7)
* Pip (installed with Python from 3.4 onwards)

Clone the repo:
```
git clone https://github.com/StarfallProjects/tech-writer-toolkit.git
```

We strongly recommend using a virtual environment, such as [venv](https://docs.python.org/3/library/venv.html). Make sure to activate your virtual environment before installing the requirements (next step).

Navigate into the top level of the project and run:

```
pip install -r requirements.txt
```

This will install MkDocs, the Material theme, and other dependencies.

Run the project locally with:

```
mkdocs serve
```

## Contribute

> **Note:** for small edits, you can make the changes directly in GitHub. Refer to [this guide](https://www.starfallprojects.co.uk/blog/edit-on-github/) for more informtion. For larger changes (including anything that affects the site styling and layout), follow the steps below.

1. Follow the steps to run the site locally. This allows you to preview your work.
2. Create a new branch. Keep it short but descriptive. If working on an issue, include the issue number.
```
git branch -b <branchName>
```
3. Make your additions or changes.
4. Check your changes locally.
5. Push your changes to GitHub:
```
git add *
git commit -m "brief description of change, include issue number"
git push  --set-upstream origin <branchName>
```
6. Submit a pull request ([GitHub docs](https://help.github.com/en/articles/creating-a-pull-request#creating-the-pull-request))
7. Request a review from StarfallProjects ([GitHub docs](https://help.github.com/en/articles/requesting-a-pull-request-review))

