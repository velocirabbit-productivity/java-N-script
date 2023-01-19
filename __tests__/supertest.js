const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { isTypedArray } = require('util/types');
// const authController = require('../server/controllers/authController');

// const testJsonFile = path.resolve(__dirname, )

const server = 'http://localhost:3000';

describe('Route integration', () => {
    afterAll(() => {
        return request(server)
            .send([])
            .expect([])
    })

    describe('/user', () => {
        describe('POST', () => {
            it('signup responds with 200 status and /applicaction\/json/ content type', () => {
                const response = request(server)
                    .post('/user/signup')
                    .expect('Content-Type', /applicaction\/json/)
                    .send([{ username: 'hello', password: 'world' }])
                    // .send({ username: 'hello', password: 'world' }) //removed array for send test -rylan
                    .expect(200)
            })
        })
    })
})