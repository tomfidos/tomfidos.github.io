class Calculator {
  constructor() {
    console.log("Calculator initiated")
    this.currentResult = 0
    this.sign = ""
    this.pickedNumber = null
    document.getElementById("screen").innerText = ""
  }

  changeCurrentResult = () => {
    if (!this.pickedNumber) {
      console.log("nie ma wytypowanej")
      // wtedy
      this.pickedNumber = this.currentResult
      console.log("picked number " + this.pickedNumber)
      console.log("current nimber " + this.currentResult)
    }
    switch (this.sign) {
      case "%":
        this.currentResult = this.currentResult / 100
        break
      case "+":
        this.currentResult += this.pickedNumber
        break
      case "-":
        this.currentResult -= this.pickedNumber
        break
      case "x":
        this.currentResult = this.currentResult * this.pickedNumber
        break
      case "/":
        this.currentResult /= this.pickedNumber
        break
      default:
        this.currentResult += this.pickedNumber
        break
    }
  }

  

  writeNumber = (event) => {
    const newNumber = event.target.innerText
    let screenText = document.getElementById("screen").innerText
    if (screenText === "" || screenText === "0") {
      document.getElementById("screen").innerText = newNumber
    } else {
      document.getElementById("screen").innerText = document.getElementById("screen").innerText + newNumber
    }
    this.pickedNumber = parseFloat(document.getElementById("screen").innerText)
  }

  writeDot = () => {
    let screenText = document.getElementById("screen").innerText
    if (screenText === "" || screenText === "0") {
      document.getElementById("screen").innerText = "0."
    } else {
      document.getElementById("screen").innerText = document.getElementById("screen").innerText + "."
    }
  }

  changeSign = (event) => {
    // tu zmieniłam zewby mozna było pisac coś od razu po wyniku
    if (this.pickedNumber === null) {
      console.log(null)

      this.pickedNumber = +document.getElementById("screen").innerText
      this.changeCurrentResult()
      this.sign = event.target.innerText
      document.getElementById("screen").innerText = ""

      return
    }
    console.log("picked number " + this.pickedNumber)
    console.log("current nimber " + this.currentResult)

    this.changeCurrentResult()
    this.sign = event.target.innerText
    document.getElementById("screen").innerText = ""
    console.log(this.sign)
  }

  deleteNumber = () => {
    let screenText = document.getElementById("screen").innerText
    screenText = screenText.slice(0, -1)
    document.getElementById("screen").innerText = screenText
    this.pickedNumber = parseFloat(screenText)
  }

  returnResult = () => {
    console.log("rówma się")
    console.log(this.pickedNumber)
    console.log(this.currentResult)
    this.changeCurrentResult()
    document.getElementById("screen").innerText = this.currentResult
    this.currentResult = 0
    this.sign = ""
    this.pickedNumber = null
  }
}

const newCalculator = new Calculator()

const deleteButton = document.getElementById("delete")
const percentButton = document.getElementById("percent")
const plusButton = document.getElementById("plus")
const sevenButton = document.getElementById("seven")
const eightButton = document.getElementById("eight")
const nineButton = document.getElementById("nine")
const minusButton = document.getElementById("minus")
const fourButton = document.getElementById("four")
const fiveButton = document.getElementById("five")
const sixButton = document.getElementById("six")
const multiplicationButton = document.getElementById("multi")
const oneButton = document.getElementById("one")
const twoButton = document.getElementById("two")
const threeButton = document.getElementById("three")
const divideButton = document.getElementById("division")
const zeroButton = document.getElementById("zero")
const dotButton = document.getElementById("dot")
const returnButton = document.getElementById("return")

deleteButton.addEventListener("click", newCalculator.deleteNumber)
percentButton.addEventListener("click", newCalculator.changeSign)
plusButton.addEventListener("click", newCalculator.changeSign)
sevenButton.addEventListener("click", newCalculator.writeNumber)
eightButton.addEventListener("click", newCalculator.writeNumber)
nineButton.addEventListener("click", newCalculator.writeNumber)
minusButton.addEventListener("click", newCalculator.changeSign)
fourButton.addEventListener("click", newCalculator.writeNumber)
fiveButton.addEventListener("click", newCalculator.writeNumber)
sixButton.addEventListener("click", newCalculator.writeNumber)
multiplicationButton.addEventListener("click", newCalculator.changeSign)
oneButton.addEventListener("click", newCalculator.writeNumber)
twoButton.addEventListener("click", newCalculator.writeNumber)
threeButton.addEventListener("click", newCalculator.writeNumber)
divideButton.addEventListener("click", newCalculator.changeSign)
zeroButton.addEventListener("click", newCalculator.writeNumber)
dotButton.addEventListener("click", newCalculator.writeDot)
returnButton.addEventListener("click", newCalculator.returnResult)
