const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('Mongodb Atlas Successfully With ToDo List');
}).catch((err)=>{
    console.log(`Mongodb connection failed Error : ${err}`);
})