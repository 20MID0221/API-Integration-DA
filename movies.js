function movies_data(a)
{
    let home = document.getElementById("movies");
    home.innerHTML = "";
    console.log(a);
    let getmovie = async ()=>{
        let response = await fetch(`https://www.omdbapi.com/?t=${a}&apikey=c2f05ce5`,{
            method:"GET",
            mode :'cors',
            headers:{
                accept:"application/json",
            }
        });
        let data = await response.json();
        console.log(data);
        let element = document.createElement("div");
        element.id="element_dynamic_item";
        element.style="padding:0.8rem;"
        element.innerHTML=`<div id="c" style="justify-content:center;padding:0.65rem;border-radius: 1.69rem;"><div class="innerimg"><img src=${data.Poster}></div><div class="innercontent" style="padding:1.6rem;align-content: center;"><a href="${data.Website}" target="_blank" ><h1 class="content_title" style="font-size: 1rem;font-weight: bolder;"> ${data.Title}</h1></a><p>Actors :${data.Actors}<br>Genre :${data.Genre}<br>Language :${data.Language}<br>Runtime :${data.Runtime}<br>imdb Rating :${data.imdbRating} </p></a></div></div>`;
        home.appendChild(element);
    }
    getmovie();
    event.preventDefault();
}
