//Ex-01

function reverseStr(str) {
    var charsList = str.split('');
    var reverseCharList = charsList.reverse();
    var reversedStr = reverseCharList.join(''); //splitting , reversing, joining a passsed srting
    return reversedStr;
}


//Ex-02


function isPalindrome(str) {
    var reverse = reverseStr(str); //checking palindrome
    return str === reverse; //just returns true if both are equal
}



//Ex-03

function dateToString(date) {

    var dateStr = {
        day: '',
        month: '',
        year: ''
    };
    if (date.day < 10) {
        dateStr.day = '0' + date.day; //no need to convert as add up string with number gives a STRING 
    } else {
        dateStr.day = date.day.toString(); //changing the date from number to string  
    }


    if (date.month < 10) { //helper-function
        dateStr.month = '0' + date.month;
    } else {
        dateStr.month = date.month.toString();
    }


    dateStr.year = date.year.toString();
    return dateStr;
}

//Ex-04

function allDateFormats(date) {
    var dateStr = dateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;


    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]; //returning the above all date formats into an Array form
}



//Ex-05

function checkPalindromeForAllFormats(date) {

    var palindromeList = allDateFormats(date); //get all palindrome format stringy dates

    var flag = false;

    for (var i = 0; i < palindromeList.length; i++) {
        if (isPalindrome(palindromeList[i])) {
            flag = true;
            break;

        }
    }
    return flag;
}



//Ex-06

//number of days to a palindrome date


function isLeapYear(year) {
    if (year % 400 === 0) {
        return false;
    }
    if (year % 100 === 0) {
        return false;
    }
    if (year % 4 === 0) {
        return true;
    }
    return false;
}

function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (month === 2) { //check for only february
        if (isLeapYear(year)) {
            if (day > 29) { //check for  leap-year
                day = 1;
                month++;
            }
        } else {
            if (day > 28) {
                day = 1;
                month++;
            }
        }
    } else {

        //check if day exceeds no of days in remaining 11 months
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month++;
        }
    }
    if (month > 12) { //if month is greater than 12, then year gets incremented. 
        month = 1;
        year++;
    }
    return {
        day: day,
        month: month,
        year: year
    }
}



function getNextPalindromeDate(date) {
    var count = 0;
    var nextDate = getNextDate(date);

    while (1) { //first-case(date)
        count++;
        var isPalindrome = checkPalindromeForAllFormats(nextDate);
        if (isPalindrome) {
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [count, nextDate];
}


var dateEntry = document.querySelector("#birthday");
var showButton = document.querySelector("#show-button");
var resultRef = document.querySelector("#message");


function clickHandler() {
    var dob = dateEntry.value;

    if (dob !== '') {

        var listOfDate = dob.split('-');
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        }
        var isPalindrome = checkPalindromeForAllFormats(date);
        if (isPalindrome) {
            resultRef.innerText = " Great! that is a unique palindrome! ";
        } else {
            var [count, nextDate] = getNextPalindromeDate(date);
            resultRef.innerText = ` Sorry! The next palindrome is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${count} days😐`;
        }

    }
}




showButton.addEventListener("click", clickHandler);