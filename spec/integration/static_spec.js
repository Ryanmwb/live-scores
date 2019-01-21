const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {
    describe("GET /", () => {
        it("should return a status code of 200", () => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
            })
        });
        it("should have 'Sports Live' in the body", () => {
            request.get(base, (err, res, body) => {
                expect(body).toContain("Sports Live")
            })
        });
    })
})
