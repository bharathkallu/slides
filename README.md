hello-github-pages-slideshow
============================

A tool for transforming markdown into really slick slideshow presentations like [this](https://github.kdc.capitalone.com/pages/hello-galaxy/hello-github-pages-slideshow), hosted on github pages. Based off of this open-source project: https://github.com/hakimel/reveal.js

# Instructions

## The easiest way:

This method is appropriate if you haven't started work on your presentation yet. It will give you a totally separate repo just for your presentation.

1. Fork this repository
2. Go to the repo settings and change the name of your repo to something relevant
2. Modify slideshow.md to contain your desired content (*Note*: your slideshow will not work until you make a commit to your fork)
3. Go to `https://github.kdc.capitalone.com/pages/<your-eid>/<your-repo-name>` to see your slideshow
4. Edit the repo description to point to your slideshow (will not update automatically)

*Note*: Do not delete anything from the "gh-pages" branch or you won't get automagic publishing.

## The (slightly) more advanced way:

If you want to add a slideshow to an existing repo, you can use this method. Recommended only if you are comfortable with git.

1. If needed, clone your repo locally/make sure it's updated with the GitHub remote

2. Create a new branch called 'gh-pages' with no history

    ```bash
    git checkout --orphan gh-pages
    ```
3. Remove all of your current files from this branch

    ```bash
    git rm -rf .
    ```
4. Add this repo as an additional remote

    ```bash
    git remote add slideshow git@github.kdc.capitalone.com:hello-galaxy/hello-github-pages-slideshow.git
    ```
5. Pull this repo information down to your local

    ```bash
    git pull slideshow gh-pages
    ```
6. Push this repo information up to your repo on GitHub

    ```bash
    git push origin gh-pages
    ```

7. On GitHub, you should now see a gh-pages branch with no common history. Modify slideshow.md to contain your desired content.

8. Go to `https://github.kdc.capitalone.com/pages/<your-eid>/<your-repo-name>` to see your slideshow.

# Tips

### To format slides

- This repo creates a slideshow with a black background and white text. For a Capital One template, go [here](https://github.kdc.capitalone.com/capital-one-reveal-js).
- Separate individual slides with `---`
- Create vertical slide transitions by inserting two returns
- Insert images by adding them to the images folder in this repo and referencing them with `![chose a name](images/your_image_name.ext)`
- Make text appear on-click by adding `<!-- .element: class="fragment" data-fragment-index="1" -->` prior to the text. The number in `data-fragment-index` dictates how many clicks until that element shows up.

### To view your presentation locally
- if you're writing your slides on your local machine, you can view your presentation locally without having to push to GitHub each time you want to check something out. Open a new Terminal tab or Git Bash window, and enter the following:
```
$ python -m SimpleHTTPServer [PORT]
```
where instead of `[PORT]` you choose a number greater than or equal to 8000. Then, open up a new tab in Chrome and enter `localhost:[PORT]` as the url. Your presentation should appear. (To shut down the HTTP server, just hit ctrl+c.)

### While presenting

* Use `space` to navigate, or the arrow keys for finer control
* Use `o` to quickly locate and navigate to a slide
* Use `s` to bring up a speaker notes ([details here](https://github.com/hakimel/reveal.js#speaker-notes))

### [Printing to PDF](https://github.com/hakimel/reveal.js#pdf-export)
* The url will look like `https://github.kdc.capitalone.com/pages/user-name/repo-name/?print-pdf`
* The page that loads won't look right- DON'T PANIC, just print to PDF using Chrome's print dialogue

# Multiple slideshows in one repo

A repo can contain multiple slideshows, but it can get a little messy. The basic idea is you have to copy all of the reveal.js files into a subdirectory.

1. Make sure your local repo already containing a slideshow is up to date with the GitHub remote (nickname repo-A). If needed, switch to `gh-pages`.

2. Clone and/or update the repo containing the presentation you want to add (nickname repo-B). If you just want a placeholder for a new presentation, you can use this repo. If needed, switch to `gh-pages`.

3. Copy the content from repo-B (except for the .git folder) into a directory within repo-A on the gh-pages branch

    Example:
    ```bash
    cd repo-B
    git checkout gh-pages
    cd repo-A
    git checkout gh-pages
    mkdir folder_for_repo_B
    rsync -r --exclude=.git <path_to_repo-B> folder_for_repo_B
    ```
4. Commit and push your projects gh-pages branch
5. The presentation from repo-B is viewable at `https://github.kdc.capitalone.com/pages/<your-eid>/<repo-A>/folder_for_repo_B`

# Example presentations within Capital One

Here's a couple other examples that use a few more features of reveal.js (changing background colors, vertical slide transitions, revealing fragments as overlays, etc.)

* [neighborhood vibrancy](https://github.kdc.capitalone.com/pages/lbh669/neighborhood_vibrancy_slideshow/#/)
* [software engineering culture](https://github.kdc.capitalone.com/pages/rqa267/software-engineering-culture/#/)
* [sharing ideas](https://github.kdc.capitalone.com/pages/zmf799/sharing-ideas/#/)
* [code standards](https://github.kdc.capitalone.com/pages/PYW137/Code_Standards_Sharing/#/)
* [card application fraud modeling](https://github.kdc.capitalone.com/pages/rwp651/secondary_app_models/#/)
