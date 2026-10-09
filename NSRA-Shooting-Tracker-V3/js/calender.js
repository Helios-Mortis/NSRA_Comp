function previousThursday(dateString){

let d=new Date(dateString);

while(d.getDay()!=4){
d.setDate(d.getDate()-1);
}

return d;
}

function exportICS(){

let text="BEGIN:VCALENDAR\nVERSION:2.0\n";

deadlines.forEach(d=>{

let day=d.deadline.replaceAll("-","");

text+=`BEGIN:VEVENT
SUMMARY:${d.competition} Round ${d.round}
DTSTART;VALUE=DATE:${day}
END:VEVENT
`;

});

text+="END:VCALENDAR";

const blob=new Blob(
[text],
{type:"text/calendar"}
);

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="NSRA_2026_27.ics";

a.click();
}
