# disnet's JavaScript Template

Setting up a new JavaScript project is too hard. Here's my opinion of what a reasonable JavaScript template project looks like for writing a library (if you need a framework template you'll need to [look](https://github.com/facebook/create-react-app) [somewhere](https://github.com/sveltejs/template) else).

Run:

```sh
npx degit disnet/js-template my-new-project
```

and then change:

- `name`, `description`, and `author`, in `package.json`
- `private` in `package.json` when ready to publish (prevents accidentally publishing early)
- `[name]` and `[year]` in `LICENSE.txt` (and potentially the entire thing if you want something other than MIT)

# Choices made

- [Babel](https://babeljs.io) to do the actual compiling
- [Eslint](https://eslint.org) to do the linting with mostly the `eslint:recommended` rules
- [Ava](https://github.com/avajs/ava) to do testing
- A [Prettier](https://prettier.io) config file if your editor is looking for one but not as an actual dependency

## Directory and file structure

- `src/` is where all your source files go
- `test/` is where all your test files go
- `dist/` is where all the built files go

It is assumed that the main entrypoint to your library is at `src/index.js` so `package.json` points to the built file `dist/index.js` is the `main` script.

## npm scripts

The only npm script you need to actually use is `npm test`.

When you need to debug, `npm run debug` will start up a paused [inspector](https://nodejs.org/en/docs/guides/debugging-getting-started/) session at `dist/index.js`. Open Chrome DevTools at `about:inspect` and connect.

When you want to debug tests, run `npm run test:debug`. See additional setup instructions [here](https://github.com/avajs/ava/blob/master/docs/recipes/debugging-with-chrome-devtools.md).

## ES6 Modules

Sources are compiled to CommonJS modules because trying to publish a library that uses ES modules that can be either `require`d or `import`ed safely is just too [hard and complicated](https://nodejs.org/api/packages.html#packages_dual_package_hazard). So, cjs forever 😞.
