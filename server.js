const mongoose = require('mongoose');

/* We have to check whether we are rocking proper version of node js */
const [major, minor] = process.versions.node.split('.').map(parseFloat);

if (major < 10 || (major === 10 && minor <= 5)) {
    console.warn('🎮 💩 🐵 \nHey you are not in the latest version \n\tTry to upgrade to a new version\n🐵 💩 🎮\n');
    process.exit();
}

// Have to import environmental variables from variables.env file
require('dotenv').config({ path: 'variables.env' });

/*
__________________________________________________
        MongoDb Connection Section
--------------------------------------------------
*/

// Connect to our Database and handle from our variable.env file
mongoose.connect(process.env.DATABASE, {

    useNewUrlParser: true
    
});

// We have to check whether the mongoose promise is working fine otherwise we have to do

// mongoose.Promise = global.Promise; //Making mongoose to use ES6 promises

//throwing an Error if MongoDb Server Throwes an Error
mongoose.connection.on('error', (err) => {

    console.error(`💔 😩 💔 😩 💔 😩 💔 😩 💔 😩 💔 😩 💔 👉 ${err.message}`);

});

//Showing that connection successfully Established 
mongoose.connection.on('connected', function(){

    console.error(`MongoDb Connected Succesfully`);

});

/*
__________________________________________________
        Models to be imported here
--------------------------------------------------
*/




// Starting our app
//app includes all the expressjs commands for starting a server
//initialising a server through a app constant
const app = require('./app');

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {

    console.warn(`Our app is coming 🔥 🔥 🔥 at Port:${ server.address().port }`);
    
});
