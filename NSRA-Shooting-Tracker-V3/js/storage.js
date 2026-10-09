function getResults(){
return JSON.parse(
localStorage.getItem("results") || "[]"
);
}

function saveResults(data){
localStorage.setItem(
"results",
JSON.stringify(data)
);
}