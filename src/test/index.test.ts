import request from 'supertest';
import app from '../index';
import mongoose from 'mongoose';

const PORT : number = 8000



// Creating server to listen at localhost 3000
app.listen(PORT, () => {
  // Logging when the server has started
  console.log("listening to server on "+PORT)
})

beforeAll(done => {
  done()
})

afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.disconnect()
  mongoose.connection.close()
  done()
})

describe('GET /disconnect',  () => {

  it('should return 404 if username paramter not passed', async () => {
    const res = await request(app)
    .get("/disconnect")
    expect(res.statusCode).toEqual(404)
  })

  it('should return 200 if user has started streaming', async () => {
      const res = await request(app)
      .get("/disconnect/:mahlatsi")
      expect(res.statusCode).toEqual(200)
  })

  it('should return 403 has not started streaming', async () => {
    const res = await request(app)
    .get("/disconnect/:johndoe")
    expect(res.statusCode).toEqual(403)
})

});


describe('GET /connect',  () => {

  it('should return 404 if username paramter not passed', async () => {
    const res = await request(app)
    .get("/connect")
    expect(res.statusCode).toEqual(404)
  })

  it('should return 403 if maximum streaming devices reached', async () => {
    const res = await request(app)
    .get("/connect/:gee")
    expect(res.statusCode).toEqual(403)
  })

  it('should return 200 if additional streaming device is added', async () => {
      const res = await request(app)
      .get("/connect/:mahlatsi")
      expect(res.statusCode).toEqual(200)
  })

  it('should return 201 if new streaming device is added', async () => {
    //generate new random username
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
  for ( let i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
   }

    const res = await request(app)
    .get("/connect/:"+result)
    expect(res.statusCode).toEqual(201)
})

});