var random_number1 = Math.floor(Math.random() * 6) + 1;

var extension = ".png";

var random_image1 = "dice" + random_number1 + extension;

document.querySelectorAll("img")[0].setAttribute("src",random_image1);

var random_number2 = Math.floor(Math.random() * 6) + 1;

var random_image2 = "dice" + random_number2 + extension;

document.querySelectorAll("img")[1].setAttribute("src",random_image2)

if(random_number1 > random_number2) {
    document.querySelector("h1").innerHTML = "Player-1 Won";
}
else {
    document.querySelector("h1").innerHTML = "Player-2 Won";
    
}