//Define

//Part 1
let Form1 = document.querySelector('#part1form');
let inputname = document.querySelector("#userInput1");
let nameSubmit = document.querySelector("#submitButtonPart1");

//Part2
let Form2 = document.querySelector('#part2form');
let ingredients = document.querySelectorAll('#part2form input')

//Part 3
let Form3 = document.querySelector('#part3form');
let DateHair = document.querySelector("#DateHair");
let Hairdresser = document.querySelector("#userInput3");
let hairlength = document.querySelectorAll('#hair-length input');
let BookingSubmit = document.querySelector("#submitButtonPart3");

//Part4
let Form4 = document.querySelector('#part4form');
let username = document.querySelector("#username");
let BD = document.querySelector("#BD");
let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm");
let AccountSubmit = document.querySelector("#submitButtonPart4");


//function
//Part1

function part1(event){
    event.preventDefault();
    console.log(inputname.value);
    alert(inputname.value);
    Form1.reset();
};

//part2
function part2(event){
    event.preventDefault();
    let output="Your sandwich contains:";
    ingredientList=["bread"];
    ingredients.forEach(ingredient => ingredient.checked?ingredientList.push(ingredient.id):console.log(ingredient));
    alert(output + ingredientList.join(", "));
    Form2.reset();
}


//part3
function part3(event){
    event.preventDefault();
    hairlength.forEach(hair => hair.checked?shortLong=hair.id:console.log(hair.id))
    appointment = `Your haircut appointment is sceduled for ${DateHair.value} with ${Hairdresser.value} for ${shortLong} hair.`
    alert(appointment);
    Form3.reset();
}
//part4
function part4(event){
    event.preventDefault();
    let fail=0
    let emailcheck=email.value;
    let usernamecheck=username.value;
    let passwordcheck=password.value;
    let confirmcheck=confirm.value;
    emailcheck=emailcheck.split('@');
    (emailcheck.length==2 && Array.isArray(emailcheck) && fail==0)?fail=0:(fail==0?fail=1:fail=fail);
    (usernamecheck.length>=3 && fail==0)?fail=0:(fail==0?fail=2:fail=fail);
    (passwordcheck.length>=4 && fail==0)?fail=0:(fail==0?fail=3:fail=fail);
    (confirmcheck==passwordcheck && fail==0)?fail=0:(fail==0?fail=4:fail=fail);
    switch (fail){
        case 0:
            alert(`Congratulations, you have created an account with username: ${username.value} and email ${email.value}`);
            Form4.reset();
            break;
        case 1:
            alert("error code 1, not a email")
            break;
        case 2:
            alert("error code 2,username below 3 char")
            break;
        case 3:
            alert("error code 3,password below 4 char")
            break;
        case 4:
            alert("error code 4, password mismatch")
            break;
    } 

    
}

//Listener
//Part1
Form1.addEventListener("submit",function(event){
    part1(event);
});

//part2
Form2.addEventListener("submit",function(event){
    part2(event);
});
//part3
Form3.addEventListener("submit",function(event){
    part3(event);
});

Form4.addEventListener("submit",function(event){
    part4(event);
});



