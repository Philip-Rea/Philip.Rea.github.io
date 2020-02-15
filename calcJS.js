const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')

const action = key.dataset.action
const expression = document.querySelector('.expression')

keys.addEventListener('click', e => {
 if (e.target.matches('button')) {
    const key = e.target
    const keyContent = key.textContent
    const displayedNum = expression.textContent
   if(!action){
   		console.log("Number Key")
			if (displayedNum === '0') {
    		expression.textContent = keyContent
  		} else {
      expression.textContent = displayedNum + keyContent
      }
   }
   if (
  		action === 'add' ||
  		action === 'subtract' ||
  		action === 'multiply' ||
  		action === 'divide'
		) {
  	console.log('operator key!')
			}
	 }
})