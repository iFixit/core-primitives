workflow "Build and publish" {
  on = "push"
  resolves = ["publish"]
}

action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

action "build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["install"]
  args = "run build"
}

action "publish" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["build"]
  secrets = ["NPM_AUTH_TOKEN"]
  args = "publish --access public"
}
