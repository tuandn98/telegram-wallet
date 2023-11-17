import { Steps, bot_script, SendMessageByBotMarket, market_bot } from '..';
import { ConvertTeleError } from '../../telegram.error';
import { convertMessageContext, generateRefCode } from '../../telegram.helper';
import { TMessageContext } from '../../telegram.type';
// import { setUserStorage } from '../telegram_cache/cache.telegram_user_storage';
import { TTemplateLanguage, getTemplateMessage } from '../../telegram_template';
import { ErrorHandler } from '../../../../lib/error_handler';
import { setUserStorage } from '../telegram_cache/cache.telegram_user_storage';

const DEFAULT_SPONSOR = '0x0'

export const verify_welcome_handler = async (ctx: TMessageContext, language?: TTemplateLanguage) => {

    const { userId, chatId, username, startPayload, userFullName } = convertMessageContext(ctx)
    try {
        console.log('run');

        SendMessageByBotMarket('message', chatId, bot_script.reply_markup(language).user_info)
    } catch (e) {
        ErrorHandler(e, { userId, userFullName, chatId }, verify_welcome_handler.name)
        ConvertTeleError(e, market_bot, chatId, language)
    } finally {
    }
}