// UI
const currencyoneel = document.getElementById('currency-one'),
	  amountoneel = document.getElementById('amount-one');

const currencytwoel = document.getElementById('currency-two'),
	  amounttwoel = document.getElementById('amount-two');

const swapel = document.getElementById('swap'),
	  rateel = document.getElementById('rate');


function calculate(){
	// console.log('hay');

	const crcyone = currencyoneel.value;
	const crcytwo = currencytwoel.value;

	// const amtone = amountoneel.value;
	// const amttwo = amounttwoel.value;

	const apikey = "7249d2fce339b7574e32c3ef";

	const uri = `https://v6.exchangerate-api.com/v6/${apikey}/latest/${crcyone}`;
	console.log(uri);

	// AJAX Request

	fetch(uri)
	.then(res=>res.json())
	.then(req=>{
		// console.log(data);

		// console.log(data.conversion_rates);
		// console.lo(typeof data.conversion_rates);
		// console.log(data.conversion_rates.USD);

		const rate = req.conversion_rates[crcytwo];
		// console.log(rate);

		rateel.innerHTML = `1 ${crcyone} = ${rate} ${crcytwo}`;

		amounttwoel.value = (amountoneel.value * rate).toFixed(2);
	});
	
}
// 

// Event Listener
currencyoneel.addEventListener('change',calculate);
amountoneel.addEventListener('input',calculate);

currencytwoel.addEventListener('change',calculate);
amounttwoel.addEventListener('input',calculate);

swapel.addEventListener('click',()=>{
	// console.log('already swap');

	const temp = currencyoneel.value;

	currencyoneel.value = currencytwoel.value;
	currencytwoel.value = temp;

	calculate();
});


