const fastify = require('fastify')({
    logger: true,
})

fastify.get('/', (req, res) => {
    res.send('Hello world');
})

fastify.listen(3000, (err, ad)=>{
    if(err){
        fastify.log.err(err);
        process.exit(1);
    }
    console.log('server is running')
}) 