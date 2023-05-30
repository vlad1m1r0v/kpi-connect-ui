const getEnv = (key: string): string | undefined => import.meta.env[key];

export default getEnv;
