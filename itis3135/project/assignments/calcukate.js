var currentDate = new Date(),
day = currentDate.getDate(),
month = currentDate.getMonth() + 1,
year = currentDate.getFullYear();


var currentTime = new Date(),
hours = currentTime.getHours(),
minutes = currentTime.getMinutes();

if (minutes < 10) {
minutes = "0" + minutes;
}

    function user(){
        var name = prompt("Please enter your name:", "");
        var hru = prompt("How are you doing today?", "");
             if(name != null && hru != null){
                 document.write("Today is " + day + "/" + month + "/" + year + ", and the time is: " + hours + ":" + minutes + "\n");
                 document.write("The Sacrificial Penguin Enterprise welcomes you, " + name + "!\n We're glad you are doing " + hru + "!");
}
    }
  
    function add(){
        var num1 = Number(prompt("Please enter a number: "));
        var num2 = Number(prompt("Please enter another number: "));
            if (num1 != null && num2 != null) {
                document.write("Total is: " + (num1+num2));
              
}
    }
    function sub(){
        var first = Number(prompt("Please enter a number: "));
        var second = Number(prompt("Please enter another number: "));
            if (first != null && second != null) {
                document.write("Answer is: " + (first-second));
              
}
    }
    function wish(){
        var response = prompt("What did you want to be when you were young?");
        document.write("You can still become " + response + ". Give it a try, or you'll regret in the future." );
    }

    document

    function puzzle(){
        var answer = prompt("You passed a person who was at 2nd place in the race. What place are you on now? (Enter a number)");
        if(answer != 2){
            document.write("How can you be at " + answer + "  when you passed someone at 2nd place?");
        }
        else{
            document.write("That's true! You got it!!");
        }
        
    }

