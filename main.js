// Problem  -  ১. বাজেট ক্যালকুলেটর 
function totalBillForPay(computer, watch, coffee){
    if (typeof computer == "number" && typeof watch == "number" && typeof coffee == "number"){
        let result =computer * 1000 + watch * 260  + coffee * 50 +  " is your total Bill "   ;
        console.log(result);
    }
    else{
        console.log("Please Give A Valid number for Quentity for computer, watch, coffee")
    }
};
totalBillForPay(1 , 1 , 1);
totalBillForPay("hi" , 1 , 1);


 console.log("End Frist One");

//start problem 2
function product(sss) {



    var products = [{
            id: 1,
            title: "laptop",
            price: 567,
            description: "Laptop  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 2,
            title: "mobile",
            price: 367,
            description: "Mobile  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 3,
            title: "watch",
            price: 180,
            description: "Watch  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        },
        {
            id: 4,
            title: "coffee",
            price: 40,
            description: "Coffee  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi, facere sint incidunt saepe maxime."
        }


    ]




    if (sss.toLowerCase() == "laptop") {
        console.log(products[0]);
    } else if (sss.toLowerCase() == "mobile") {
        console.log(products[1]);
    } else if (sss.toLowerCase() == "watch") {
        console.log(products[2]);
    } else if (sss.toLowerCase() == "coffee") {
        console.log(products[3]);
    } else {
       console.log("We do not fond this product")
    }
}
product("laptop");
product("Mobile");
product("coffeE");
product("Porimoni");




console.log("End secound One");


// start third

// Problem - ৩. হিডেন কোটিপতি ক্যালকুলেটর 
function income(year){
    if(year % 4 != 0){
        console.log(365*10 + " taka in nonleap year");
    }
    else{
        console.log(366*10 + " taka in leap year");
    }
};
income(2000);
income(2001);


