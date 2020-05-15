import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 80;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

const sayHello = (req, res) => res.send("Hello~!");


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get('/', sayHello);

app.listen(PORT, handleListening);