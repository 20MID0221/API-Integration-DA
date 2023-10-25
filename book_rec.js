document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var bookInput = document.getElementById('book-input').value;
    var genre = document.getElementById('genre').value;
    var lang = document.getElementById('lang').value;
    const langCodes = {
        "english": "en", "french": "fr","german": "de","spanish": "es",
        "russian": "ru","italian": "it","chinese": "zh","japanese": "ja",
        "korean": "ko","portuguese": "pt","arabic": "ar","hindi": "hi",
        "tamil": "ta","telugu": "te","bengali": "bn","marathi": "mr",
        "kannada": "kn","malayalam": "ml","punjabi": "pa","gujarati": "gu",
        "nepali": "ne","sinhala": "si","assamese": "as","oriya": "or",
        "konkani": "kok","manipuri": "mni","kashmiri": "ks","sanskrit": "sa",
        "maithili": "mai","bodo": "brx","santali": "sat","dogri": "dgo"
      }
    var url = 'https://www.googleapis.com/books/v1/volumes?q=';
    if(bookInput==="")
      bookInput = 'general';
    console.log(bookInput);
    url += bookInput;
    if(genre != 'any')
        url += '+subject:' + genre;
    if(Boolean(lang)){
        lang = langCodes[lang];
        url += '&langRestrict='+ lang;
    }
    console.log(lang);
    url +='&key=AIzaSyDnTrokuJCBRpAXF2TsAzeW1cC2GBr0j1g';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var books = data.items;
            console.log(books);
            document.getElementById('ch').innerHTML = 'Top 10 Books';
            var html = '';
            for (var i = 0; i < books.length; i++) {
                html += '<div class="book-item">'
                if(books[i] != undefined && books[i].volumeInfo != undefined 
                    && books[i].volumeInfo.imageLinks != undefined )
                    html += '<img src="'+books[i].volumeInfo.imageLinks.smallThumbnail+
                        '"></img><br>';
                html += '<p class="book-title">'+(i+1)+'. ' + 
                    books[i].volumeInfo.title + '</p><p class="book-author">Authors: ' + 
                    books[i].volumeInfo.authors.join(', ');
                html += '<br/><a href='+books[i].volumeInfo.previewLink+
                    '>Preview Link</a></p>';
                html += '</div>';
            }
            document.getElementById('recommendation-result').innerHTML = html;
        });
});


  