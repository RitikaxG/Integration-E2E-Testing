import { prisma } from "./db";
import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum",async (req,res) => {
    const {a,b} = req.body;
    if(!a || !b){
        return res.status(422).json({
            message : "Incorrect input fields"
        })
    }

    const sum = a+b;
    try{
        const dbResponse = await prisma.sum.create({
            data:{
                a,
                b,
                sum
            }
        })
        console.log(dbResponse);
        res.status(200).json({
            message : "Success",
            sum,
            id: dbResponse.id
        })
    }
    catch(err){
        console.error('Error pushing to db',err);
        res.status(500).json({
            message : "Error db push",
            err
        })
    }
    
})