function timeConverter(number) {
  const hour = Math.floor(number / 60);
  const minute = number % 60;
  if (hour === 1 && minute !== 1) {
    console.log(`${hour} hour , ${minute} minutes`);
  } else if (hour === 1 && minute === 1) {
    console.log(`${hour} hour, ${minute} minute`);
  } else if (hour !== 1 && minute === 1) {
    console.log(`${hour} hours , ${minute} minute`);
  } else {
    console.log(`${hour} hours , ${minute} minutes`);
  }
}
timeConverter(60);
