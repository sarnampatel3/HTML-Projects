//declaring arrays
person = ["Sarnam", "Parin", "Tilak", "Manav", "Shiv"];
salary = [60000, 75000, 72000, 68000, 70000];

function addSalary()
{

}

function displayResults()
{
    //finding average salary
    var total = 0;
    for (var i = 0; i < salary.length; i++)
     {
        total += salary[i];
    }
    var avg = total / salary.length;

    //finding highest salary among the array
    highestSalary = 0;
    salary.forEach((element) => {
        if (highestSalary < element) {
          highestSalary = element;
        }
      });

      document.getElementById("results").innerHTML = "<h2>Average Salary: </h2>" + avg + "<h2>Highest Salary: </h2>" + highestSalary;
}

function displaySalary()
{
    for( i = 0 ; i < person.length ; i++)
    {
        document.getElementById("results_table").innerHTML = (person[i], salary[i]);
    }
}
      
function employeeName() 
{
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }