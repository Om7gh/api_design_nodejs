import {env as loadEnv} from "custom-env"
import {z, ZodNever} from "zod"

process.env.APP_STAGE = process.env.APP_STAGE || "DEV";

const isProduction = process.env.APP_STAGE === 'PROD';
const isDeveloppement = process.env.APP_STAGE === 'DEV';
const isTesting = process.env.APP_STAGE === 'TEST';

if (isDeveloppement) loadEnv();
else if (isTesting) loadEnv("test")

const envSchema = z.object({
    NODE_ENV: z.enum(["DEV", "PROD", "TEST"]).default("DEV"),
    APP_STAGE: z.enum(["DEV", "PROD", "TEST"]).default("DEV"),
    DATABASE_URL: z.string().startsWith("postgresql://"),
    PORT: z.coerce.number().positive().default(3000),
    JWT_SECRET: z.string().min(20),
    JWT_EXPIREDIN: z.string().default("7d"),
    BCRYPT_ROUND: z.coerce.number().min(10).max(20).default(12)
})

export type ENV = z.infer<typeof envSchema>

let env : ENV;

try {
    env = envSchema.parse(process.env);
} catch(e) {
    if (e instanceof z.ZodError) {
        console.log("Error: invalid envirement variable schema");
        console.error(z.flattenError(e).formErrors);
        console.error(z.flattenError(e).fieldErrors);

        e.issues.forEach((error) => {
            const path = error.path.join(".");
            console.log(`${path}, ${error.message}`);
        })
        process.exit(1);
    } else throw e;
}

export const isProd = () => process.env.APP_STAGE === 'PROD';
export const isDev = () => process.env.APP_STAGE === 'DEV';
export const isTest = () => process.env.APP_STAGE === 'TEST';

export {env}
export default env