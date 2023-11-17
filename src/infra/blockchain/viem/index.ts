import {
	FallbackTransport,
	HttpTransport,
	WebSocketTransport,
	createPublicClient,
	createWalletClient,
	fallback,
	http,
	webSocket,
} from "viem";
import {
	VIEM_PROVIDERS,
} from "../../../config";

export const getTransport = (): FallbackTransport => {
	const transports: (WebSocketTransport | HttpTransport)[] = [];
	VIEM_PROVIDERS.forEach((el: string) => {
		if (el.startsWith("ws")) {
			transports.push(webSocket(el));
		} else {
			transports.push(http(el));
		}
	});
	return fallback(transports);
};
export const viemPublicClient = createPublicClient({
	batch: {
		multicall: {
			wait: 10,
		},
	},
	transport: getTransport(),
});
export const viemWalletClient = createWalletClient({
	transport: getTransport(),
});

