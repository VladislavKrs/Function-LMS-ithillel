const mainPage = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > div');
let elementsOfAllLessons = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > app-lessons-timeline > ul > li:nth-child(38) > span').innerHTML;
let passedLessons = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--left > app-lessons-list > nav > app-lessons-timeline > ul > li:nth-child(9) > a').innerHTML;
let allHomeworkCount = document.querySelector('body > app-root > app-page > div > div.page__container > div > div > div > div > app-group-page > div > div > div.columns__wrap.columns__wrap--right > app-rating-widget > app-widget-table > table > tbody > a:nth-child(8) > td > div > div > span:nth-child(1)').innerHTML;
const newElement = document.createElement('section');
const lessonsLeft = elementsOfAllLessons - passedLessons;
const listElements = [
    { text: 'Усього занять:', element: elementsOfAllLessons },
    { text: 'Пройдено занять:', element: passedLessons, state: 'green' },
    { text: 'Залишилось занять:', element: lessonsLeft, state: 'orange' },
    { text: 'Здано д/з:', element: allHomeworkCount },
    { text: 'Перевірено д/з:', element: 8, state: 'green' },
    { text: 'На перевірці д/з:', element: 1, state: 'orange' },
];


const newBlock = listElements.forEach(el => {
    mainPage.after(newElement);
    newElement.insertAdjacentHTML('beforeend', `
  <style scoped>
    section {margin-bottom: 12px; border-radius: 10px; background: #004282;}
     p {color: #d7cfcf; padding: 6px; margin: 0;}
    .page-container {color: red; padding: 6px; margin: 0 ; list-style: none;}
    .green {color: #09d309;}
    .orange {color: orange;}
  </style>
  <ul class="page-container">
    <li>
     <p class="${el.state}">${el.text} ${el.element}</p>
    </li>
  </ul>  
  `)
});