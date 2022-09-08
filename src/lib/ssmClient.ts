import { SSM } from 'aws-sdk';
import { config } from './config';

let ssmClient: SSM;

const createSSMClient = (): SSM => {
    return new SSM(config());
};

const getSSMClient = (): SSM => {
    const _ssmClient = ssmClient ?? createSSMClient();
    if (!ssmClient) {
        ssmClient = _ssmClient;
    }
    return _ssmClient;
};

export { getSSMClient };
