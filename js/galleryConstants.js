//slideshow constants
const prefix = "./img/gallery/ad/"

const adImages = ["amazon.png", "hbo.png", "hulu.png", "paramount.png"];
for (var i = 0; i < adImages.length; i++) {
    adImages[i] = prefix + adImages[i];
}
// console.log(adImages);

//advertisement constants

const adURL = ["primevideo.com/", "hbo.com/", "hulu.com/welcome", "paramountplus.com/ca/"];
const ROTATE_REFRESH_SPEED=4000;//time interval of advertisement


//moving content constants
const MAX_SPEED=3;   //max speed of the moving content
let speed=MAX_SPEED;//lower the number, the slower the movement
const SLOW_SPEED=1; //slower speed of the moving content
const ANGLE_SPEED=1; // angle speed
const MOVEMENT_REFRESH_RATE=10;  //refresh rate of the movement
const RANDOM_DIRECTION_NOISE=0.35;//random noise to change direction

