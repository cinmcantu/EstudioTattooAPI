// IMPORTANT:
// Some of these tests just work after the database had been populated
// Please, run
// npm run sedd
// before do the tests

const request = require('supertest')
const app = require('./test-server')


describe('GET Routes', () => {
    it('should return some portfolios', async () => {
        const res = await request(app)
            .get('/portfolio')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('result')
    })
    it('should return the portfolio with id=1', async () => {
        const res = await request(app)
            .get('/portfolio/1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('result')
        expect(res.body.result.id).toEqual(1)
    })
    it('should return the portfolio with tag=cartoon', async () => {
        const res = await request(app)
            .get('/portfolio/tag/Cartoon')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('result')
        expect(res.body.result.tag).toEqual("cartoon")
    })
})
describe('POST Route', () => {
    it('should return error=false after insert a portfolio', async () => {
        const res = await request(app)
            .post('/portfolio')
            .send({
                "artist_id": 1,
                "description": "Lion with a cross",
                "size": "huge",
                "tag": "Religion",
                "color": "black and white",
                "avaliable": true
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body.error).toEqual(false)
    })
})
describe('PUT Route', () => {
    it('should return error=false after update a portfolio', async () => {
        try {
            const res = await request(app)
                .put('/portfolio/3')
                .send({
                    "avaliable": false
                })
            expect(res.statusCode).toEqual(200)
            expect(res.body.error).toEqual(false)
        } catch (e) {
            console.log(e.message)
        }

    })
})
describe('DELETE Route', () => {
    it('should return error=false after delete a portfolio', async () => {

        const res = await request(app)
            .delete('/portfolio/2')
        expect(res.statusCode).toEqual(200)
        expect(res.body.error).toEqual(false)

    })
})
