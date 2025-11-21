import { describe, it , expect, beforeAll } from "vitest";
import request from "supertest";
import { app } from "..";
import { restartDb } from "./helper/restart-db";


describe("POST /sum",() => {
    beforeAll(async () => {
        console.log("clearing db");
        await restartDb();
    })
    it('adds 1 and 2 to expect 3',async () => {
        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        })

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({message : "Success", sum:3, id: expect.any(Number) })
    })
})