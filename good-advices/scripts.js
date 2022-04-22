const ADVICE_URL_API = 'https://api.adviceslip.com/advice';

const getAdvice = async () => {
  const response = await fetch(ADVICE_URL_API);
  const { slip } = await response.json();
  return slip.advice;
};


const randomAdvice = async () => {
  const adviceApi = await getAdvice();
  
  const randomAdvice = document.querySelector('p');
  randomAdvice.innerText = adviceApi;
}

window.onload = function() { 
  const randomAdvice = document.querySelector('p');
  randomAdvice.innerText = 'Clique no Botão e receba um conselho';
};
