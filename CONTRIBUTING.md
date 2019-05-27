# Contributing

Thanks for your interest.

If you search for terms like `FIXME`, `TODO`, `IDEA` you will find issues that I'm working on:

* Like re-engineering the state management.
* Unit tests.
* Adding a Footer to the app.
* Improving meta tags for the project.
* Add an about page.

All the features on the [README.md](README.md).

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first**, the easiest way to reach me [is on Twitter](https://twitter.com/papaponmx), DMs are open. 

Please also provide a test plan, i.e. specify how you verified that your addition works.

## Folder Structure overview

Please consider that this is a work in progress.

```
src/
  app-header/     # Just the header for the app.
  context/        # Initial state and all functions that modify state are here.
  converter-app/  # Main components for the app.
  Forms/          # Basic styled form components.
  utils/          # Utilities, like transformUnit() from kg to lbs.
```
