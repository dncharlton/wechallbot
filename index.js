require('dotenv').config({path: __dirname + '/.env'})
const Discord = require("discord.js")
const request = require('request')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('WeChallBot is running.... without legs?')
})

client.on('message', message => {
    if (message.content.startsWith('1wc') || message.content.startsWith('!wc')){
        var params = message.content.split(' ');
        switch (params[1]){
            case 'help':
                break;
            
            case 'site':
                var url = 'https://www.wechall.net/index.php?mo=WeChall&me=API_History&no_session=1&limit=3&username=' + params[3] + '&sitename=' + params[2];
                console.log('Request for: ' + url)
                request(url, { json: true }, (err, res, body) => { 
                    if (err) { return console.log(err); }
                    var lines = body.split('\n')
                    var firstline = lines[lines.length-2].split('::')

                    var reply = "\n" + firstline[3] + ' statistics for ' + params[3] + '.\nSite has been ' + firstline[8] + ' completed.\n';
                    reply += 'The last three challenges completed are:\n'

                    for (var i = lines.length-2; i >= 0; i--) {
                        var cols = lines[i].split('::')
                        var chalDate = new Date(cols[0])
                    }

                    message.reply(reply)
                });
                break;

            case 'sites':
                var url = 'https://www.wechall.net/wechall.php?username=!sites%20' + params[2];

                request(url, { json: true }, (err, res, body) => { if (err) { 
                    return console.log(err); }
                    message.reply(body)
                });
                break;

            case 'rank':
                var url = 'https://www.wechall.net/wechall.php?username=' + params[2];

                request(url, { json: true }, (err, res, body) => { if (err) { 
                    return console.log(err); }
                    message.reply(body)
                });
                break;
            
            default:
                message.reply('aaaaaa')
                break;
        }
        
    }
})

const token = process.env['API_TOKEN'];

client.login(token)