function showTab(id){

document
.querySelectorAll(".tab")
.forEach(t=>t.classList.add("hidden"));

document
.getElementById(id)
.classList.remove("hidden");

}

function populateCompetitions(){

const select=
document.getElementById(
"competition"
);

competitions.forEach(c=>{

let option=
document.createElement("option");

option.textContent=c;

select.appendChild(option);

});

}

async function saveResult(){

let image="";

const file=
document.getElementById("cardImage").files[0];

if(file){

image=
await new Promise(resolve=>{

const reader=new FileReader();

reader.onload=e=>resolve(
e.target.result
);

reader.readAsDataURL(file);

});

}

const results=getResults();

results.push({
competition:competition.value,
round:round.value,
score:Number(score.value),
x:Number(xCount.value),
ammo:ammo.value,
notes:notes.value,
image:image,
date:new Date().toISOString()
});

saveResults(results);

renderResults();

buildStatistics();

}

function renderResults(){

const results=getResults();

let html="<table>";

html+="<tr><th>Competition</th><th>Round</th><th>Score</th></tr>";

results.forEach(r=>{

html+=`
<tr>
<td>${r.competition}</td>
<td>${r.round}</td>
<td>${r.score}</td>
</tr>
`;

});

html+="</table>";

document
.getElementById("results")
.innerHTML=html;

}

populateCompetitions();
renderResults();
buildStatistics();

if('serviceWorker' in navigator){
navigator.serviceWorker.register(
'service-worker.js'
);
}