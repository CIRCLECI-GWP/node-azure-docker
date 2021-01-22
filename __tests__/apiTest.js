const supertest = require("supertest");
const app = require("../app");
const request =  supertest(app);


test ("Fetch Todos", (done) => {

    request.get("/todos")
    .expect(200)
    .expect("Content-Type", /json/)
    .end(function (err, res) {
        if(err) return done(err);
        
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body.length).toBe(3);

        done();
    })
})