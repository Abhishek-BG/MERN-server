// mongodb.test.js
const mongoose = require('mongoose');

describe('MongoDB Connection', () => {

  beforeAll(async () => {
    const url= 'mongodb+srv://abhishekbasvrajgowda:qeMg9gg8zIq3WU3K@cluster0.ykctmzw.mongodb.net/';

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  
  test('should connect to MongoDB successfully', () => {
    expect(mongoose.connection.readyState).toBe(1);
  });
});
