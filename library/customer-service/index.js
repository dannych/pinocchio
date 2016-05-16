var moment = require('moment');
require('moment-weekday-calc');

module.exports = {
  isTodayWeekday: isTodayWeekday,
  isTodayWeekend: isTodayWeekend,
  getTodayCs: getTodayCs,
  getNextCs: getNextCs,
};

var startingDate = moment('2016-05-10 +0700', 'YYYY-MM-DD ZZ'),
    people = [
      'darwin.gautalius',
      'steven',
      'ahayamb',
      'rizaanjariputri',
      'timothykevin',
      'yclarista',
      'eckyputrady',
      'ariza.ramaditia',
      'aditya',
      'jonathancesario',
      'dannych',
      'sindunuragarp'
    ];
    
function isTodayFriday() {
  var day = moment('+0700','ZZ').local().isoWeekday(); 
  return day === 5;
}
     
function isTodayWeekend() {
  var day = moment('+0700','ZZ').local().isoWeekday(); 
  return day === 6 || day === 7;
}

function isTodayWeekday() {
  return !isTodayWeekend();
}
     
function getTodayCs() {
  var diff = getDiffFromNow(startingDate),
    personInCharge = people[diff % people.length];  
  return personInCharge;      
}

function getNextCs() {
  var diff = getDiffFromNow(startingDate) + 1,
    personInCharge = people[diff % people.length];  
  return personInCharge;      
}

function getDiffFromNow(end) {
  return moment().isoWeekdayCalc({  
    rangeEnd: end,  
    weekdays: [1,2,3,4,5],  
    // exclusions: ['6 Apr 2015','7 Apr 2015'],
    // inclusions: ['10 Apr 2015']
  }) - 1;
}