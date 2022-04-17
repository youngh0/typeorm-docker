import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express, { Request, Response, NextFunction } from 'express';
import testRouter from './routes/test.route';

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('이제 캡스톤 시작...........................');
});

app.listen(3000, () => {
    // createConnection().then(async connection => {

    //     console.log("Inserting a new user into the database...");
    //     const user = new User();
    //     user.firstName = "daniel";
    //     user.lastName = "Saw";
    //     user.age = 25;
    //     await connection.manager.save(user);
    //     console.log("Saved a new user with id: " + user.id);
    
    //     console.log("Loading users from the database...");
    //     const users = await connection.manager.find(User);
    //     console.log("Loaded users: ", users);
    
    //     console.log("Here you can setup and run express/koa/any other framework.");
    
    // }).catch(error => console.log(error));

    console.log('Start Server with 3000 port');
});

app.use('/test', testRouter)