
function changeTheme(pageColor, themeColor, inputColor) {
    document.getElementById("page").style.backgroundColor = pageColor;

    document.getElementById("header").style.backgroundColor = themeColor;
    document.getElementById("footer").style.backgroundColor = themeColor;

    document.getElementById("loginform").style.borderColor = themeColor;

    document.getElementById("username").style.borderColor = themeColor;
    document.getElementById("password").style.borderColor = themeColor;

    document.getElementById("loginbutton").style.backgroundColor = themeColor;

    document.getElementById("menubar").style.backgroundColor = inputColor;

    var buttons = document.querySelectorAll("#menubar button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = themeColor;
        buttons[i].style.color = "white";
        buttons[i].style.border = "none";
        buttons[i].style.padding = "8px 15px";
        buttons[i].style.borderRadius = "5px";
        buttons[i].style.cursor = "pointer";
    }
}

function blue() {
    changeTheme("lightblue", "blue", "#d9ecff");
}

function green() {
    changeTheme("#c7e9c0", "#41ab5d", "#e5f5e0");
}

function yellow() {
    changeTheme("lightyellow", "#d4a900", "#fff2b2");
}

function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user == "admin" && pass == "1234") {
        document.getElementById("message").innerHTML =
            "Login Successful!";
        document.getElementById("message").style.color = "green";
    }
    else {
        document.getElementById("message").innerHTML =
            "Login Failed!";
        document.getElementById("message").style.color = "red";
    }
}
