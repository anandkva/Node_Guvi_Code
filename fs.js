 const fs=require('fs')
 const quote="Hwllo"
 fs.writeFile('./awesome.html',quote,(err)=>{
    console.log(err)
 })
 const quote2="Live more, worry less"

 fs.writeFile('text-1.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-2.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-3.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-4.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-5.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-6.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-7.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-8.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-9.html',quote2,(err)=>console.log(err))
 fs.writeFile('text-10.html',quote2,(err)=>console.log(err))

const[,,n1]=process.argv
console.log(n1)
for(var i=1;i<=n1;i++){
 //   fs.writeFile(`./backup/text-${i}.html`,quote2,(err)=>console.log(err))
}
fs.readFile('cool.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

fs.appendFile('cool.txt',"\n hey",(err,data)=>{
    //console.log(err)
    console.log(data)
}

)

fs.unlink('delete.css',(err)=>console.log(err))