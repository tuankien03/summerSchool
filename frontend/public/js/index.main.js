const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener('change', function (e) {
    if (this.checked) {
        document.querySelector('body').classList.add('dark')
        localStorage.setItem('darkMode', true);
    } else {
        document.querySelector('body').classList.remove('dark')
        localStorage.removeItem('darkMode');

    }
})

if (localStorage.getItem('darkMode')) {
    document.body.classList.add('dark');
    themeToggle.checked = true;
}



let startX = 0; // Initial position
let scrollLeft;

const secondMenu = document.querySelector('.second-menu');

secondMenu.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = secondMenu.scrollLeft;
});

secondMenu.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (x - startX);
    secondMenu.scrollLeft = scrollLeft - walk;
});

let startY;
let dropdown_navs = document.querySelectorAll('.dropdown-nav');

dropdown_navs.forEach(function (el) {
    el.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        secondMenu.style.overflow = 'hidden'; // Disable scrolling on .second-menu
    });

    el.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const change = startY - touch.clientY;

        el.scrollTop += change;
        startY = touch.clientY;

        e.preventDefault();
    });

    el.addEventListener('touchend', () => {
        secondMenu.style.overflow = 'auto'; // Enable scrolling on .second-menu
    });
});

if (document.querySelector('.slider')) {
    new Splide('.slider', {
        type: 'slide',
        perPage: 1,
    }).mount();
}

if (document.querySelector('.movies-by-category')) {
    var imageForCategory = 192;
    if (window.innerWidth < 576) {
        imageForCategory = 136;
    } else if (window.innerWidth < 996) {
        imageForCategory = 160;
    }

    var categories_el = []
    document.querySelectorAll('.movies-by-category').forEach(function (el) {
        categories_el.push(new Splide(el, {
            type: 'slide',
            perPage: Math.floor((el.offsetWidth) / imageForCategory),
            pagination: false,
            perMove: 1,
            gap: 10,
        }).mount());
    });


    window.addEventListener('resize', function () {

        var width = window.innerWidth;
        var imageSize = 192;
        if (width < 576) {
            imageSize = 136;
        } else if (width < 996) {
            imageSize = 160;
        }
        var perpage = Math.floor((width - 85) / imageSize);
        categories_el.forEach(function (el) {
            console.log(el);
            el.options.perPage = perpage;
        })
    });
}
const containerTitleList = document.querySelectorAll('.movies-container__title .movies-container__title-list .list-item');
const containerList = document.querySelectorAll('.movies-container__table .movies-container__table-content');

containerTitleList.forEach(function (el, index) {
    function handleClickOrTouch(event) {
        event.preventDefault();
        console.log(event);
        event.innerHTML = 'clicked';
        containerTitleList.forEach(function (element) {
            element.classList.remove('active');
            console.log('touched');
        });
        containerList.forEach(function (element) {
            element.classList.remove('show');
        });
        el.classList.add('active');
        containerList[index].classList.add('show');
    }
    el.addEventListener('touchstart', handleClickOrTouch);
    el.addEventListener('click', handleClickOrTouch);
});

const showMoreInfo = document.querySelectorAll('.time-pubnish .show-more-infor');
const moreMovieDetail = document.querySelector('.moreinfo-detail');
showMoreInfo.forEach(function (el, index) {
    el.addEventListener('click', function (e) {
        if(index ===0) {
            showMoreInfo[1].classList.add('show');
            el.classList.remove('show');
            moreMovieDetail.classList.add('show');
        } else {
            showMoreInfo[0].classList.add('show');
            el.classList.remove('show');
            moreMovieDetail.classList.remove('show');
        }
    });
});

if(document.querySelector('.link-option-list__item')) {
    const server_list = document.querySelector('.link-option-list__item');
    const videoplayer = document.querySelector('.videoplayer');
    const iframe = document.querySelector('.videoplayer iframe');
    videoplayer.addEventListener('click', () => {
        videoplayer.style.cursor = 'none';
        iframe.style.display = 'block';
    });

    server_list.addEventListener('click', () => {
        iframe.style.display = 'block';
    });
}

// Toggle dark mode



const footer = document.querySelector('.footer')

window.onload = function () {
    footer.style.display = 'block';
};