const books = [{
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]



// Atividade 1-1 //



/* function exibirInformacoes(obj){
     const livrosFiltrados = books.map((item, indice) =>{
    return `${indice + 1} - ${item.title} - ${item.author} - ${item.published}`
})

}

console.log(livrosFiltrados)
  */


// Atividade 1-2 //

/*function livroSubstituido(obj){
const objetoSubstituido = books.splice(5,1, { isbn: "9781788623872",
title: "Learning JavaScript Data Structures and Algorithms",
author: "Loiane Groner",
published: "2018-04-26T00:00:00.000Z",})

}

console.log(objetoSubstituido) */


// Atividade 1-3 //


/*  function dateFormat(obj) {
    obj.forEach[(item) => {
        let data = item.published.replace("T00:00:00.00Z", "");
        let dataFormatada = data.split("-").reverse().join("/");
        return console.log(dataFormatada);
    }];


}
  */
