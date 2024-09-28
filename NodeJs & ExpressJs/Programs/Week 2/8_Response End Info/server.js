const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('This is coming from NodeJS server. ');
    if(req.url == '/first') {
        res.end('This is the first response');
    }else{
        res.end('This is default response');
    }
});

server.listen(3200,(req,res)=>{
    console.log('Server is listening at 3200');
});