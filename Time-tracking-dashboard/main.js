
const buttons=document.querySelectorAll('.container__main-button');
const report=document.querySelectorAll('.container__report');

let datajson;
fetch("data.json")
   .then(res=>res.json())
   .then(data=>{
       data.forEach(e=>{
          acbtn(e);
       });
   })
   .catch(erro=>console.error(erro));

function acbtn(datjosn){
    buttons.forEach((e)=>{
        e.addEventListener('click',()=>{
            reset_buttons();
            e.classList.add('show');
            if(e.classList.contains('daily')){
                fill(datjosn.title,datjosn.timeframes.daily.current,datjosn.timeframes.daily.previous,"Last Day");

            }
            else if(e.classList.contains('weekly')){
                fill(datjosn.title,datjosn.timeframes.weekly.current,datjosn.timeframes.weekly.previous,"Last Week");
            }
            else{
                fill(datjosn.title,datjosn.timeframes.monthly.current,datjosn.timeframes.monthly.previous,"Last Month");

            }
        })
    })  
}
function reset_buttons(){
    buttons.forEach((e)=>{
        e.classList.remove('show');
    })
}


function fill(title,hrs,previushrs,curr){
    report.forEach(e=>{
        const name=e.querySelector('h3');
        const textcurrent=e.querySelector(".report-data-periodical");
        const current=e.querySelector('.report-data-hours');
        const previus=e.querySelector('.report-data-periodical-hour');
        if(e.classList.contains(title.toLowerCase())){
            name.textContent=title;
            current.textContent=hrs+'hrs';
            previus.textContent=previushrs+'hrs';
            textcurrent.textContent=curr;
            return; 
        }
        else if (title==="Self Care" && e.classList.contains('selfCare')){
            name.textContent=title;
            current.textContent=hrs+'hrs';
            previus.textContent=previushrs+'hrs';
            textcurrent.textContent=curr;
        }
    })
}