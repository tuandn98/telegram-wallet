import {
	Address,
	Hex,
	Log,
	decodeAbiParameters,
	encodeEventTopics,
	isAddressEqual
} from "viem";

import { viemPublicClient } from ".";


const isMatchAddress = (address1: any, address2: any) => {
	return isAddressEqual(address1, address2);
};

export {
	isMatchAddress,
};
