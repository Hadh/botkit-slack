/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/
var axios = require('axios');

module.exports = function(controller) {

    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "Hi there, you're on workspace: ")
    });

    controller.hears(['^yomama$'], 'direct_message,direct_mention', function(bot, message) {
        axios.get('http://api.yomomma.info/')
        .then((res)=>{
            const joke = res.data.joke;
            bot.reply(message, `Yo Mama:${joke}`)
        });

    });
};
