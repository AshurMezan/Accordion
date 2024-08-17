const btns = document.querySelectorAll('.accordion');

btns.forEach(function(btn){
    btn.addEventListener('click', function() {
        btn.classList.toggle('active');
        const contentBlock = btn.nextElementSibling;
        
        if(btn.classList.contains('active')) {
            contentBlock.style.maxHeight = contentBlock.scrollHeight + 'px';
        } else {
            contentBlock.style.maxHeight = 0;
        }
        
    })
});