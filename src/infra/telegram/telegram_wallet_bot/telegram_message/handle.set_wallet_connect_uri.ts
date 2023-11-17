import { market_bot } from ".."
import { ErrorHandler } from "../../../../lib/error_handler"
import { ConvertTeleError } from "../../telegram.error"
import { convertMessageContext } from "../../telegram.helper"
import { TCacheDataUser, TMessageContext } from "../../telegram.type"

export const handleSetWalletConnectURI = async (ctx: TMessageContext, user_storage: TCacheDataUser) => {
    const { message, userId, chatId, username } = convertMessageContext(ctx)
    const { language } = user_storage
    try {
    } catch (error) {
        ErrorHandler(error, {}, handleSetWalletConnectURI.name)
        ConvertTeleError(error, market_bot, chatId, language)
    }
}