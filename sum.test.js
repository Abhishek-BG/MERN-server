//test cases for our unit fun sum
const sum = require('./test/sum')

//jest test cases
//test function to test
test('fun should return 3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe()->exactly equal 
    //expect()->to ex our unit 
})
//run 'npm test' under server folder
test('Object in array',()=>{
    const data ={one:1}
    data['two']=6;
    expect(data).toEqual({one:1, two:6});
})

//toBeNull -> if the recived value is NULL 
test('Value is Null',()=>{
    const n=null;
    expect(n).toBeNull();
})
//toBeDefined -> if a value/variable is defined or not 
test('Url is Defined',()=>{
    const url ='sdysdhsd@mongodburl';
    expect(url).toBeDefined();
})
//teBeTruthy -> received value should be truth
test('Value is True',()=>{
    const bool = true
    expect(bool).toBeTruthy();
})
//toBeFalsy 
test('Value is false',()=>{
    const bool = false
    expect(bool).toBeFalsy();
})