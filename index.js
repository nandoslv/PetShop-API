import express from "express";
import cors from "cors";
import winston from "winston";
import animalRoute from "./routes/animal.route.js";
import proprietarioRoute from "./routes/proprietario.route.js";
import servicoRoute from "./routes/servico.route.js";
import blogRoute from "./routes/blog.route.js";


const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'PETSHOP-API.log' })
    ],
    format: combine(
        label({ label: 'PETSHOP-PAI' }),
        timestamp(),
        myFormat
    )
});

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

//ROUTES
app.use('/animal', animalRoute);
app.use('/proprietario', proprietarioRoute);
app.use('/servico', servicoRoute);
app.use('/blog', blogRoute);

app.use((err, req, res, next) => {
    global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);    
    res.status(400).send({ error: err.message })
})

const port = 3001;

app.listen(port, async () => {
    try {
        global.logger.info(`API Started Port: ${port} 
        http://localhost:${port}/`)
    } catch (err) {
        global.logger.error(err);        
    }
});