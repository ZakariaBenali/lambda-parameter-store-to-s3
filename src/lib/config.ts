import { ClientConfiguration as SSMConfig } from 'aws-sdk/clients/ssm';
import { ClientConfiguration as S3Config } from 'aws-sdk/clients/s3';

const config = (): SSMConfig | S3Config => {
    const region = process.env.REGION;
    if (!region) {
        throw new Error('No region specified');
    }
    return {
        region,
    };
};

export { config };
