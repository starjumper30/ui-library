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
## Packaging the library code
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

## Writing the Demo app
- Each library module should be tested in a separate lazy-loaded route. This not only demonstrates best-practices to your users but also ensures that you catch any loading/injection issues with your library.

## Check Yourself
- Run source-map-explorer and verify your library and its dependencies are being bundled into the demo app as expected. This is another reason why it is important to have lazy-loaded routes in your demo app.
- Don't be afraid to poke around in the dist directory and manually inspect the demo-app bundles if source-map-explorer isn't giving you enough information.
