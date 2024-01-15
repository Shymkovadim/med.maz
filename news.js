"use strict"

const Obj = [
    {
        src: "assets/img/news1.jpg",
        title: "ПРОФИЛАКТИКА ТРАВМАТИЗМА."
    },
    {
        src: "assets/img/news2.jpg",
        title: "ТРИХИНЕЛЛЕЗ."
    },
    {
        src: "assets/img/news3.jpg",
        title: "МАЛЯРИЯ."
    },
    {
        src: "assets/img/news4.jpg",
        title: "ВСЕМИРНЫЙ ДЕНЬ БОРЬБЫ СО СПИД."
    }
];


let news = document.querySelector('.newslist')

function bildNews(newsObj) {
    const articleNews = document.createElement('article');
    articleNews.classList.add('newslist__container');
    news.append(articleNews);

    const divImgBox = document.createElement('div');
    divImgBox.classList.add('newslist__img-box');
    articleNews.append(divImgBox);

    const img = document.createElement('img');
    img.classList.add('newslist__img');
    img.src = newsObj.src;
    divImgBox.append(img);


    const title = document.createElement('h6');
    title.classList.add('newslist__title');
    title.innerHTML = newsObj.title;
    articleNews.append(title);

}
Obj.map(news => bildNews(news)); 