import express from "express";
import { appendFile } from "fs";
import routes from "./routes";

const app = express();

const PORT = 8080;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send("base route is working");
})

app.use('/convert', routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})