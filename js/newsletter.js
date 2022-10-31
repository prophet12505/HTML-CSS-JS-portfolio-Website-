// let guestName=prompt("Hellow how are you","guest");
let txtName=document.getElementById("greeting");
let button=document.querySelector("button");
let txtTime=document.getElementById("time");
button.onclick=handleClick;

//function that deal with the onclick event
function handleClick(){
    let name="";
    let indication="Hellow, what's your name?"
    while(name==="" || name.length < 1 || name.length>20 ){
        name=prompt(indication,"guest");
        indication="Please notices that name can not be empty. Meanwhile, it should less than 20 characters";
    }
    txtName.innerHTML="Hello, <span>"+name+"</span>";

    txtName.style.display="inline-block";
}

//after clicking join group, some message would be shown
function fakeJoin(){
    alert("Unfortunately, this is a fake button 😅")
}


