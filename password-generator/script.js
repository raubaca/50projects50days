const resultEl = document.getElementById('result');

const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Char type functions
const getRandomLower = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 97);

const getRandomUpper = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 65);

const getRandomNumber = () =>
  String.fromCharCode(Math.floor(Math.random() * 10) + 48);

const getRandomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFn = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate password
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  );
});

const generatePassword = (upper, lower, number, symbol, length) => {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;

  if (typesCount === 0) return '';

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const fnName = Object.keys(type)[0];
      generatedPassword += randomFn[fnName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
};

// Copy password
clipboardEl.addEventListener('click', async () => {
  await navigator.clipboard.writeText(resultEl.innerText);
});
