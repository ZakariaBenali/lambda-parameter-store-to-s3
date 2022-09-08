import { Parameter } from 'aws-sdk/clients/ssm';

const formatParametersToEnv = (parameters: Parameter[]) => {
    const _env = parameters.map((p) => {
        const key = p.Name?.split('/').slice(-1);
        if (!key) {
            return;
        }
        return `${key}=${p.Value}`;
    });
    return _env ? _env.join('\n') : '';
};

export { formatParametersToEnv };
