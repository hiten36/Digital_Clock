var flag=true;
document.getElementById('12').addEventListener('click',()=>{
    flag=true;
})
document.getElementById('24').addEventListener('click',()=>{
    flag=false;
})
setInterval(() => {
    var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var ap;
    if(hour>=12)
    {
        ap='PM'
    }
    else
    {
        ap="AM"
    }
    var hour1;
    if(hour>12)
    {
        hour1=hour-12;
    }
    else if(hour==0){
        hour1=12;
    }
    else{
        hour1=hour;
    }
    if(flag)
    {
        document.querySelector('.hour').innerText=("0" + hour1).slice(-2);
        document.querySelector('.min').innerText=("0" + min).slice(-2);
        document.querySelector('.sec').innerText=("0" + sec).slice(-2);
        document.querySelector('.ap').innerText=ap;
    }
    else
    {
        document.querySelector('.hour').innerText=("0" + hour).slice(-2);
        document.querySelector('.min').innerText=("0" + min).slice(-2);
        document.querySelector('.sec').innerText=("0" + sec).slice(-2);
        document.querySelector('.ap').innerText=ap;
    }

}, 100);