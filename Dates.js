
// let d = new Date(year,month,day,Hours,minutes,seconds,ms);
// let d = new Date();
// get time
// console.log(d.getFullYear())
// console.log(d.getMonth());
// console.log(d.getDate())
// console.log(d.getHours());
// console.log(d.getMinutes())
// console.log(d.getSeconds())
// console.log(d.getMilliseconds())


// set time

// d.setFullYear(2024)
// d.setMonth(9)
// d.setDate(20)
// d.setHours(11);
// d.setMinutes(30)
// d.setSeconds(20)

// console.log(d)


// 

// let GetDay = Intl.DateTimeFormat(("ur-PK"),{weekday:"long"}).format(d)
// console.log(GetDay)

// let MyBirthYear = 2001;

// let CalculateYears = d.getFullYear() - MyBirthYear;
// console.log(CalculateYears)



// let CalculateAfterFiftyDays = d.setDate(d.getDate()+50);
// let store  = d;
// let getDay = Intl.DateTimeFormat(("en-US"),{weekday:"long"}).format(store)
// console.log(getDay)


let d = new Date(2024,3,20,12,44,30,60);
console.log(d.getHours())