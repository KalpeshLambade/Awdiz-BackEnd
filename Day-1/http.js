const http = require('http');

const book =[
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
]

const server = http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url ==='/api/hello'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(book));
    }
    else{
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('Endpoint Not Found');
    }
})

const port =8000;

server.listen(port,()=>{
    console.log(`server running on port ${port}`);
})