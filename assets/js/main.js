const selectBtn = document.getElementById('select-btn');
const text = document.getElementById('text');
const options = document.querySelectorAll('.option');

selectBtn.addEventListener('click', function() {
    selectBtn.classList.toggle('active');    
});

options.forEach(option => {
    option.addEventListener('click', function(){
        text.innerHTML = this.textContent;
        selectBtn.classList.remove('active');
    });
});