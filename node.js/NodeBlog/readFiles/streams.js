const fs= require('fs');

const readStream=fs.createReadStream('./docs/blog2.txt')
const writeStream=fs.createWriteStream('./docs/blog3.txt')

// readStream.on('data',(chunk)=>{
//   console.log("------NEW CHUNK------")
//   console.log(chunk)  //it will give buffer | if you write ,{encoding:'utf8'} after file address the no need to write toString()  
//   console.log(chunk.toString())

//   writeStream.write('\nNEW CHUNK\n')
//   writeStream.write(chunk)
// })

//piping
readStream.pipe(writeStream);
//pipe function intead of commented code