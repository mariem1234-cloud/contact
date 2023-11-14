const express=require ('express');
require('./config/connect');
const AuthorApi=require('./routes/author');
const cors=require('cors');


const app=express();
app.use(express.json());
app.use(cors());

app.use('/author', AuthorApi);
app.use('/getimage',express.static('./uploads'));


app.listen(3000, ()=>{
    console.log('server work')
})



