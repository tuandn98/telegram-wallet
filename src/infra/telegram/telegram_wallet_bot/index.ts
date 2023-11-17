import { Telegraf } from "telegraf"
import { handleBotAction } from "./telegram_action"
import { handleBotMessage } from "./telegram_message"
import { handleBotStart } from "./telegram_start"
import { AirdropTelegramBotScript, TReplyMarkup } from "../telegram_template/template_message"
import { ENABLE_TELEGRAM, TELEGRAM_WALLET_BOT_TOKEN, } from "../../../config"
import { successConsoleLog } from "../../../lib/color-log"
import { ErrorHandler } from "../../../lib/error_handler"

const Steps = {
    welcome: "welcome",
    finish: "finish",
    set_uri: "set_uri",
}

const telegraf_bot = new Telegraf(TELEGRAM_WALLET_BOT_TOKEN)

const bot_script = new AirdropTelegramBotScript()
const initTelegramBot = async () => {
    try {
        if (ENABLE_TELEGRAM) {
            handleBotStart()
            handleBotAction()
            handleBotMessage()
            successConsoleLog(`🚀 Telegram bot Market: ready`)
            await telegraf_bot.launch()
        } else {
            console.log(`Disable Telegram Bot ... To open please change env ENABLE_TELEGRAM to true`)
        }
    } catch (e) {
        console.log(`initTelegramBotMarket error!`)
        ErrorHandler(e, {}, initTelegramBot.name)
        await telegraf_bot.launch()
    }
}

const SendMessageByBotMarket = (message: string, chatId: string | number, reply_markup?: TReplyMarkup) => {
    return telegraf_bot.telegram.sendMessage(chatId, message, {
        parse_mode: 'Markdown',
        disable_web_page_preview: true,
        reply_markup
    })
}

export {
    Steps, telegraf_bot as market_bot,
    bot_script,
    initTelegramBot,
    SendMessageByBotMarket
}
