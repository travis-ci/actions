# GitHub Action for Travis CI

The [Travis CI](https://travis-ci.com/) action wraps the [Travis CI API](https://developer.travis-ci.com/) so that new builds can be created based on Push and Pull Request GitHub events.

## Usage

```
workflow "Build and Test Time" {
  on = "push"
  resolves = ["Test on Travis CI"]
}

action "Test on Travis CI" {
  uses = "travis-ci/actions@master"
  secrets = [
    "TRAVIS_TOKEN",
  ]
}
```

### Secrets

* `TRAVIS_TOKEN` - **Required**. The token to use for authentication with the Travis CI API

## License

The Dockerfile and associated scripts and documentation in this project are released under the [MIT License](LICENSE).
