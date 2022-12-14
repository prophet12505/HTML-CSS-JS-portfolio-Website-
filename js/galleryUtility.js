

//Slide utility class
class Slides {
    static slideIndex = 1;
    static slides = document.getElementsByClassName("mySlides");
    static dots = document.getElementsByClassName("dot");

    //switch slides
    static showSlides(n) {
        let i;
        if (n > Slides.slides.length) {
            Slides.slideIndex = 1;
        }
        if (n < 1) {
            Slides.slideIndex = Slides.slides.length;
        }
        for (i = 0; i < Slides.slides.length; i++) {
            Slides.slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            Slides.dots[i].className = Slides.dots[i].className.replace(" active", "");
        }
        Slides.slides[Slides.slideIndex - 1].style.display = "block";
        Slides.slides[Slides.slideIndex - 1].className += " active";
        // setTimeout(showSlides,2500);
    };
    //show the next/prev slide
    static plusSlides(n) {
        console.log("plusSlides");
        Slides.showSlides(Slides.slideIndex += n);
    };
    //show current slide
    static currentSlide(n) {
        console.log("currentSlides");
        Slides.showSlides(Slides.slideIndex = n);
    };

    //launch the function
    static launch() {
        Slides.showSlides(Slides.slideIndex)
    }

}
//Advertisement utility class
class Advertisements {

    static adBanner = document.getElementById("adBanner");
    static thisAd = 0;


    //add link to the image
    static addLinks() {
        Advertisements.adBanner.parentNode.onclick = Advertisements.newLocation;
        
    };
     //opens link in a new tab/window
    static newLocation() {
    
        window.open("https://www." + adURL[Advertisements.thisAd-1], "_blank");
        return false;
    };

    //rotate ads
    static rotate() {
        
        if (Advertisements.thisAd >= adImages.length) {
            Advertisements.thisAd -= adImages.length;
        }
        else if(Advertisements.thisAd<0 ){
            Advertisements.thisAd += adImages.length;
        }
        // console.log(adName);
        Advertisements.adBanner.src = adImages[Advertisements.thisAd];

        Advertisements.addLinks();
        Advertisements.thisAd ++;
        setTimeout(Advertisements.rotate, ROTATE_REFRESH_SPEED);
    };

}
//Movement utility class
class Movements {
    //false:forward true:backward
    static Direction = false;
    static angle = 0;
    static divAdvert = document.getElementById('divAdvert');//get the element
    static sticker = document.getElementById('sticker');//get the element
    static speed = MAX_SPEED;

    static x_Location = divAdvert.offsetLeft;
    static y_Location = divAdvert.offsetTop;
    //[x_direction,y_direction] as a 2 dimention vector which controls direction
    static x_direction=1;
    static y_direction=0;
    static screenWidth = window.innerWidth - Movements.divAdvert.offsetWidth - 10
    static screenHeight = document.body.offsetHeight - Movements.divAdvert.offsetHeight - 10
    //slow speed while cursor hovering the image
    static slowAnimation() {
        Movements.speed = SLOW_SPEED;
        console.log("speed"+Movements.speed);

    };
    //restore speed while cursor hovering the image
    static restoreAnimation() {
        Movements.speed = MAX_SPEED;
        console.log("speed"+Movements.speed);
    }
    //generate 1 or -1
    static generateDirection(){
        let randomNumber=2*Math.random()-1;
        return randomNumber>0?1:-1;
    }
    //generate direcion noise. Without this, the moving content will follow a fixed diamond shape path
    static generateRandomNoise(){
        return (2*Math.random()-1)*RANDOM_DIRECTION_NOISE;
    }
    //perform content animation
    static doAnimation() {
        Movements.screenWidth = window.innerWidth - Movements.divAdvert.offsetWidth - 10
        Movements.screenHeight = document.body.offsetHeight - Movements.divAdvert.offsetHeight - 10
        let currentLeft = Movements.divAdvert.offsetLeft;// the current left potision
        let currentTop = Movements.divAdvert.offsetTop;// the current left potision


        //right border
        if (currentLeft >= Movements.screenWidth) {
            Movements.x_direction = -1+Movements.generateRandomNoise();
            Movements.y_direction = Movements.generateDirection()+Movements.generateRandomNoise();
        
        }
        //left border
        else if (currentLeft < 0) {
            Movements.x_direction = 1+Movements.generateRandomNoise();
            Movements.y_direction = Movements.generateDirection()+Movements.generateRandomNoise();
        }
        //bottom border
        else if (currentTop >= Movements.screenHeight) {
            Movements.x_direction =  Movements.generateDirection()+Movements.generateRandomNoise();//
            Movements.y_direction = -1+Movements.generateRandomNoise();
        }
        //top border
        else if (currentTop < 0) {
            Movements.x_direction =  Movements.generateDirection()+Movements.generateRandomNoise();//
            Movements.y_direction = 1+Movements.generateRandomNoise();
        }
        Movements.x_Location += Movements.speed*Movements.x_direction;//move the object 'speed' pixels
        Movements.y_Location += Movements.speed*Movements.y_direction;

        Movements.angle += ANGLE_SPEED;

        Movements.divAdvert.style.left = Movements.x_Location + "px";//change the left 
        Movements.divAdvert.style.top = Movements.y_Location + "px";//change the left 
        Movements.sticker.style.transform = "rotate(" +  Movements.angle + "deg)";// rotate the object
        Movements.divAdvert.onmouseover = Movements.slowAnimation;
        Movements.divAdvert.onmouseout = Movements.restoreAnimation;
        setTimeout( Movements.doAnimation, MOVEMENT_REFRESH_RATE);

    }
    //launch moving content function, set up initial state
    static launch(){
        Movements.divAdvert.style.left = 0 + "px";//change the left 
        Movements.divAdvert.style.top = 0 + "px";//change the left 
        Movements.x_direction=Math.random();
        Movements.y_direction=Math.random();
        Movements.doAnimation();
    }
}