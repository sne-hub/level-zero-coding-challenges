function timeConveter(number){
    let hour = Math.floor(number /60);
    let minute = number % 60;
    if(hour === 1 && minute !== 1){
        console.log(hour + 'hour' + ' : ' + minute + 'minutes' )
    }else if(hour === 1 && minute === 1){
        console.log( hour + 'hour' + ' : '+ minute + 'minute')
    }else if(hour !==1 && minute ===1){
        console.log(hour + 'hours' + ' : ' + minute + 'minute')
    }else{
        console.log(hour + 'hours' + ' : ' + minute + 'minutes')

    }  
}
timeConveter(60);
