const http= require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> first page </title></body>');
    res.write('<body><h1> bhagath</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(4000);