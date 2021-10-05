function getShape(my_number) {
    alert("The code is running as expected.")

    switch (Number(my_number)) {
        case 1:
            document.querySelector("#information")
            alert("Henagon")
            break
        case 2:
            document.querySelector("#information")
            alert("Digon")
            break
        case 3:
            document.querySelector("#information")
            alert("Trigon")
            break;
        case 4:
            document.querySelector("#information")
            alert("Tetragon")
            break
        case 5:
            document.querySelector("#information")
            alert("Pentagon")
            break
        case 6:
            document.querySelector("#information")
            alert("Hexagon")
            break
        case 7:
            document.querySelector("#information")
            alert("Heptagon")
            break
        case 8:
            document.querySelector("#information")
            alert("Octagon")
            break
        case 9:
            document.querySelector("#information")
            alert("Enneagon")
            break
        case 10:
            document.querySelector("#information")
            alert("Decagon")
            break
        case 11:
            document.querySelector("#information")
            alert("Hendecagon")
            break
        case 12:
            document.querySelector("#information")
            alert("Dodecagon")
            break
        case 13:
            document.querySelector("#information")
            alert("Triskaidecagon")
            break
        case 14:
            document.querySelector("#information")
            alert("Tetrakaidecagon")
            break
        case 15:
            document.querySelector("#information")
            alert("Pentakaidecagon")
            break
    }

}

function validateEntry() {
    var num = 0;

    while(!(num > 0 && num < 16)){//not between 1 - 15
        num = Number(prompt("Enter a number commanded by The Angry Lion between 1-15: "))
        if (num > 0 && num < 16) {
            getShape(num)
        } else {
            alert("Number is not in the range. Please enter a number between 1 - 15:")
        }
    }
    

}