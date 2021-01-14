$(document).keypress(function(key){
    if (key.which === 13 && $('#user__name').is(':focus')) {
        document.getElementById("game-text").style.display = "block";
        document.getElementById("container").style.display = "flex";
        document.getElementById("bottom").style.display = "flex;"
        document.getElementById("center").style.display = "none";
        document.getElementById("title").style.display = "flex";
        var value  = $('#user__name').val().toUpperCase();
        document.getElementById("Name").innerHTML = value;
        ready();
    } else {

    }
});

var currentRoom = "start";
var commands = ["Go + Directon", "Pickup", "Look", "Inventory"];
var inventory = ["Water"];

function switchBackground() {
    var g = Math.floor(Math.random() * 3);
    switch (g) {
        case 0:
            color = "#351570";
            break;
        case 1:
            color = "#ac18b1";
            break;
        case 2:
            color = "#6b1a25";
            break;
        case 3:
            color = "#418825"
            break;
    }
    document.body.style.background = `${color}`;
}

function switchBackgroundColor() {
    document.body.style.background = "#1b1b1b";
}

function changeRoom(dir) {
    if(rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#real-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#real-text').append("<p>You can not go that way</p>");
    }


}

function showHelp() {
    $('#real-text').append("<p>Here are the possible commands: </p>");
    $('#real-text').append("<p><ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#real-text').append("<li>" + commands[i] +"</li>");
    }
    $('#real-text').append("</ul></p>");

}

function getItems() {
    $('#real-text').append("<p>"+ rooms[currentRoom].items +"</p>");
}

function Pickup() {
    $('#real-text').append("<p>You picked up a "+ rooms[currentRoom].shortTerm +"</p>");
    inventory.push(rooms[currentRoom].itemName);
}

function showInventory() {
    if (inventory.length === 0) {
        $('#real-text').append("<p>You are not carying anything</p>");
        return;
    }
    $('#real-text').append("<p>Here is your inventory: </p>");
    $('#real-text').append("<p><ul>");
    for (var i = 0; i < inventory.length; i++) {
        $('#real-text').append("<li>" + inventory[i] +"</li>");
    }
    $('#real-text').append("</ul></p>");

}

function playerInput(input) {
    var command = input.split(" ")[0];
    switch (command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;
        case "look":
            getItems();
            break;
        case "pickup":
            Pickup();
            break;
        default:
            $("#real-text").append("<p>Invalid Command!</p>");
    }
}


$(document).ready(function() {
    $('#real-text').append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function(key){
        if (key.which === 13 && $('#user-input').is(':focus')) {
            var value  = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(value);
        }
    });


});

function ready() {
    document.addEventListener("click", () => {
        document.getElementById("hidetwo").style.display = "none";
        document.getElementById("hidethree").style.display = "none";
        document.getElementById("hidefour").style.display = "none";
        document.getElementById("input__container").style.display = "block";
        document.querySelector("input").style.display = "block";
        document.getElementById("real-text").style.display = "block";
        document.getElementById("hidezero").style.display = "block";
        document.getElementById("vgbuhfcen").style.display = "none";
        document.getElementById("bjgceni").style.display = "none";
    });
}