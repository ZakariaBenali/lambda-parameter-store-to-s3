import { getS3Client } from 'lib/s3Client';

const uploadDataToS3Bucket = async (body: string) => {
    const s3 = getS3Client();
    const bucket = process.env.BUCKET;
    if (!bucket) {
        throw new Error('No bucket specified');
    }
    if (!body) {
        throw new Error('No data to upload');
    }
    await s3
        .putObject({
            Bucket: bucket,
            Body: body,
            Key: '.env',
        })
        .promise();
};

export { uploadDataToS3Bucket };
