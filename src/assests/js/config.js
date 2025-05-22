var env = 'development';
// var env =  'testing'; 
// var env =  'production'; 

var Config =
{
    development: {
        RYTUrl : 'http://localhost:3000',
        APIUrl : 'http://localhost:8080',
    }   
}

export var RYTUrl = Config[env].RYTUrl;
export var APIurl = Config[env].APIUrl;