var env = 'development';
// var env =  'testing'; 
// var env =  'production'; 

var Config =
{
    development: {
        APIUrl: 'http://localhost:8080',
    }   
}

export var APIurl = Config[env].APIUrl;