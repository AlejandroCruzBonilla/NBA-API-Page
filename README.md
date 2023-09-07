This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Aws S3

This site can be deployed on the AWS S3 service.

First we need generate the static files with the command:
```bash
yarn export
# or
npm run export
``` 

This command is found in the package.json file in the scripts section, which will generate a directory called `out` with the files needed to display the page.

To synchronize our `out` directory with an S3 Bucket, you can manually drag the files to the Bucket from the AWS console, or with previous configuration of credentials, we can use the AWS CLI with the following command:

```bash
	aws --profile <profile> s3 sync out s3://<buckey-name>
```
