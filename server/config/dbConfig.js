const mongoose = require('mongoose');
// mongoose.set('strictQuery', false)

mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongo DB Connection Successful');
});

connection.on('error', (error) => {
    console.log('Mongo DB Connection Failed!');
    console.error(error);
});
