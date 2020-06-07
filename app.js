// ___________________chapter-1 start____________________________

// ___________________Question-1 ____________________________

alert("Assalam-o-alikum");


// ___________________Question-2 ____________________________

alert("Error ! please enter a valid passward");


// ___________________Question-3 ____________________________

alert("Welcome to JS Land. \nHappy Coding.");

// ___________________Question-4 ____________________________

alert("Welcome to JS Land");

alert("Happy coding! \nprevent this page from creating addition dailogs"  )


// ___________________chapter-1 end____________________________


// ___________________chapter-2 start____________________________

// ___________________Question-1 ____________________________

var username;

// ___________________Question-2 ____________________________

var muName = "Ahmed Hamza Ansari"

// ___________________Question-3 ____________________________

var a;
a="Hello World";

alert(a);

// ___________________Question-4 ____________________________

var names="hamza";
var age=20;
var course="Certified mobile Application Development"

alert(names);
alert(age+ " years old");
alert(course);

// ___________________Question-5 ____________________________

var x="PIZZA";
alert ("PIZZA \nPIZZ \nPIZ \nPI \nP")

// ___________________Question-6 ____________________________

var email = "example@gmail.com";
var self = "My email is ";
var res = self.concat(email);
alert(res);

// ___________________Question-7 ____________________________

var book="A smarter way to learn JavaScript";
alert("I am trying to learn From the Book "+book);

// ___________________Question-8 ____________________________

document.write("Yeah! I can write HTML content throug JAVASRIPT"+"<br>")

// ___________________Question-9 ____________________________

var str="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
document.write(str);
alert(str);


// ___________________chapter-2 end____________________________


// ___________________chapter-3 start____________________________

// ___________________Question-1 ____________________________

var my_age=20;
alert("I am " +my_age+ " Year old");

// ___________________Question-2 ____________________________


// ___________________Question-3 ____________________________
var birthYear=1999;
document.write("My birth Year is "+birthYear +"<br>"+"Data type of my decleared variable is number"+"<br><br><br>");

// ___________________Question-4 ____________________________

var store_name="XYZ Clothing Store."
var visitor_name="Hamza";
var product_title="T-shirt";
var quentity = 5;
document.write("<b>" + visitor_name + "</b>"+" ordered " +"<b>"+  quentity + product_title + "</b>" +"(s) " + " on " + store_name +"<br>" );


// ___________________chapter-3 end____________________________


// ___________________chapter-4 Start____________________________

// ___________________Question-1 ____________________________

var a=5 , b=10 , c=30;

// ___________________Question-2 ____________________________


        //  _____legal variable_______



document.write("legal variable are <br>1- var product_price = 40.5;<br> 2- var  a=p2_3355$;<br> 3 var nameOfAnimal;<br> 4 var c; \n5 var $_;<br> 5- var names='hamza' <br> <br>  " )

        //  _____illegal variable_______

      
        document.write("illegal variable are <br>1- var product_name = 40shirt;<br> 2- var  a=%&p2_3355$;<br> 3 var 22nameOfAnimal;<br> 4 var 23; \n5 var $; <br> 5- var names=hamza <br>" )

// ___________________Question-3 ____________________________

document.write("<h2>Rules for naming JS variables</h2> <br> <br> <br>");
document.write("variable name can only contain. numbers ,'$' and '_'. for example : $my , _1stvariable <br>");
document.write("variable only begin with a letter ,$ or _ . for example : $name , -name , name<br>");
document.write("variable name are Case sensitive <br>");
document.write("Variable name shoukd not be JS keywords <br>");

        
// ___________________chapter-4 end____________________________

// ___________________chapter-5 Start____________________________

// ___________________Question-1 ____________________________

var a=4,b=5;
var c;
document.write("Sum of "+a+ " and " +b+ " is " + +(a+b) +"<br>");

// ___________________Question-2 ____________________________


document.write("Sum of "+a+ " and " +b+ " is " + +(a-b) +"<br>");
document.write("Sum of "+a+ " and " +b+ " is " + +(a*b) +"<br>");
document.write("Sum of "+a+ " and " +b+ " is " + +(a/b) +"<br>");
document.write("Sum of "+a+ " and " +b+ " is " + +(a%b) +"<br>");

// ___________________Question-3 ____________________________

var i ;
document.write("Value Atfer value decleration is "+i +"<br>");
i=6;
document.write("Value after variable declaration is: "+i +"<br>")
i++;
document.write("Value after increment is "+ i+"<br>");
i=7+i;
document.write("Value after Addtion is "+i +"<br>");
i--;
document.write("Value after decrement is "+ i+"<br>");

document.write("Remainder is "+ +(i%3)+"<br>");

// ___________________Question-4 ____________________________

var moveiTicketPrice=600;
var PKR=moveiTicketPrice*5;
document.write("Total Cost Of Buy 5 tickets to a movie is : "+PKR+" PKR"+"<br>")

// ___________________Question-5 ____________________________

document.write("Table Of 4"+"<br>")

for(var i=1 ; i<=10 ;i++)
{
    document.write("4 x " + i + " = " +(4*i) +"<br>");
}

// ___________________Question-6 ____________________________

var centigrade , fahrenheit;
centigrade = 25;

centigrate=((fahrenheit-32 )*5)/9;
fahrenheit=((centigrade*9)/5)+32;
document.write(centigrade +"'C is " + fahrenheit + "'F" +"<br>" );

fahrenheit=70;
document.write(fahrenheit +"'F is " + centigrade + "'C" +"<br>" )

// ___________________Question-7 ____________________________

var priceOfItem_1 = 650;
var priceOfItem_2 = 100;
var quentityOfItem_1 = 3;
var quentityOfItem_2 = 7;
var shipping_charges = 100;

document.write("Total Cozt of Your Order is : "+( (priceOfItem_1*quentityOfItem_1) + (priceOfItem_2*quentityOfItem_2) +shipping_charges ) +"<br>");

// ___________________Question-8 ____________________________


document.write("<h3>Marks Sheet</h2> "+"<br>")
var tatalmarks = 980;
var obtainedMarks = 600;
var percentage = (obtainedMarks/tatalmarks)*100;
document.write("Your percentage is : " + percentage +"<br>");

// ___________________Question-9 ____________________________

document.write("<h1>Currency in PKR</h1>" + "<br>")
var dollar = 10 ;
var dollarRate = 104.80;
var riyal = 25;
var riyalRate = 28;

var total_dollar_in_pkr = dollarRate*dollar;
var total_riyal_in_pkr = riyalRate*riyal;
document.write("total Currency in PKR: " +(total_dollar_in_pkr+total_riyal_in_pkr) +"<br>");

// ___________________Question-10 ____________________________

var a10;
a10 = 7 ;
document.write("The result is: "+((a10+5)*10)/2);


// ___________________Question-11 ____________________________

document.write("<h1>Age Calculator</h1>");
var currentYear = 2020;
var birthYear = 1999;
var calculation = currentYear-birthYear;

document.write("Your age is: " + calculation);


// ___________________Question-12 ____________________________

document.write("<h1> The Geaometrizer</h1>");

var radius =10;
var circumstance = 2 * (3.14) * radius;
document.write("Circumsatance of Circle is: " + circumstance);


// ___________________chapter-5 end____________________________


