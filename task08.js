function timeConveter(number){
    var hours = parseInt(number / 60); // converts floats to integers
    var minutes = number % 60; 
    if ( hours > 1 && minutes > 1) {
        console.log( hours + "hours" + " : " + minutes + " minutes");
        } else if ( hours <= 1 && minutes <= 1){
            console.log( hours + " hour" + " : " + minutes + " minute");
        } else if ( hours > 1 && minutes <= 1) {
            console.log( hours + " hours" + " : " + minutes + " minute");
        } else {
            console.log( hours + " hour" + " : " + minutes + " minutes");
        }
        
}
timeConveter(120)
