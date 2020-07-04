# Submitting for review

In this guide, we'll walk through submitting for our [fully test](testing.md) [custom `Checkbox` component](creating.md) for review!

## Create a pull request

After checking in all of your wonderful changes to your `feature/checkbox-pbi#` git branch. Switch to your Development branch, pull down switch back to the feature branch, and run git rebase development. To be able to push it up, you will have to add the -f tag.

```jsx
git push -f origin  feature/checkbox-50
```

### Note

The -f tag is needed because when you rebase, you are overwriting the git commit history of your branch.

Create a new pull request against the `development` branch!

## Commits

Be descriptive of your changes! The more, the better. If possible, include the task id in the commit so that azure will auto track the commit

## Assigning Reviewers

Assign or `@` at least one code reviewer and one design reviewer. This is required if you're creating a brand new component. If you're unsure who to tag, default to @danielhernandez and @johnathonjohson.

## Deploy Preview

A deploy preview for your Pull Request will automatically be generated. To make it easier for reviewers to QA your updates, provide them with a direct link to your Story either in the Pull Request description or as an additional comment.

## Continuous Integration

Every pull request automatically fires off a [Travis build](https://travis-ci.org/DRY-react). Once that passes, it'll generate a [code coverage score](https://coveralls.io/).

The Travis build **must be green**, and the coverage score **must be 100%** before merging into `development`.

## Review

Slack message one of the admins to review the PR in the DRY slack channel.

## Next

🚀 All green? All good 😎. Once the feature makes its way through QA & Master, we [can publish a release](release.md)!

## See also

- [Travis CI](https://travis-ci.org/)
- [Coveralls](https://coveralls.io/)
