import { config } from "dotenv";
import { getArrStringFromEnv, getBooleanFromEnv, getEnvString, getIntFromEnv } from "./lib/config.helper";
config()

export const NODE_ENV = getEnvString("NODE_ENV");
export const SERVER_CODE = getEnvString("SERVER_CODE");
export const SERVER_NAME = getEnvString("SERVER_NAME");
export const SENTRY_DNS = getEnvString("SENTRY_DNS");
export const TELEGRAM_WALLET_BOT_TOKEN = getEnvString("TELEGRAM_WALLET_BOT_TOKEN");
export const REDIS_URI = getEnvString("REDIS_URI");
export const REDIS_PREFIX = getEnvString("REDIS_PREFIX");
export const PROJECT_ID = getEnvString("PROJECT_ID");

export const IS_FORK = getBooleanFromEnv("IS_FORK");
export const IS_DEBUG = getBooleanFromEnv("IS_DEBUG");
export const IS_SERVER_MAINTAINED = getBooleanFromEnv("IS_SERVER_MAINTAINED");
export const IS_USE_PLAYGROUND = getBooleanFromEnv("IS_USE_PLAYGROUND");
export const ENABLE_TELEGRAM = getBooleanFromEnv("ENABLE_TELEGRAM");

export const REDIS_DB_NUMBER = getIntFromEnv("REDIS_DB_NUMBER");

export const DEBUG_LEVEL = getArrStringFromEnv("DEBUG_LEVEL", ",");
export const VIEM_PROVIDERS = getArrStringFromEnv("VIEM_PROVIDERS", ",");

