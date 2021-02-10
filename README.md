# MOLO17 Technical test for junior backend devs

This is a basic repository with some tools to get you started on the technical
test, if you need the project specification and instructions, please refer to
the docs we sent you or just send an email to your referent.

We acknowledge that the specs are a little conservative but feel free to ask
anything about it, even technical details if you're stuck on something.

## Typescript and Database choice

The reason behind our choice is simply that all of our projects are all
typescript. This does not mean that we do not accept technical tests written in
other languages, feel free to use all the tools at your disposal and with which
you feel comfortable.

If you do, however, chose to use typescript we got everything set up to get you
started.

As for the database we currently have two basic `docker-compose` files that set
up a simple mysql or mongodb database in your machine. You can however chose to
use another database of your choice or even use a cloud solution (we suggest
https://www.mongodb.com/cloud/atlas as it gives you a free 512MB sandbox to play
with and no credit card is needed)

## Requirements

- Node.js > 12.x
- Visual Studio Code (optional)
- Docker (optional)
- Yarn (optional)

## Install instructions:

- Run `npm install` or `yarn`
- If you chose to use docker:
  `docker-compose -f {mysql | mongodb}-docker-compose.yml up`
- If you use vscode as your editor we added some extensions suggestion, install
  them by clicking on the dialog when prompted (usually at startup)
- Run development server `npm start` or `yarn start`

## Last but not least

Feel free to change anything in this or just start from scratch and most
importantly, we hope you have fun!
