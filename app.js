const navAppear = function(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', function(){
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        
    });
    
}
navAppear();

let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#prevBtn'),
    arrowRight = document.querySelector('#nextBtn'),
    count = 0;

    function reset(){
        for(let i = 0; i < sliderImages.length; i++){   
            sliderImages[i].style.display = 'none';
        }
    }

    function startSlide(){
        reset();
        sliderImages[0].style.display = 'block';
    }

    function slideLeft(){
        reset();
        sliderImages[count - 1].style.display = 'block';
        count--;
    }

    arrowLeft.addEventListener('click', function(){
        if(count === 0){
            count = sliderImages.length;
        }
        slideLeft();
    });

    function slideRight(){
        reset();
        sliderImages[count + 1].style.display = 'block';
        count++;
    }

    arrowRight.addEventListener('click', function(){
        if(count === sliderImages.length - 1){
            count = -1;
        }
        slideRight();
    });

    startSlide();

