const request = require('supertest');
const fs = require('fs');
const path = require('path');
const { isTypedArray } = require('util/types');

const testJsonFile = path.resolve(__dirname, )

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
                    .expect(200)
            })
        })
    })
})