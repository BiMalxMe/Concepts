const TelegramBot = require('node-telegram-bot-api');
const token ="8004935480:AAHWLtYgYErmFWrd4vEdQriEqLTp8_g3sE8";

const bot = new TelegramBot(token, { polling: true });
console.log('Bot is running...');

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
  
    if (messageText === '/start') {
        
      bot.sendMessage(chatId, 'Welcome to the bot!');
    }
  });
  ;
