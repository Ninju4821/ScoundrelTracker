var player1health = 20;
var player2health = 20;

function Player1Decrement ()
{
    player1health--;
    document.getElementById("player1healthcounter").innerText = player1health;
}

function Player1Increment ()
{
    player1health++;
    if (player1health > 20)
    {
        player1health = 20;
    }
    document.getElementById("player1healthcounter").innerText = player1health;
}

function Player2Decrement ()
{
    player2health--;
    document.getElementById("player2healthcounter").innerText = player2health;
}

function Player2Increment ()
{
    player2health++;
    if (player2health > 20)
    {
        player2health = 20;
    }
    document.getElementById("player2healthcounter").innerText = player2health;
}

function SaveValues ()
{
    setCookie("values", String(player1health) + "-"
                        + String(player2health) + "-"
                        + document.getElementById("player1weaponinput").value + "-"
                        + document.getElementById("player2weaponinput").value,
                        9999);
}

function LoadValues ()
{
    var valuesArray = getCookie("values").split("-");
    if (valuesArray.length == 4)
    {
        player1health = valuesArray[0];
        player2health = valuesArray[1];
        document.getElementById("player1healthcounter").innerText = player1health;
        document.getElementById("player2healthcounter").innerText = player2health;
        document.getElementById("player1weaponinput").value = valuesArray[2];
        document.getElementById("player2weaponinput").value = valuesArray[3];
    }
}



function setCookie(name, value, exdays) {
    const exdate = new Date(); //Date of expiration
    //Set the time to be now + expiration days
    exdate.setTime(exdate.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ exdate.toUTCString(); //Expiration time
    //Set the cookie with name, value, and expiration date provided
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
  
function getCookie(name) {
    let cname = name + "="; //Add an "=" to the inputted name
    let decodedCookie = decodeURIComponent(document.cookie); //Decoded version of the pages cookies
    let cookieArray = decodedCookie.split(';'); //Split the pages cookies into an array
    //For each cookie
    for (let i = 0; i < cookieArray.length; i++) {
      //Track the current cookie in one variable
      let cookie = cookieArray[i];
      //Loop through the cookie until there are no spaces infront of it
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      //If this cookie is the one we want
      if (cookie.indexOf(cname) == 0) {
        //Return the cookies value
        return cookie.substring(cname.length, cookie.length);
      }
    }
    //If it wasn't found, return an empty string
    return "";
}
