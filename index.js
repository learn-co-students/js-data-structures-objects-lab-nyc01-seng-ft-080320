// Write your solution in this file!
let driver={};
driver['name'] = "sam";
driver['age'] = "25";

function updateDriverWithKeyAndValue(driver, key, value){
    let newdriver = {...driver};
    newdriver[key]= value;
    return newdriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key]=value;

    return driver;
}

function deleteFromDriverByKey(driver, key){
    let newdriver = {...driver};
    delete newdriver[key];
    return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}
deleteFromDriverByKey(driver,"age");