export default {
  removeBackground() {
    document.querySelector('main').classList.add('clean-background');
  },
  addBackground() {
    document.querySelector('main').classList.remove('clean-background');
  },
  getTimeLeft() {
    // as count form 0 add a month and day less
    const weddingDate = new Date("2021", "03", "28" , "16", "22", "30"); 
    const actualTime = new Date();
 
    const daysLeft = Math.round(( weddingDate - actualTime) / (1000 * 60 * 60 * 24));
    const hoursNow = actualTime.getHours();
    const hoursThen = weddingDate.getHours();
    const hoursLeft = () => {
      return hoursNow > hoursThen ? (24 - hoursNow) + hoursThen : hoursThen - hoursNow;   
    }
    const minutesNow = actualTime.getMinutes();
    const minutesThen = weddingDate.getMinutes();
    const minutesLeft = () => {
      return minutesNow > minutesThen ? (59 - minutesNow) + minutesThen : minutesThen - minutesNow;   
    }
    const secondsNow = actualTime.getSeconds();
    const secondsThen = weddingDate.getSeconds();
    const secondsLeft = () => {
      return secondsNow > secondsThen ? (59 - secondsNow) + secondsThen : secondsThen - secondsNow;    
    }
    return {
      daysLeft, hoursLeft, minutesLeft, secondsLeft,
    }
  }
}
