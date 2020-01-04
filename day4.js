
let i = 100000;
let pmatch = 0;
let date1 = new Date();
let endNumber

/*

const myVar = 1234;
String(myVar).charAt(1)
//"2"
parseInt(String(myVar).charAt(1))
//2

*/

for (i=100000; i>500001; i++) {

    let i1 = i.toString().charAt(0)
    let i2 = i.toString().charAt(1)
    let i3 = i.toString().charAt(2)
    let i4 = i.toString().charAt(3)
    let i5 = i.toString().charAt(4)
    let i6 = i.toString().charAt(5)
    
    endNumber = i1 + i2 + i3 + i4 + i5 + i6

}



if (i == 500000) {
    date2 = new Date();

     if (date2 < date1) {
        date2.setDate(date2.getDate() + 1);
    }
    
    var diff = date2 - date1;

    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    


console.log('Hours: ' + hh + ' Mins: '+ mm + ' Secs: ' + ss);
console.log(endNumber);


}