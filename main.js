const divJoke = document.getElementById('divJoke');

function getJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data=>{
        divJoke.innerHTML = `<p>${data.value}</p>`;
    })
    .catch(err=>{
        console.log(err);
        alert("unable to fetch data");
    });
}