# [iheartperl7.com](https://iheartperl7.com) Website Source Code

This is the source code for the 
 [iheartperl7.com](https://iheartperl7.com) site.

This is a static website created with 
[Lume](https://lumeland.github.io/lume/), so 
deployment, live updating, etc is same as Lume:

## Prerequisites
* [Deno](https://deno.land/)


## How to run the website locally

```bash
echo "import 'lume/cli.ts'" | deno run --unstable -A - -s
```

Don't forget to like (click the star button on the top right of this page!)

---

## Don't read the rest of this README:
* [Lume](https://lumeland.github.io/lume/)
* [Git](https://git-scm.com/)
* [GitHub CLI](https://cli.github.com/)
* [Deno Deploy CLI](https://deno.com/deploy/docs/deployctl)

## How to deploy the website to Deno Deploy

Get yourself a token, mine is abc1234fde0
Make yourself a deno deploy project, mine is fishy-fox-42

Hop to the directory containing deno.json

```bash
DENO_DEPLOY_TOKEN="abc1234fde0" deployctl deploy --project=fishy-fox-42 https://deno.land/std@0.171.0/http/file_server.ts
```

You may have to specify deployctl with its full path, if you are like me and use asdf 
or something else weird to install deno.

Of course, you'll do it the easier way, which is thru deno deploy's tight github integration :)
