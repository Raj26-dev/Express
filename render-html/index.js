import express from 'express';
// import home from './home.js';
// import login from './login.js';
// import submit from './submit.js';
import path from 'path';


const app = express();

const absolutpath = path.resolve('./');

// app.get('/', (resq, resp)=>{
//     resp.send(home())
// })
// app.get('/login', (resq, resp)=>{
//     resp.send(login())
// })
// app.post('/submit', (resq, resp)=>{
//     resp.send(submit())
// })

// using app.use method acces external css file 
const cssPath = path.resolve('../publice')
console.log("cssPath::", cssPath);
app.use(express.static(cssPath))

// access .html file using absolut relative path using path module resole method and for access file use sendfile method

app.get('/', (req, resp)=>{
    // const absolutePath = path.resolve('./home.html')
    resp.sendFile(absolutpath+'/home.html')
})
app.get('/login', (req, resp)=>{
    // const absolutePath = path.resolve('./login.html')
    resp.sendFile(absolutpath+'/login.html')
})
app.post('/about', (req, resp)=>{
    // const absolutePath = path.resolve('./about.html')
    resp.sendFile(absolutpath+'/about.html')
})

// creating 404 page using use method and it take 2 parameter in callback req, resp and show status.
// app.use is multipurpose use / use as middleware 
app.use((req,resp)=> {
    //  const absolutePath = path.resolve('./404.html')
    resp.status(404).sendFile(absolutpath+'/404.html')
})


app.listen(3000)