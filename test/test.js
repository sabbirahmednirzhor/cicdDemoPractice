const request = require("supertest");
const app = require("../index");


describe("GET /add/8/7", () => {
    it("The sum is : 15", (done) => {
        request(app).get("/add/8/7").expect("The sum is : 15", done);
    })
});

