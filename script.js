

function fun() {
    one = document.getElementById("2000").value;
    two = document.getElementById("500").value;
    three = document.getElementById("200").value;
    four = document.getElementById("100").value;
    five = document.getElementById("50").value;
    six = document.getElementById("20").value;
    seven = document.getElementById("10").value;

    comma = new Intl.NumberFormat('en-US');
    document.getElementById("one").innerHTML = '₹' + comma.format(one * 2000);
    document.getElementById("two").innerHTML = "₹" + comma.format(two * 500);
    document.getElementById("three").innerHTML = '₹' + comma.format(three * 200);
    document.getElementById("four").innerHTML = '₹' + comma.format(four * 100);
    document.getElementById("five").innerHTML = '₹' + comma.format(five * 50);
    document.getElementById("six").innerHTML = '₹' + comma.format(six * 20);
    document.getElementById("seven").innerHTML = '₹' + comma.format(seven * 10);
    tot = (one * 2000) + (two * 500) + (three * 200) + (four * 100) + (five * 50) + (six * 20) + (seven * 10);
    sum = comma.format(tot);
    document.getElementById("h1").innerHTML = "₹ " + sum;


}