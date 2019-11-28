import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT;

app.get("/", (req: any, res: any) => res.send("Hello world"));

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
