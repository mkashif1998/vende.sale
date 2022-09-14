const request = require("request");

var options = {
        'method': 'POST',
        'url': "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer?=grant_typerefresh_token&refresh_token=AB11613809654jzmtLqzknkkezseCFDIJfxO3ZeoLEE2mODJOQ",
        
       'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': 'Basic QUJ6V0FUbklHRzhJRFViZllnZ3dFQUU0bjd3ZlJ4N2l6amRXZXF4V2EzRnRGZG0wYTg6ZWxwM0k2aHhVWVVTM1VSRW5LazI1WHF2N0lBSkVHUnlJYlAwYWVNRQ==',
            'Access-Control-Allow-Origin': '*',
            'cache-control': 'no-cache'
        }
        
        

      };
       request(options, function (err, ress, body) {
           if(err){
               console.log("err is: "+err)
           }else{
               console.log("body is: "+body)
           }
       })