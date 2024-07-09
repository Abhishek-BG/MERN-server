let dataSets=[];
//execute my env before all 
beforeAll(()=>{
    console.log('Before all Setup is called');
    dataSets=['raju','ram'];
})
beforeEach(()=>{
    console.log('Before Each Setup is called');
})
afterEach(()=>{
    console.log('AFter Each Setup is called');
})
afterAll(()=>{
    dataSets=[];
})
test('Test Case ',()=>{
    expect(dataSets.length).toBe(2);
})
test('Data set contains ',()=>{
    expect(dataSets).toContain('ram');
})
test('Data set contains ',()=>{
    expect(dataSets).toContain('raju');
})

//npm install --save-dev @testing-library/react
// @testing-library/jest-dom 

