# Getting Started

I am in the process of updating this example to demonstrate best practices for distributing a style guide encoded with Sass as part of a shared ui component library.

## Get the Code
```
git clone https://github.com/starjumper30/ui-library.git
cd ui-library
npm i
```

## Build and Run
```
ng build ui-components
ng serve
```

## Analyze Bundles
```
npm run sme
```

# Things to Learn Here
## Packaging the Library
### Packaging the library code
Define multiple ng-packagr entrypoints!
- Throw out the src and lib folders. Move the code up to the lib root (projects/ui-components in this example).
- Organize the library into several root-level modules. The components inside a module should be things one would reasonably assume to be used together.
- Each root-level module must have its own package.json file.
- Tree-shaking will occur at the module level. Tree-shaking below this level is not possible, so keep this in mind when deciding on the granularity of your modules.
- Also, it's not just your library code that needs to get tree-shaken, it's your library's dependencies as well. For example, if you have a data-grid module that references a giant third-party grid library and some of your users are only interested in you form components, don't make them bundle the grid library!
- The root public-api.ts file in your library should have only symbolic links such as _**export * from 'ui-components/data-grid';**_ This allows the user to use an import like 'ui-components' without actually importing the whole library and all its dependencies

Add path entries to the root tsconfig.json so that your demo app can reference the built library code:
```    
"paths": {
  "ui-widgets": [
    "dist/ui-widgets"
  ],
  "ui-widgets/*": [
    "dist/ui-widgets/*"
  ]
}
```

### Packaging the library styles
- Put an _index.scss file inside each top-level module folder containing global styles for the components contained within. Feel free to have this index file just import styles from finer-grained files within the module.
- Encode your style guide into Sass variables inside a style-guide folder in your library.
- Add a component-styles folder containing an _index.scss file that references all of the other scss files from your modules. This gives the user the option to import all component styles at once for convenience if they wish.
- Add a post-build step to copy .scss files into your library dist.
```
"copysass": "copyfiles -u 1 projects/ui-components/**/*.scss dist",
"build:lib": "ng build ui-components && npm run copysass",
```

#### Writing good styles
- Reasons not to use encapsulated component styles:
  - Very difficult to override
  - Makes it impossible to style other components contained within the template without resorting to hacks such as ng-deep
  - Encourages developers to create a copy-pasted nightmare
  - Hard to refactor or restyle an app
  - Better cleanliness can be achieved with properly scoped selectors in well-organized global styles
- Use CSS custom properties to parameterize components (TODO expand this)


## Writing the Demo app
The demo app serves multiple purposes:
- Allows you to test that your components and modules work properly in an actual Angular app.
- Allows you to demonstrate proper use of the component to your users
- Allows you to demonstrate proper use of the global styling you have provided

The source of your demo app is just as important as the running app. The developers that are going to use your library should be able to use the source code of your demo as an example of how best to configure an Angular app to use your library. 

Each library module should be tested in a separate lazy-loaded route. This not only demonstrates best-practices to your users but also ensures that you catch any loading/injection issues with your library.

Dog-food your own components and style guide! Every part of your demo app should be a demonstration of what an app in your organization should look like, including the navigation between demo views. 

### Importing library code
Because of the symbolic links in our root public-api.ts file, it's ok to import from the library like this:
```
import { DataGridModule }  from 'ui-components';
```
or like this
```
import { DataGridModule }  from 'ui-components/data-grid';
```
For the demo, having at least one type of each import is probably a good idea so that you can make sure both ways are working.
On the other hand, you want to avoid confusing your users. 
I would recommend using the 'ui-component' import just once and the more specific imports the rest of the time. Training the user to prefer granular imports will help them avoid problems when using libraries that are not built with symbolic links.
### Using library styles
Add this to the build options for the demo app in angular.json, to reference Sass files from the built library:
```
"stylePreprocessorOptions": {
  "includePaths": ["dist/ui-components"]
},
```
In styles.scss import all component-styles
```
@import 'component-styles';
```

## Writing a real app that installs the library into node_modules
### Importing library code
Because of the symbolic links in our root public-api.ts file, it's ok for the user to import from the library like this:
```
import { DataGridModule }  from 'ui-components';
```
or like this
```
import { DataGridModule }  from 'ui-components/data-grid';
```

### Using library styles
The user of your library will need to add this to the build options for their app in angular.json:
```
"stylePreprocessorOptions": {
  "includePaths": ["node_modules/ui-components"]
},
```

In styles.scss they should import all component-styles or just the modules they need. These imports should only be done once!
```
@import 'component-styles';
```

or 

```
@import 'form-components';
@import 'split-container';
```

### Using Style Guide Variables
Variables can be imported as many times as needed, into any scss file in the application.
Example:
```
@import 'style-guide/colors'

div {
  background-color: $primary-color
}
```


## Check Yourself
- Run source-map-explorer and verify your library and its dependencies are being bundled into the demo app as expected. This is another reason why it is important to have lazy-loaded routes in your demo app.
- Don't be afraid to poke around in the dist directory and manually inspect the demo-app bundles if source-map-explorer isn't giving you enough information.

## Publishing your library to a git repo
Publishing your library to a private npm registry is the best option. But if that option is not available to you, then you can publish to a git repo instead.

### Setup
- Create another git repo just for the built library package. This example library is being published here:  https://github.com/starjumper30/ui-components-package
- Clone this repo so that it is adjacent to your development repo

###Publish
- Increment the version number in the library's package.json file
- Run a script to: (see the "publish" script in this repo's package.json)
  - Delete the contents of the package repo locally (except for the .git folder)
  - Build the library
  - Copy the contents (dist/ui-components) to the package repo folder
- Commit and push the package repo
- Create a tag matching the new version number and apply it to the last commit as a new release

I imagine all of these steps could be scripted (TODO write this script). Ideally this would be done by a CICD server and not manually by a developer.

If you screw up and need to delete a tag, use these commands:
```
git tag -d v0.0.1
git push -d origin v0.0.1
```

###Installing into an application project:

Users can add the github url, with an optional semver tag, to their package.json:
```
"ui-components": "git+ssh://git@github.com/starjumper30/ui-components-package.git#semver:0.0.1",
```
This also works with bitbucket and gitlab. See https://docs.npmjs.com/cli/v7/commands/npm-install for all possible install options.

If you want to test the library install in your demo app, just npm install the library as shown above and then temporarily delete the paths entries from the root tsconfig.json before doing running or building the demo app.

## Upgrading to latest Angular with latest Dart-Sass
Replace all Sass @import declarations with @use and @forward (This will be demonstrated on the master branch once the Angular 8 demo is completed and moved to a release branch.)

https://sass-lang.com/documentation/at-rules/import

https://sass-lang.com/documentation/at-rules/use

https://sass-lang.com/documentation/at-rules/forward
