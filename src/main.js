const reviewsTitles = document.querySelectorAll('.reviews .reviews-title');

reviewsTitles.forEach((elem) => {
    
    elem.addEventListener('click', () => {
        for (let i = 0; i < reviewsTitles.length; i++) {
            reviewsTitles[i].classList.remove('li_focus');
        }

        if (!elem.classList.contains('li_focus')) {
            elem.classList.add('li_focus');
        }
        
    });
});

const reviews = document.querySelectorAll('.review'),
row = document.querySelector('.reviews .row');

reviewsTitles.forEach((elem) => {
    elem.addEventListener('click', () => {
        row.classList.toggle('change-opacity');
        setTimeout(() => {
            reviews.forEach((review) => {
                review.parentNode.style.display = 'none';
                    if (elem.dataset.review === 'all') {
                        review.parentNode.style.display = '';
                    }
                    else if (elem.dataset.review === review.dataset.review) {
                        review.parentNode.style.display = '';
                    }
            });
            row.style.opaciity = '1';
            row.classList.toggle('change-opacity');
        }, 600);
        
    });
    
});

