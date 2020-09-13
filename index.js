// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    const updatedDriver = Object.assign({}, driver,{[key]: value})
    return updatedDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    const updatedDriver = Object.assign(driver, {[key]: value})
    return updatedDriver
}

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}