import { Steps, bot_script, market_bot } from ".."
import { ErrorHandler } from "../../../../lib/error_handler"
import { ConvertTeleError } from "../../telegram.error"
import { convertMessageContext } from "../../telegram.helper"
import { TCacheDataUser, TMessageContext } from "../../telegram.type"
import { getTemplateMessage } from "../../telegram_template"

export const verify_continue_handle = async (ctx: TMessageContext, cacheDataUser: TCacheDataUser) => {
    const { chatId, username, userId, userFullName } = convertMessageContext(ctx)
    const { user_step, language } = cacheDataUser
    try {
        switch (user_step) {
            case Steps.finish: {
                await market_bot.telegram.sendMessage(chatId, getTemplateMessage('welcome', { username }, language), {
                    parse_mode: "Markdown",
                })
                break
            }
            default:
                break
        }
    } catch (e) {
        ErrorHandler(e, { chatId }, verify_continue_handle.name)
        ConvertTeleError(e, market_bot, chatId, language)
    }
}