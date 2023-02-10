# CDK App to deploy a simple Atlas instance
A cdk app to deploy a simple MongoDB Atlas instance

### This project has been created using projen
Check below link for installation and configuration of projen

https://github.com/projen/projen

`npx projen new awscdk-app-ts`

This will create a project structure for cdk apps. 

## L3 construct- @mongodbatlas-awscdk/atlas-basic 

More details on the app on: https://constructs.dev/packages/@mongodbatlas-awscdk/atlas-basic/v/0.1.1?lang=typescript

## Deploy this app

1. `git clone https://github.com/SuperMohit/atlas-cdk-app.git`
2. `cd atlas-cdk-app`
3. `yarn`
4. `export MONGODB_ATLAS_PUBLIC_KEY=<>`
5. `export MONGODB_ATLAS_PRIVATE_KEY=<>`
6. `export MONGODB_ATLAS_ORG_ID=<>`
7. `cdk deploy`
