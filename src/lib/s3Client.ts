import { S3 } from 'aws-sdk';
import { config } from './config';

let s3Client: S3;

const createS3Client = (): S3 => {
    return new S3(config());
};

const getS3Client = (): S3 => {
    const _s3Client = s3Client ?? createS3Client();

    if (!s3Client) {
        s3Client = _s3Client;
    }
    return s3Client;
};

export { getS3Client };
