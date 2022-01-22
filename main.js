var images = [
  "1st Class Rebel.png",
  "Capture.PNG",
  "Iron Man Glasses Dude.png",
  "Wannabe Cool Bro.png",
  "Lego Lover.png",
  "Pro Santa Gamer.png",
  "Woman who doesn't know she's getting photo bombed.png",
  "Lazy Doggy.png",
];
var names = [
  "Gautam Praveen (1st Class Rebel)",
  "Sowmya Praveen (The Elfy Mother)",
  "T.C Praveen (The Wannabe Cool Dude)",
  "T.G Chandrakumar (The Chocolate Bro)",
  "Siddharth Praveen (The tiny boy who wishes he was an Avenger)",
  "The Wannabe Perfect Family (Sanu (Pro Santa Gamer) Reshma (The Funny Aunt) and last, but not least Madhav (The Cutie Koala Baby)",
  "Sreedevi Chandrakumar [The Grandma who doesn't know when she's getting PhotoBombed",
  "Tommy [The Laziest Beagle of the Century]",
];
var i = 0;
function update() {
  i++;
  var numbers_of_family_member_in_array = 7;
  if (i > numbers_of_family_member_in_array) {
    i = 0;
  }

  //Debug the code to store list of images in updatedImage. Use images[i]
  var updatedImage = images[i];
  //Debug the code to store list of names in updatedName. Use names[i]
  var updatedName = names[i];

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}
