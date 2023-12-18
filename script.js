const card = document.querySelector(".card");
const pCard = document.querySelector(".card p");
const bCard = document.querySelector(".card button");
card.addEventListener("mouseover", (e) =>{
  card.style.cursor = 'pointer';
  card.style.backdropFilter = 'blur(50px)';
  pCard.classList.add('pAktif');
  bCard.classList.add('bAktif');
  card.classList.add('filter');
});
card.addEventListener("mouseout", (e)=>{
  pCard.classList.remove('pAktif');
  bCard.classList.remove('bAktif');
  card.classList.remove('filter');
});
card.addEventListener("touchstart", (e) =>{
  card.style.cursor = 'pointer';
  card.style.backdropFilter = 'blur(50px)';
  pCard.classList.add('pAktif');
  bCard.classList.add('bAktif');
  card.classList.add('filter');
});
card.addEventListener("touchend", (e)=>{
  pCard.classList.remove('pAktif');
  bCard.classList.remove('bAktif');
  card.classList.remove('filter');
});
card.addEventListener("click", (e) =>{
  card.style.cursor = 'pointer';
  card.style.backdropFilter = 'blur(50px)';
  pCard.classList.add('pAktif');
  bCard.classList.add('bAktif');
  card.classList.add('filter');
});