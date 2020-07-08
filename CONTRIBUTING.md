# Contributing to Corona Health Statement

## Development Process

I am an individual working on this project, all the work is public and presented on GitHub.

### Development workflow

1. Fork the repo and create your branch from `master` (a guide on [how to fork a repository](https://help.github.com/articles/fork-a-repo/)).
2. Run `yarn install` to setup the development environment.
3. Do the changes you want and test them out using `yarn start`.
4. Create a production build using `yarn build` and test it on your local browser.
5. After a successful pull request to the `master` branch, `yarn deploy` will automatically run and deploy the production build files to the `gh-pages` branch. That allows the application to be deployed statically on GitHub Pages.

### Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for commit messages:

* `fix`: bug fixes, e.g. fixed issues with custom component.
* `feat`: new features, e.g. added a prop or a capability.
* `refactor`: code refactor, e.g. new folder structure.
* `docs`: changes into documentation, e.g. add usage example.
* `test`: adding or updating tests, eg unit, snapshot testing.
* `chore`: tooling changes, e.g. change travis.yml config.
* `BREAKING CHANGE`: for changes that break existing usage, e.g. changed usage.

The built-in pre-commit hooks verify that your commit message matches this format when committing.

### Linting and tests

We use `typescript` for type checking, `eslint` for linting and formatting the code, and `jest` for testing. Our pre-commit hooks verify that the linter and tests pass when commiting. You can also run the following commands manually:

* `yarn typescript`: type-check files with `tsc`.
* `yarn lint`: lint files with `eslint`.
* `yarn test`: run unit tests with `jest`.

### Sending a pull request

When you're sending a pull request:

* Prefer small pull requests focused on one change.
* Verify that `eslint` and all tests are passing.
* Preview the documentation to make sure it looks good.

## Reporting issues

You can report issues on the [bug tracker](https://github.com/avishayil/corona-health-statement/issues).

## License

By contributing to Corona Health Statement, you agree that your contributions will be licensed under its **MIT** license.