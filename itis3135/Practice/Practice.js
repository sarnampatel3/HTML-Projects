var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {

	var total = 0;
	document.getElementById("espresso").onclick=function()
	{

		document.getElementById("order").append("$1.95 - Espresso - Delicious espresso. Wanna try it?");
		total = (parseFloat(total) + parseFloat(1.95)).toFixed(2);
		document.getElementById("total").innerHTML="<em>Total: $" + total + " </em>";
		
	};
		
		document.getElementById("cappuccino").onclick=function()
		{
		document.getElementById("order").append("$3.45 - Cappuccino - Delicious Cappuccino.");
		total = (parseFloat(total) + parseFloat(3.45)).toFixed(2);
		document.getElementById("total").innerHTML="<em>Total:" + total + " </em>";
		
		};

		
}; // end onload