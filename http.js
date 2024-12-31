const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('hello programmer');
        res.write('how are u')
        res.end()
    }else if(req.url==='/about'){
        res.write('This ia About page')
        res.end()
    }
    else{
        res.write("Page not found")
        res.end()
    }
})
server.listen(3000);
console.log("Listeing on port 3000")