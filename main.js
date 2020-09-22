// prvi nacin

let xml = new XMLHttpRequest();
/* 
xml.open("get", "https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default"); // otvara zahtev ka serveru
// !!! NE OVAKO
// setTimeout(function(){
//     console.log(xml.responseText);
// }, 3000)
xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status == 200) {
        console.log(xml.responseText);
    }
}
xml.send();// salje zahtev ka serveru
// xml.responseText...tu se nalaze podaci */


// drugi nacin - promise

/* let getData = new Promise(function(resolve,reject){
    xml.open("get", "https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default");

xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status == 200) {
        resolve(JSON.parse(xml.responseText)) // res i rej zahtevaju jedan value kao parametar
    }
}

xml.send();// salje zahtev ka serveru
})

getData.then((data)=>{
    console.log(data);
},(err) => {
    
}
) */


// treci nacin - fetch (vraca promise) ... najlaksi

/* 
fetch("https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default").then(prom=>{
    return prom.json() // ... ovde su podaci
})
.then(res=>
    console.log(res)); */


// dodatni nacin AXIOS ... vraca promise
axios.get("https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default").then(res=>{
    console.log(res);// logujemo proimise da vidimo gde su podaci...vidimo da su u data
    console.log(res.data); // ... ovde su podaci

})


// https://mysafeinfo.com/api/data?list=beatlesalbums&format=json&case=default
// https://jsonplaceholder.typicode.com/
// https://raw.githubusercontent.com/Danilovesovic/bands/master/books.json

//axios
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
