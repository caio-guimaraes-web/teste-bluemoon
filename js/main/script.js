/* SCRIPT PARA RETORNAR DADOS DA API DA NASA */
function initNasaDataApi() {
  const doc = fetch(
    'https://api.nasa.gov/planetary/apod?api_key=fImyxjyUmC8jvKsxEgJ7lxtfgma8aGyqrfBC8NDc',
  );

  const title = document.getElementById('js-title-return');
  const explanation = document.getElementById('js-p-return');
  const image = document.getElementById('js-img-return');
  const author = document.getElementById('js-p-author');
  /* console.log(title);
  console.log(explanation);
  console.log(image); */

  doc.then((r) => {
    r.json().then((body) => {
      //console.log(body);
      title.innerText = body.title;
      explanation.innerText = body.explanation;
      image.src = body.url;
      author.innerText = body.copyright;
    });
  });
}
initNasaDataApi();

/* SCRIPT PARA PREVENIR ENVIO DO FORMULÁRIO 
AO CLIQUE NO BOTÃO SUBMIT */
function inputSubmitHandle() {
  const inputSubmit = document.getElementById('input-submit');

  inputSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    alert(
      'Parabéns, você já garantiu seu e-book gratuito. Cheque seu e-mail.(dados seriam enviados para a base)',
    );
  });
}
inputSubmitHandle();

/* SCRIPT PARA ATIVAR ANIMAÇÕES DE OPACIDADE
DEPOIS DO LOAD DA PÁGINA */
function animatingEntrance() {
  const titleAnime = document.getElementById('js-h-animate');
  const imgAnime = document.getElementById('js-i-animate');
  //const formAnime = document.getElementById('js-form');

  window.onload = function () {
    titleAnime.className += ' animation-opacity';
    imgAnime.className += ' animation-opacity-2';
    //formAnime.className += ' animation-opacity-3';
  };
}
animatingEntrance();
