// var myDate = document.getElementById("dateInput");

// myDate.addEventListener("blur", () => {
//   setTimeout(myFunc, 1000);
// });

// function myFunc() {
//   return (function () {
//     if (myDate.value >= "2020-01-01" && myDate.value <= "2020-01-31") {
//       document.getElementById('you').innerHTML = 'January'
//       console.log("January");
//     } else {
//         document.getElementById('you').innerHTML = 'IT is Else'

//       console.log("it is some other date: " + myDate.value);

//     }
//   })();
// }

// let mydate=window.document.getElementById("mydate");
// let olddate=mydate.value;
// let isChanged = function(){
//   if(mydate.value!== olddate){
//     olddate=mydate.value;
//     return true;
//   };
//   return false;
// };
// mydate.addEventListener("blur", function(){
//   if(isChanged())
//     alert("changed!");
// });

// var myDate = document.getElementById("dateInput");
// var oldDate = myDate.value;
// var isChanged = function () {
//   if (myDate.value !== oldDate) {
//     oldDate = myDate.value;
//     return true;
//   }
//   return false;
// };

// myDate.addEventListener("input", function () {
//   if (isChanged()) {
//     var dateValue = myDate.value.slice(5);
//     console.log(dateValue);
//     var days = dateValue.slice(3);
//     console.log(days);
//     var month = dateValue.slice(0, 2);
//     console.log(month);
//   }
// });