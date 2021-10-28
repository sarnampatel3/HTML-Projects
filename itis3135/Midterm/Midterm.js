var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers

};

function updateCalorie(){
    if(document.getElementById('day').checked && document.getElementById('calorie').checked && document.getElementsByClassName('button').checked ){
        var newCalorie = document.getElementById('calorie').value;
       


    }
}

function showAverageCalories(){
  //finding average salary
  var total = 0;
  for (var i = 0; i < calories.length; i++)
   {
      total += calories[i];
  }
  var avg = total / calories.length;

    document.getElementById("average").innerHTML = avg;
    average.style.color = 'green';
    average.background.color = 'transparent';
}

function showMax(){
    var maxCalories = 0;
    var currentDay = days[0];
    
    calories.forEach((element) => {
        if (maxCalories < element) {
          maxCalories = element;
        }
      });

      var maxCaloriesIndex = calories[maxCalories.element];
     var currentDay = days[maxCaloriesIndex];
      
      document.getElementById("showMax").innerHTML = "Your maximum consumed calorie is " + maxCalories + " on " + maxCaloriesIndex;

}