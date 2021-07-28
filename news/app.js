console.log('This is news project');

// 6cc89d9f4259471497ddf65c738b6313
//initialize the news api parameter
let source = 'in';
let apiKey = '6cc89d9f4259471497ddf65c738b6313';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//Create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`, true);

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        //console.log(articles[news]);
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <h2 class="card-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index + 1}:</b> ${element['title']}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a> </div>
                            </div>
                        </div>`
            newsHtml += news;
        })
        newsAccordion.innerHTML = newsHtml;

    }
    else {
        console.log('Some error occured');
    }
}
xhr.send();

