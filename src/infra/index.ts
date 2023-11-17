import { REDIS_DB_NUMBER } from "../config";
import { initRedis } from "./cache/redis";
import { initSentry } from "./logging/sentry";
import { initTelegramBot } from "./telegram/telegram_wallet_bot";

const connectInfra = async () => {
	try {
		await Promise.all([
			initSentry(),
			initRedis(REDIS_DB_NUMBER),
			initTelegramBot(),
		]);
	} catch (e) {
		throw e;
	}
};


export {
	connectInfra
};

