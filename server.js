import express from 'express';
import sum from './sum.js';

const app = express();
const port  = 3000;

app.listen(port, ()=>{
    console.log("server listening on port ", port);
})


app.get("/home", async (req, res)=>{
    res.status(200).json({message: "welcome home"})
})

app.get('/getSum/:a/:b', async (req, res)=>{
    const {a, b} = req.params;
    res.json({
        ans: sum(parseInt(a), parseInt(b))
    })
})