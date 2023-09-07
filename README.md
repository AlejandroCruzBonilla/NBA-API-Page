This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, we need to rebuild node_modules dir:
```bash
npm install
# or
yarn install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deploy on Aws S3

This site can be deployed on the AWS S3 service.

First we need generate the static files:

```bash
yarn export
# or
npm run export
``` 

This command is found in the package.json file in the scripts section and will generate a directory called `out` with the files needed to serve the page.

To synchronize our `out` directory with an S3 Bucket, you can manually drag the files to the Bucket from the AWS console, or with previous configuration of credentials, we can use the AWS CLI with the following command:

```bash
aws --profile <profile> s3 sync out s3://<buckey-name>
```

Then we can enable the static website option in the S3 Bucket
