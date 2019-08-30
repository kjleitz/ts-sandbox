# ts-sandbox

## about

This is a sandbox "template" repo, mostly for my own convenience (but feel free to use it). I use it to play around with TypeScript when I need a minimal local environment to test things out.

## setup

```bash
git clone https://github.com/kjleitz/ts-sandbox
cd ts-sandbox
yarn install # or npm install
```

- create TypeScript files in in `src/`
- consider `src/index.ts` your entry point
- run `yarn build` if you want to see compiler output (output is in `build/`)
- run `yarn serve` and navigate to `localhost:8080` to run whatever you 
- use `underscore`-style templating in `src/index.template.html` if you need to populate `index.html` dynamically on build—you can execute arbitrary JS between template tags (in a Node context)
- use es2015 imports

## license

MIT

## contributing

sure, yeah, pull requests welcome
