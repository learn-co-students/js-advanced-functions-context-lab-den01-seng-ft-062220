/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = (employee) => {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  };
};

const createEmployeeRecords = (employees) => {
  return employees.map(createEmployeeRecord);
};

const createPunch = (type) => {
  return (dateTime) => {
    const [date, hour] = dateTime.split(' ');

    return {
      type: type,
      date: date,
      hour: +hour
    };
  };
};

const createTimeInEvent = function(dateTime) {
  const punch = createPunch('TimeIn')(dateTime);

  this.timeInEvents.push(punch);

  return this;
};

const createTimeOutEvent = function(dateTime) {
  const punch = createPunch('TimeOut')(dateTime);

  this.timeOutEvents.push(punch);

  return this;
};

const hoursWorkedOnDate = function(date) {
  const timeIn = this.timeInEvents.find(punch => punch.date === date).hour;
  const timeOut = this.timeOutEvents.find(punch => punch.date === date).hour;

  return (timeOut - timeIn) / 100;
};

const wagesEarnedOnDate = function(date) {
  return this.payPerHour * hoursWorkedOnDate.call(this, date);
};

const calculatePayroll = function(employees) {
  return employees.reduce((sum, employee) => sum + allWagesFor.call(employee), 0);
};

const findEmployeeByFirstName = (employees, firstName) => {
  return employees.find(employee => employee.firstName === firstName);
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
};