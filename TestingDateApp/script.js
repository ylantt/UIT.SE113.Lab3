let inputDay = document.querySelector('#day');
let inputMonth = document.querySelector('#month');
let inputYear = document.querySelector('#year');
let checkBtn = document.querySelector('#checkValid');
let numOfDays = document.querySelector('#NumberOfDays');
let result = document.querySelector('#Result');

function DaysInMonth(month, year){
    // let matchedDate = 0;
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
                return 29;
            else 
                return 28;
        default:
            return 0;
    }
}

function IsValidDate(day, month, year){
    if(month >= 1 && month < 12){
        if(day >= 1){
            if(day <= DaysInMonth(month, year))
                return true;
        } else
            return false;
    } else
        return false;
}

checkBtn.addEventListener('click', (event) =>{
    let sDay = inputDay.value;
    let sMonth = inputMonth.value;
    let sYear = inputYear.value;
    
    console.log(sDay, sMonth, sYear);
    console.log(typeof(sDay), typeof(sMonth), typeof(sYear));

    //Convert String into number
    let nDay = Number(sDay);
    let nMonth = Number(sMonth);
    let nYear = Number(sYear);

    console.log(nDay, nMonth, nYear);
    console.log(typeof(nDay), typeof(nMonth), typeof(nYear));

    numOfDays.innerText = DaysInMonth(nMonth, nYear);
    result.innerHTML = IsValidDate(nDay, nMonth, nYear);
})