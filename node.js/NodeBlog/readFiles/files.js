const fs=require('fs');

// readFile

// fs.readFile('./docs/blog.txt',(err,data)=>{
//   if(err)
//   console.log(err);
// // console.log(data);   it will show a buffer
// console.log(data.toString());
// })

//writeFile

// fs.writeFile('./docs/blog.txt','hello World',()=>{
//   console.log("File Written");
// })

// fs.writeFile('./docs/blog1.txt','Hello from blog1.txt',()=>{
//   console.log("File written")
// })                      
//  if file doesNotMatch,t exist it will create the file first 

//directories

// if(!fs.existsSync('./assets')){
//   fs.mkdir('./assets',(err)=>{
//     if(err)
//     console.log(err)
//   console.log('Folder Created')
//   })
// }else{
//   fs.rmdir('./assets',(err)=>{
//     if(err)
//     console.log(err)
//   console.log('Folder Deleted')
//   })
// }

// deleting Files

if(fs.existsSync("./docs/deleteme.txt")){
  fs.unlink('./docs/deleteme.txt',(err)=>{
    if(err)
    console.log(err)
  console.log("File Deleted")
  })
}