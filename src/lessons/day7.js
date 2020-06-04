function getUserData() {
    console.log("starting request");

    let request = new XMLHttpRequest();
    request.open("GET", "https://randomuser.me/api/", true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText);
      } else {
        console.log("Error");
        console.log(request);
      }
    };
    request.onerror = () => {
      console.log("Connection error");
    };
    request.send();
  }