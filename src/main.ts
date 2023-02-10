import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {ApiKeyDefinition, AtlasBasic} from "@mongodbatlas-awscdk/atlas-basic";

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const orgId = this.node.tryGetContext('MONGODB_ATLAS_ORG_ID') || process.env.MONGODB_ATLAS_ORG_ID;
    const apiKeys: ApiKeyDefinition = {
      privateKey: this.node.tryGetContext('MONGODB_ATLAS_PRIVATE_KEY') || process.env.MONGODB_ATLAS_PRIVATE_KEY,
      publicKey: this.node.tryGetContext('MONGODB_ATLAS_PUBLIC_KEY') || process.env.MONGODB_ATLAS_PUBLIC_KEY,
    };

    new AtlasBasic(this, 'atlas-basic', {
      apiKeys: apiKeys,
      clusterProps: {
        replicationSpecs: replicationSpecs,
      },
      projectProps: {
        orgId: orgId,
      },
    });
  }
}



const replicationSpecs = [
  {
    numShards: 1,
    advancedRegionConfigs: [
      {
        analyticsSpecs: {
          ebsVolumeType: 'STANDARD',
          instanceSize: 'M10',
          nodeCount: 1,
        },
        electableSpecs: {
          ebsVolumeType: 'STANDARD',
          instanceSize: 'M10',
          nodeCount: 3,
        },
        priority: 7,
        regionName: 'US_EAST_1',
      },
    ],
  },
];

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'atlas-cdk-app-dev', { env: devEnv });
// new MyStack(app, 'atlas-cdk-app-prod', { env: prodEnv });

app.synth();