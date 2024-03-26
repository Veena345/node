const http = require('http')
const port= 4001
const server = http.createServer((req,res)=>{
res.write('hello !')
res.end()
})

server.listen(port,(error)=>{
    if (error){
        console.log(error)

    }
    else{
        console.log('port is running on',+port)
    }
})