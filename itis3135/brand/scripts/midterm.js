function post_Data() {
    let name = document.getElementById("fname").value;
    console.log(name);
    let email = document.getElementById("pNumber").value;
    console.log(email);
    let phone = document.getElementById("lName").value;
    console.log(phone);
    let comments = document.getElementById("suggestions").value;
    console.log(comments);

    let display = document.getElementById("data");
    display.innerHTML = ("<p>" + name + "</p>");
    display.innerHTML += ("<p>" + email + "</p>");
    display.innerHTML += ("<p>" + phone + "</p>");
    return false;
}