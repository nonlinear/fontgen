### `lazy-8/fontgen`

**Convert any font into webfont**

## Requirements

- [Node](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com)

## Installation

1. Open terminal
2. Navigate to your documents folder
3. Type:

```
git clone https://github.com/lazy-8/fontgen.git
cd fontgen
npm install
```

## Usage

1. Find any `ttf` or `otf` font you want to use
1. copy file to `./fontgen` folder
1. run `gulp`
1. grab your converted fonts on `./font` folder

## Troubleshooting

If it asks you to install homebrew updates, with `brew install fontforge ttf2eot batik-ttf2svg`, try [this solution](https://github.com/agentk/gulp-fontgen/issues/17#issuecomment-227003451) instead, then do `npm i path-is-inside`.