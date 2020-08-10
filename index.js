/* Your Code Here */
const createEmployeeRecord = (array) => {
    let employeeRecord = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord;
}

const createEmployeeRecords = (arrayOfArrays) => {
    return arrayOfArrays.map((array) => {
        return createEmployeeRecord(array)
    });
}

const createTimeInEvent = function(date){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    });
    return this;
}

const createTimeOutEvent = function(date){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(date.split(' ')[1]),
        date: date.split(' ')[0]
    });
    return this
}

const hoursWorkedOnDate = function(date){
    const timeInObject = this.timeInEvents.find(element => element.date == date);
    const timeOutObject = this.timeOutEvents.find(element => element.date == date);
    return (timeOutObject.hour - timeInObject.hour) / 100;
}

const wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(element => element.firstName == firstName)
}

const calculatePayroll = function(array){
    return array.reduce(function(wage, employee){
        return wage + allWagesFor.call(employee)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}