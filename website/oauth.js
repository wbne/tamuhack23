function getUserData(data) {
    console.log("pilk")
    console.log(data)
}

function tokenTime(token) {
    const clientID = "2398T6"
    const pkce = "6c074z0s5b1s70071h1c2y1t5d324m025e706x460q445t07135i4p273e485g3x030n31236m1h0r1n6w1t6y4z4n5d482r001p350a4x0k731g3c59521m1j6n225j"
    const body = {
        "client_id": clientID,
        "grant_type": "authorization_code",
        "code": token,
        "code_verifier": pkce
    }
    console.log(body)
    try{
    const req = new XMLHttpRequest();
    req.addEventListener("load", getUserData);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    req.open("POST", "https://api.fitbit.com/oauth2/token");
    req.send(body);
    }
    catch {
        console.log(error)
    }
}
try {
    // get the url 
    var url = window.location.href;
    //getting the access token from url 
    var access_token = url.split("code=")[1].split("&")[0]; 
    // get the userid 
    var state = url.split("state=")[1].split("#")[0]; 
    console.log(access_token); 
    tokenTime(access_token)
} catch {
    console.log("user has not logged in")
}