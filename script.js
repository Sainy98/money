

    function fun() {
        one = document.getElementById("2000").value;
        two = document.getElementById("500").value;
        three = document.getElementById("200").value;
        four = document.getElementById("100").value;
        five = document.getElementById("50").value;
        six = document.getElementById("20").value;
        seven = document.getElementById("10").value;

        document.getElementById("one").innerHTML = '₹' + one * 2000;
        document.getElementById("two").innerHTML = "₹" + two * 500;
        document.getElementById("three").innerHTML = '₹' + three * 200;
        document.getElementById("four").innerHTML = '₹' + four * 100;
        document.getElementById("five").innerHTML = '₹' + five * 50;
        document.getElementById("six").innerHTML = '₹' + six * 20;
        document.getElementById("seven").innerHTML = '₹' + seven * 10;
        total = (one * 2000) + (two * 500) + (three * 200) + (four * 100) + (five * 50) + (six * 20) + (seven * 10);
        console.log(total);
        document.getElementById("h1").innerHTML = "₹ " + total ;

        
    }