const mongoose=require('mongoose');
//pass=process.env.PASSWORD
const url = process.env.MONGODB_URI;

mongoose.connect(url,{useUnifiedTopology: true});

const connection=mongoose.connection;

connection.on('error', err=>console.log(err));
connection.on('connected', ()=>console.log('MongoDB connected'));