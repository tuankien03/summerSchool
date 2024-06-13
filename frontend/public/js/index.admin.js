const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)')

console.log(sideLinks)

const dashboardContent = document.querySelectorAll('.dashboard-content');
console.log(dashboardContent);



sideLinks.forEach((item, index) => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        dashboardContent.forEach(i => {
            i.classList.remove('show');
        })
        li.classList.add('active');
        dashboardContent[index].classList.add('show');

    })
});

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');


menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close')
});



const searchBtn = document.querySelector('.content nav form .form-input button');
const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function (e) {
    if(window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})

window.addEventListener('resize' , () => {
    if (innerWidth < 768) {
        sideBar.classList.add('close');
    } else {
        sideBar.classList.remove('close');
    }
    if (innerWidth > 576 && searchBtnIcon.classList.contains('bx-x')) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search')
    } else {
        searchBtnIcon.classList.replace( 'bx-search' ,'bx-x')
    }
})
const themeToggle = document.querySelector('.content nav #theme-toggle');

themeToggle.addEventListener('change', function (e) {
    e.preventDefault();
    if(this.checked == true) {
        document.querySelector('body').classList.add('dark')
    } else {
        document.querySelector('body').classList.remove('dark')
    }
})

const readBtn = document.querySelectorAll('.content .read .bx');
const articleSub = document.querySelectorAll('.article-sub');

readBtn.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('bx-x')) {
            item.classList.replace('bx-x', 'bx-spreadsheet')
        } else {
            item.classList.replace('bx-spreadsheet', 'bx-x')
        }
        articleSub[index].classList.toggle('show');
    })
})