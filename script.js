function validator() {
    var emailInput = document.getElementById("email");
    var text = emailInput.value.trim();

    // regular expressions to check if input matches the desired format
    var emailpattern =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (text === "") {
        var alert = "Please enter your email address"; 
        clorChange(); 
        document.getElementById("msg-box").innerHTML = alert;
    } else if (!emailpattern.test(text)){
        var alert1 = "Please enter a valid email address";
        clorChange();
        document.getElementById("msg-box").innerHTML = alert1;
    } else {
        var url = "sucess.html"; // the url of the page to navigate to
        window.location.href = url;
        var emailDisplay = document.getElementById("email-display");
        emailDisplay.textContent = text;
    }
}

function clorChange(){;
    emailInput.style.borderColor= "hsl(4, 100%, 67%)";
    emailInput.style.backgroundColor="hsl(1, 100%, 90%)";
}

function dismiss(text){
    // show success message and display the email
    var url = "index.html"
    window.location.href = url;
    emailDisplay.textContent = text;
    
}