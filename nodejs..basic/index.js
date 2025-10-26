//lets create a file first a txt file
/*
const fs = require('node:fs/promises');
//writeFile, copyfile,rename,unlink, appendfile
fs.writeFile("hey.txt","hey hello kaie ho",function(err){
 if(err) console.error(err);
 else console.log("done");
})
*/
// const fs = require('node:fs/promises');
// fs.appendFile("hey.txt", "kem cho kaisan ba" ,function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
//rename file
/*
const fs = require('node:fs');
fs.rename("hey.txt", "hello.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})*/
//copy file
/*
const fs = require('node:fs');
fs.copyFile("hello.txt","../copyfile/new.txt",function(err){
    if(err) console.error(err);
    else console.log('done')
})*/
//unlink-->file delete karna

// const fs = require('node:fs');
// fs.unlink("../copyfile/new.txt", function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })
//rmdir-->blank folder delete karne mei help karta hai
// const fs = require('node:fs');
// fs.rmdir("../copyfile", function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })
// problem is rmdir only removes folder where its empty but for file containing use this
// const fs = require('node:fs');
// fs.rmdir("../copyfile",{recursive:true} ,function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })
//hw-->  folder making , read folder, file read


//http server

const http = require('node:http');
const server= http.createServer(function(req,res){
    res.end("hello world");
});
server.listen(3000);
console.log("server listening on port 3000");