const app = require('./app')
const port = process.env.PORT || 3003
// Listen
app.listen(port, () => {
    console.log(`Servidor aberto em http://localhost:${port}`)
})