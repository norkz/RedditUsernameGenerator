/**
 * @author Norkz
**/


// If you're going to copy/change please give credits :D.

const request = require('request');
const chalk = require('chalk');
var api = 'https://www.reddit.com/api/v1/generate_username.json'; 

{   
    request(api, function (error, response, body) {  
        var usernames = JSON.parse(body); 
        console.log('code:', String(response && response.statusCode)
                    .replace(/200/g, chalk.green('200 | RECEIVED'))
                    .replace(/429/g, chalk.red('429 | RATE-LIMIT')) + chalk.bgGreen(chalk.black('\n------------------------------')));
        console.log(String(usernames['usernames'])
                    .replace(/,/g, '\n')
                    .replace(/undefined/g, chalk.redBright('Rate-Limit. Try again on 5 seconds.')))
    })
}  

