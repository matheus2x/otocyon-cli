<div id='top-document'/>


<p align="center">

  <h2 align="center">Otocyon-cli</h2>
<!-- 	<h1 align="center"><img src="./.github/otocyon-pic.png" alt="Otocyon megalotis" width="120"></h1> -->
</p>

## :thinking: What is this?

An CLI to gen game "badges" using [otocyon.herokuapp.com](otocyon.herokuapp.com/)

## :rocket: Techs used

- **TypeScript** - A Superset for JavaScript
- **gluegun** - A toolkit for building TypeScript-powered command-line apps


## :fire: Getting started
Sometimes I leave it the server on air hosted by Heroku in this endpoint: https://otocyon.herokuapp.com/, but may you need to run otocyon locally. For this, follow instructions on server repo: [Otocyon server](https://github.com/matheus2x/otocyon)

Assuming you can have access to the server, follow the nexts steps:<br>

1. Clone this repo with `$ git clone https://github.com/matheus2x/otocyon-cli.git`
3. Move yourself to repo with `$ cd otocyon-cli`
4. Run `$ yarn` to install dependencies
5. Create an `.env` file and put yours env files
6. Run `$ yarn build` to gen bundle files
7. Run `$ yarn link` to link commands
<br><br>

## :orange_book: CLI Usage

* [Steam](#steam)
	* [gen-badge](#2)
* [Xbox]
	* Comming soon...


<br><br>

<div id='steam' />

# Steam


<div id='2' />


## gen-badge-steam

Run `$ otocyon-cli gen-badge-steam <steamProfileID> <steamGameID>`

Param|Required|Description|Example
---|---|---|---
steamProfileID|Yes|Steam Profile ID|76561198104651572
steamGameID|Yes|Steam Game ID|567640
<br>

Example of canvas badge generated (HTML generated available on models dir):<br><br>
<img src="./.github/badge-example.png" alt="Danganronpa V3 Steam Badge">

[> Back to the top <](#top-document)

<br><br>

---

<h4 align="center">
    Made with :fox_face: by <a href="https://www.linkedin.com/in/matheus2x/" target="_blank">Matheus Henrique</a>
</h4>
