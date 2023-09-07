var avg = prompt("Enter Your Mark");

var avg;

if (avg >= 101)
    document.write("Invalid");
else if (avg >= 90)
    document.write("A+");
else if (avg >= 80)
    document.write("A");
else if (avg >= 70)
    document.write("B");
else if (avg >= 60)
    document.write("C");
else if (avg >= 50)
    document.write("D");
else if (avg >= 40)
    document.write("E");
else if (avg >= -1)
    document.write("Invalid");
else
    document.write("Fail");