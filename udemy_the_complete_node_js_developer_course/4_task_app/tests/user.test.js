const request = require("supertest")
const app = require("../src/index")

test('Should signup a new User', async () => {
    await request(app).post("/users").send({
        name: 'romain',
        email: 'rom.dev@live.fr',
        password: 'bonjourbonjour'
    }).except(201)
})