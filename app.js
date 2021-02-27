/**
 * @author Norkz
**/


// If you're going to copy/change please give credits :D.

const request = require('request'); // Import request package

{   // Start
    var api = 'https://www.reddit.com/api/v1/generate_username.json'; // Set reddit.com API
    request(api, function (error, response, body) { // API function
        var parsedUsernames = JSON.parse(body); // Parse usernames from the api
        console.log('code:', String(response && response.statusCode).replace(/200/g, '200 | RECEIVED').replace(/429/g, '429 | RATE-LIMIT') + '\n'); // print responses and rate-limits
        console.log(String(parsedUsernames['usernames']).replace(/,/g, '\n').replace(/-/g, '_').replace(/undefined/g, 'Rate-Limit. Try again on 5 seconds.')) // Print usernames with spaces and without -
    })
}   // End

