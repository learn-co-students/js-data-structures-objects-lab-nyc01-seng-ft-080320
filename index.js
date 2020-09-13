// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, bob, value){
    let newDriver = Object.assign({}, driver, {[bob]: value})
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, bob, value){
    driver[bob] = value;
    return driver
}

function deleteFromDriverByKey(driver, key){
    let newDriver= Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}
function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver
}