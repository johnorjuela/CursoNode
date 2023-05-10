import mongoose from "mongoose";
try {
    await mongoose.connect(process.env.URI_MONGO)
    console.log("Base de Datos conectada")
    
} catch (error) {
    console.log("OOps algo va mal")
    
}
