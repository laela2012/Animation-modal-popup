const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');

// OPEN MODAL
openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'grid';
}

// CLOSE MODAL INSIDE THE FORM BY BUTTON "X"
closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display = 'none';
}

// CLOSE MODAL ANYWHERE OUTSIDE THE FORM
modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})