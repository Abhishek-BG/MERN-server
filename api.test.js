//api.test.js
const fetchData = require('./test/api');

test('GET /users api data',async()=>{
    const data = await fetchData();
    // console.log(data);
    expect(data).toHaveProperty('getAllUsers');
    //test if all data has 4 pars 
    data.getAllUsers.forEach(user=>{
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('name');
        expect(user).toHaveProperty('email');
    })
})