const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');

// OPEN MODAL
openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'grid';
}

// CLOSE MODAL
closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}