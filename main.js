var playerHealth = [-1, 20, 20, 20, 20];
var floor = 1;

function PlayerDecrement (playerNum)
{
    playerHealth[playerNum]--;
    document.getElementById("player" + String(playerNum) + "healthcounter").innerText = String(playerHealth[playerNum]).padStart(2, '0');
}

function PlayerIncrement (playerNum)
{
    playerHealth[playerNum]++;
    if (playerHealth[playerNum] > 20)
    {
        playerHealth[playerNum] = 20;
    }
    document.getElementById("player" + String(playerNum) + "healthcounter").innerText = String(playerHealth[playerNum]).padStart(2, '0');
}

function FloorDecrement ()
{
    floor--;
    if (floor < 1)
    {
        floor = 1;
    }
    document.getElementById("floorcounter").innerText = floor;
}

function FloorIncrement ()
{
    floor++;
    document.getElementById("floorcounter").innerText = floor;
}

function SaveValues ()
{
    setCookie(document.getElementById("savename").value,
            String(playerHealth[1]) + "-"
            + String(playerHealth[2]) + "-"
            + document.getElementById("player1weaponinput").value + "-"
            + document.getElementById("player2weaponinput").value + "-"
            + document.getElementById("usedcardinput").value + "-"
            + String(floor),
            9999);
}

function LoadValues ()
{
    var valuesArray = getCookie(document.getElementById("loadname").value).split("-");
    if (valuesArray.length == 6)
    {
        playerHealth[1] = valuesArray[0];
        playerHealth[2] = valuesArray[1];
        document.getElementById("player1healthcounter").innerText = playerHealth[1];
        document.getElementById("player2healthcounter").innerText = playerHealth[2];
        document.getElementById("player1weaponinput").value = valuesArray[2];
        document.getElementById("player2weaponinput").value = valuesArray[3];
        document.getElementById("usedcardinput").value = valuesArray[4];
        floor = valuesArray[5];
        document.getElementById("floorcounter").innerText = floor;
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
