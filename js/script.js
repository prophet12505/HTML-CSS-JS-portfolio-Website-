
// show a easyclock on the panel
function showtime(){
    document.getElementById("clock").innerHTML=new Date().toLocaleTimeString();
}
showtime();//immediately generate the time while finishing loading the page
setInterval(showtime,500);





