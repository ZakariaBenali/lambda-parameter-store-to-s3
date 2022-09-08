import { formatParametersToEnv } from 'helpers/env';
import { getParameters } from 'services/parameters';
import { uploadDataToS3Bucket } from 'services/s3_uploader';

export const lambdaHandler = async (): Promise<void> => {
    console.log('Getting parameters from the store');
    const data = await getParameters();

    console.log('Formatting parameters to env format');
    const _env = formatParametersToEnv(data);

    console.log('Storing .env file to s3 bucket');
    await uploadDataToS3Bucket(_env);

    console.log('All operations run successfully');
};
