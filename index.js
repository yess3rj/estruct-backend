import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_URI, () => {
        console.log('conexion a base de datos satisfactoria');
    });