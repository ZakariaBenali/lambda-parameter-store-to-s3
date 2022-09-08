# lambda-paramter-store-to-s3-env-file

The following is a lambda that imports parameter store parameters specified under a path ex: /portfolio, and 
generate a .env file that is stored in an s3 bucket specified.

### Installation And deployment (using SAM CLI)
_A simple guide to configure and deploy your lambda._

1- On the terminal project run:
```sh
$ cd src
$ npm install 
```
2- Add the bucket name on `template.yaml` in place of "destBucket"
* **Note**: The lambda will create an IAM role with the following policies:
    ```yaml
    AmazonSSMFullAccess: Full access to the SSM to import the parameter store
    S3WritePolicy: To write to the s3 bucket that is provided under BucketName
    ```
* Feel free to remove this section if you want to take care of the permissions yourself. 

3 - (Optional) Add environment variables to Environment section in `template.yaml`
* **Note**: This will populate the environment variables in aws lambda console. but can be changed anytime 
on the console.

4- Build your lambda using:
```sh
$ sam build
$ sam deploy --guided
```
5- If step 3 skipped you'll need to provide the lambda with the necessary environment variables 
via the aws lambda console.

6- Run test on aws lambda console to test the lambda.

## Resources

See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

Next, you can use AWS Serverless Application Repository to deploy ready to use Apps that go beyond hello world samples and learn how authors developed their applications: [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/)
