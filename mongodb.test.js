const mongoose = require('mongoose')

describe('MongoDB connection',()=>{
    beforeAll(async ()=>{
        const url= 'mongodb+srv://abhishekbasvrajgowda:qeMg9gg8zIq3WU3K@cluster0.ykctmzw.mongodb.net/';
        await mongoose.connect(url);
    });
    //call test case inside describe and below before all
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
});