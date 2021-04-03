// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver,key,value) {
	driver = { ...driver, ...{[key]:value}};
	return driver;
	}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
	driver[key] = value;
	return driver;
	}

function deleteFromDriverByKey(driver,key) {
	const newDriver = {...driver};
	delete newDriver[key];
	return newDriver;
	}

function destructivelyDeleteFromDriverByKey(driver,key) {
	delete driver[key];
	return driver;
	}
