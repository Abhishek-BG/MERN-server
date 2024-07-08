const request = require('supertest');
const app = require('./index'); // Adjust the path as per your project structure

describe('GET /users', () => {
  test('it should fetch all users from an API', async () => {
    const response = await request(app)
      .get('/users')
      .expect(200);

    expect(response.body).toBeDefined();
    const data = response.body;
    console.log(data)
    expect(Array.isArray(response.body)).toBe(false);
    data.data.getAllUsers.forEach(user => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('password');
      });
  });
});
