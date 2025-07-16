// console.log("Hello World")

const fs = require('fs');

// fs.readFile('tem.txt', 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// fs.writeFile('new.txt', 'hello this is nodejs writefile function',(e)=>{
// if(e) throw e;
// console.log("file writtren done")
// })

// fs.mkdir('newdir',(e)=>{
//     console.log("dir created ")
// })

// fs.readdir('./newdir',(files,err)=>{
//     console.log(files)
//     console.log(err)
//     console.log("files directory")
// })

// fs.unlink('./newdir/new.txt',(e)=>{
//     console.log("file deleted")
// })

fs.rmdir('./newdir',(e)=>{
    if(e) throw e;
    console.log("Directory deleted")
})