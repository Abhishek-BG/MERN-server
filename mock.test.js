//mock.test.js

//mock getData and Process the Mocked Data
//mock module 
//('module Url',function)
jest.mock('./test/utils',()=>(
    {
        getData:jest.fn(),
        getRaw:jest.fn()
    }
))
const {getData,getRaw} = require('./test/utils');
const {processData,processRaw} = require('./test/processData');
//mockReturnValue ->
test('Mocked the Process data',()=>{
    //mock the return value of getData
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed:Mocked Data');
});
test('Mocked Raw Data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})
