# Compass component details example app (UI Kit)

This project demonstrates the [compass:componentPage](https://developer.atlassian.com/platform/forge/manifest-reference/modules/compass-component-page/) and [compass:adminPage](https://developer.atlassian.com/platform/forge/manifest-reference/modules/compass-admin-page/) modules for [Forge](https://developer.atlassian.com/platform/forge/). It contains a Forge app written in Javascript that creates a new subtab called `Hello world` on the Compass component details page, then uses [UI Kit](https://developer.atlassian.com/platform/forge/ui-kit/) to display `Hello world!` on the subtab. It also displays a table that contains data of the Compass component retreived using the [GraphQL API Toolkit](https://developer.atlassian.com/cloud/compass/integrations/graphql-api-toolkit/).

Compass is currently in Alpha. See [atlassian.com/compass](https://www.atlassian.com/compass) to request early access to Compass.

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Install top-level dependencies:
```
npm install
```

- Modify your app by editing the `src/component-page.jsx` or `src/admin-page.jsx` file.

- Register your app by running:
```
forge register
```

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
