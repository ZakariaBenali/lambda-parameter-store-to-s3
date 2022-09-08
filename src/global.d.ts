declare namespace NodeJS {
    interface ProcessEnv {
        readonly REGION: string;
        readonly PARAMS_PATH: string;
        readonly BUCKET: string;
    }
}
