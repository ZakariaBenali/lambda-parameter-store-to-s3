import { AWSError } from 'aws-sdk';
import { GetParametersByPathRequest, GetParametersByPathResult, NextToken, Parameter } from 'aws-sdk/clients/ssm';
import { PromiseResult } from 'aws-sdk/lib/request';
import { getSSMClient } from 'lib/ssmClient';

async function getParametersByPath(nextToken?: NextToken): Promise<PromiseResult<GetParametersByPathResult, AWSError>> {
    const path = process.env.PARAMS_PATH;
    if (!path) {
        throw new Error('No path was specified');
    }
    const params: GetParametersByPathRequest = {
        Path: path,
        Recursive: true,
        WithDecryption: true,
        NextToken: nextToken,
    };
    const client = getSSMClient();
    const response = await client.getParametersByPath(params).promise();
    return response;
}

async function getParameters(): Promise<Parameter[]> {
    const parameters: Parameter[] = [];
    let nextToken: NextToken | undefined;
    do {
        const response = await getParametersByPath(nextToken);
        if (response?.Parameters) {
            response.Parameters.forEach((p) => {
                parameters.push(p);
            });
        }
        nextToken = response?.NextToken;
    } while (nextToken);
    return parameters;
}

export { getParameters };
