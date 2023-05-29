class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null; 
  }

  start(printTimeCallback) {
    if (typeof printTimeCallback === 'function' ) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        printTimeCallback(this.currentTime);
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime++;
      }, 1000);

     }
    }
    
  

  getMinutes() {
    return Math.floor (this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60;
    
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0');
  }

  stop() {
    clearInterval(this.interalId);
    this.intervalId = null;
  }

  reset() {
   this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
