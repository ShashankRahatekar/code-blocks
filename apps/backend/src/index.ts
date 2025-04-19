import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import routes from "./api/routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

const startServer = () => {
    try {
        app.listen(PORT, () => {
            console.log('Server started at port ', PORT);
        })
    } catch (error) {
        console.error(`Error starting server `, error);   
    }
}

startServer();