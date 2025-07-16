const http = require('http');
const { hostname } = require('os');
const { json } = require('stream/consumers');
const url = require('url');

// const server = http.createServer((req, res) => {
//   res.end('Hello from Node.js Server!');
// });

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//       console.log(req.url)
//     res.end('<h1>Home Page</h1>');
//   } else if (req.url === '/about') {
//       console.log(req.url)
//     res.end('<h1>About Page</h1>');
//   } else {
//       console.log(req.url)
//     res.end('<h1>404 Not Found</h1>');
//   }
// });



// const server = http.createServer((req,res)=>{
//   const paredurl = url.parse(req.url,true);

//   const query = paredurl.query; /// .query will tell what is the  query sent by user to server 
//   const path = paredurl.pathname;/// pathname will tell thr path of url 

//   res.end(JSON.stringify(path));

// })


const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts/1',
  method: 'GET'
}


  const req = http.request(options,(res)=>{
    let data = ''
    res.on('data',(chunk) =>{
      data += chunk;
    })

    res.on('end',()=>{
      console.log(JSON.stringify(data));
    });
  });


// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// })