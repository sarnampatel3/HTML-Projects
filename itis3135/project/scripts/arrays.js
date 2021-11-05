//declaring arrays
person = ["Sarnam", "Parin", "Tilak", "Manav", "Shiv"];
salary = [60000, 75000, 72000, 68000, 70000];

function addSalary()
{
    let name = document.getElementById("name").value;
    let income = document.getElementById("salary").value;

       if(name == ""){
           document.getElementById("Name: ");
           alert("Please enter a name");
       }
       if(income == ""){
        document.getElementById("Salary: ");
           alert("Please enter salary");
       }
       if(name != "" && income != ""){
           person.push(name);
           salary.push(income);
           alert("Information has been added successfully!");
       }
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
    var output = "<tr><td colspan='2'></td></tr><tr><td><b>Employee</b></td><td><b>Salary</b></td></tr>";

    //loop to create a table rows and columns for the name and the score
    for (var i = 0; i < person.length; i++)
    {
    output = output + "<tr><td>" + person[i] + "</td><td>" + salary[i] + "</td></tr>"
    }
    document.getElementById("results_table").innerHTML = output;
}
    
function employeeName() 
{
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
}