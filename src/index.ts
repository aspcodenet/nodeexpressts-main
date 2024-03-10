import express  from "express";
import type {Express,Request,Response}  from "express";
import  {getAllMessages}  from "./models/message";
import { initializeDatabase, sequelize } from "./database/db";
import { Player } from "./database/player";
import {migrate} from "./database/migrations/migrationhelper"
const port:Number = 3000
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server2");
});

app.get("/api/messages", (req: Request, res: Response) => {

    // let a : Number | null  = 100
    // a = 200
    // a = null

    res.json(getAllMessages())
});


app.get("/api/players", (req: Request, res: Response) => {

    // let a : Number | null  = 100
    // a = 200
    // a = null
    const allPlayers = Player.findAll()
    res.json(allPlayers)
});






app.listen(port, async () => {
    await initializeDatabase()
    
    //await sequelize.sync()  // DROP TABLES, CREATE TABLES
    // kör en gång och sen  bortkommentera
    await migrate(sequelize)
    console.log(`[server]: Server is running at http://localhost:${port}`);
}); 


