const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";
const sequelize = require("../../src/db/models/index").sequelize

describe("routes : users", () => {
    /*beforeEach((done) => {
        sequelize.sync({force: true})
        .then(() => {
          done();
        })
        .catch((err) => {
          console.log(err);
          done();
        });
    });*/
    describe("GET user routes", () => {
        it("GET '/sign_up' body should show sign-up", () => {
            request.get(`${base}sign_up`, (err, res, body) => {
                expect(err).toBeNull();
                expect(body).toContain("Sign-Up")
            })
        });
        it("GET '/sign_in' body should show sign-in", () => {
            request.get(`${base}sign_in`, (err, res, body) => {
                expect(err).toBeNull();
                expect(body).toContain("Sign-In")
            })
        })
    });
    describe("POST user routes", () => {
        beforeEach((done) => {
            sequelize.sync({force: true})
            .then(() => {
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
        });
        it("POST 'user' should create a user then redirect to home page", () => {
            const options = {
                url: base+"user",
                form: {
                    username: "ryan Test",
                    email: "test@email.com",
                    password: "123456",
                    passwordConf: "123456"
                }
            }
            request.post(options, 
                (err, res, body) => {

                    expect(body).toContain("Sports-Live")

                    User.findOne({where: {email: options.email}})
                    .then((user) => {
                        expect(user).not.toBeNull();
                        expect(user.email).toBe("test@email.com")
                        expect(user.id).toBe(1);
                    })
                    .catch((err) => {
                        console.log(err)
                        done();
                    })
                }
            )
        });

    })
})