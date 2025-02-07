import app from "./app"

const PORT:number = 3000

app.listen (PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})