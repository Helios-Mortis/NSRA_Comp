function buildStatistics(){

const results=getResults();

const grouped={};

results.forEach(r=>{

if(!grouped[r.competition]){
grouped[r.competition]=[];
}

grouped[r.competition].push(r.score);

});

let html="<table>";

html+="<tr><th>Competition</th><th>Rounds</th><th>Average</th><th>Best</th></tr>";

for(let comp in grouped){

let avg=
grouped[comp].reduce((a,b)=>a+b,0)
/
grouped[comp].length;

html+=`
<tr>
<td>${comp}</td>
<td>${grouped[comp].length}</td>
<td>${avg.toFixed(1)}</td>
<td>${Math.max(...grouped[comp])}</td>
</tr>
`;

}

html+="</table>";

document.getElementById(
"statistics"
).innerHTML=html;

}