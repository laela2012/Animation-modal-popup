const openBtn = document.querySelector('button');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');

// OPEN MODAL
openBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'grid';
}

// CLOSE MODAL INSIDE THE FORM BY BUTTON "X"
closeBtn.addEventListener('click', closeModal);

function closeModal(){
    
    modal.classList.add('close-modal-animation');
    setTimeout(() => {
        modal.style.display = 'none';
        window.location.reload();
    }, 500);
}

// CLOSE MODAL ANYWHERE OUTSIDE THE FORM
modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})

// THANKYOU MESSAGE AFTER SUBSCRIPTION
form.addEventListener('submit', submitForm);

function submitForm(){
    const card = document.querySelector('.card');
    card.innerHTML = "<h1>Thanks for your Subscription!</h1>";
    setTimeout(() => {
        closeModal();
    }, 3000);

}