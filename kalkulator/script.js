class Calculator {
    constructor() {
      console.log('Calculator initiated');
      this.currentResult = 0;
      this.sign = '';
      this.pickedNumber = null;
      document.getElementById('screen').innerText = '';
    }
  
    changeCurrentResult = () => {
      if (!this.pickedNumber) {
        return;
      }
      switch (this.sign) {
        case '%':
          this.currentResult = this.currentResult / 100;
          break;
        case '+':
          this.currentResult += this.pickedNumber;
          break;
        case '-':
          this.currentResult -= this.pickedNumber;
          break;
        case 'x':
          this.currentResult = this.currentResult * this.pickedNumber;
          break;
        case '/':
          this.currentResult /= this.pickedNumber;
          break;
        default:
          this.currentResult += this.pickedNumber;
          break;
      }
    }
  
    writeNumber = (event) => {
      const newNumber = event.target.innerText
      let screenText = document.getElementById('screen').innerText;
      if (screenText === '' || screenText === '0') {
        document.getElementById('screen').innerText = newNumber;
      } else {
        document.getElementById('screen').innerText = screenText + newNumber;
      }
      this.pickedNumber = parseFloat(document.getElementById('screen').innerText);
    }
  
    writeDot = () => {
      let screenText = document.getElementById('screen').innerText;
      if (screenText === '' || screenText === '0') {
        document.getElementById('screen').innerText = '0.';
      } else {
        document.getElementById('screen').innerText = screenText + '.';
      }
    }
  
    changeSign = (event) => {
      if (!this.pickedNumber) {
        return;
      }
      document.getElementById('screen').innerText = '';
      this.changeCurrentResult();
      this.sign = event.target.innerText;
    }
    
    deleteNumber = () => {
      let screenText = document.getElementById('screen').innerText;
      screenText = screenText.slice(0, -1);
      document.getElementById('screen').innerText = screenText;
      this.pickedNumber = parseFloat(screenText);
    }
    
    returnResult = () => {
      this.changeCurrentResult();
      document.getElementById('screen').innerText = this.currentResult;
      this.currentResult = 0;
      this.sign = '';
      this.pickedNumber = null;
    }
  }
  
  const newCalculator = new Calculator();
  
  const deleteButton = document.getElementById('delete');
  const dotButton = document.getElementById('dot');
  const returnButton = document.getElementById('return');
  
  deleteButton.addEventListener('click', newCalculator.deleteNumber);
  dotButton.addEventListener('click', newCalculator.writeDot);
  returnButton.addEventListener('click', newCalculator.returnResult);

  document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', event => {
      newCalculator.writeNumber(event);
    });
  });
  document.querySelectorAll('.sign').forEach(sign => {
    sign.addEventListener('click', event => {
      newCalculator.changeSign(event);
    });
  });
  