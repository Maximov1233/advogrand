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
reviewsList = document.querySelector('.reviews .row');

reviewsTitles.forEach((elem) => {
    elem.addEventListener('click', () => {
        reviewsList.classList.toggle('change-opacity');
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
            reviewsList.classList.toggle('change-opacity');
        }, 600);
        
    });
});

const hamburger = document.querySelector('.second-header__hamburger'),
header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    
    if (!hamburger.classList.contains('open')) {
        header.style.top = '0';
        hamburger.classList.toggle('open');
    }
    else {
        header.style.top = '-2000px';
        hamburger.classList.toggle('open');
    }
    
});

