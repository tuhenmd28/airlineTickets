$('html').removeClass('rtl');
$(document).ready(function(){
    $("form .formcontent .passenger li").click(function(){
        $(".passenger .addpsgerwraper").toggle(500);
    })
    $("button.ok.btn.btn-primary").click(function(){
        $(".passenger .addpsgerwraper").hide(500);
    })   

})

let passenger = $(".passenger .addpsgerwraper .passengerAdd span");
let passenger1 =Number( passenger[0].textContent);
let passenger2 = Number(passenger[1].textContent);
let passenger3 = Number(passenger[2].textContent);
// let passenger34 = Number(passenger[3].html());
let sum = passenger1 + passenger2 + passenger3;
let btn;
let count;
$("form .formcontent .passenger .invisible").val(Number(sum.slice(0,1)));

// console.log(sum);
function addition(e){
    btn = e;
    count = Number(btn.previousElementSibling.textContent)
    if(count<=10){
        ++count;
    }
    btn.previousElementSibling.innerHTML = count;
     passenger1 =Number( passenger[0].textContent);
     passenger2 = Number(passenger[1].textContent);
     passenger3 = Number(passenger[2].textContent);
    // console.log(passenger1);    
    sum = passenger1 + passenger2 + passenger3;
    // console.log(sum);
    if(sum==1){
        sum =  `${sum} passenger`;
    }else{
        sum =  `${sum} passengers`;

    }
    $("form .formcontent .passenger li samp").text(sum);
    $("form .formcontent .passenger .invisible").val(Number(sum.slice(0,1)));

}
function sumtract(e){
    btn = e;
    count = Number(btn.nextElementSibling.textContent)
    if(count>=2){
        --count;
    }
    btn.nextElementSibling.innerHTML = count;
     passenger1 =Number( passenger[0].textContent);
     passenger2 = Number(passenger[1].textContent);
     passenger3 = Number(passenger[2].textContent);
    // console.log(passenger1);    
    sum = passenger1 + passenger2 + passenger3;
    // console.log(sum);
    if(sum==1){
        sum =  `${sum} passenger`;
    }else{
        sum =  `${sum} passengers`;
        
    }
    $("form .formcontent .passenger li samp").text(sum);
    $("form .formcontent .passenger .invisible").val(Number(sum.slice(0,1)));

}
function sumtract1(e){
    btn = e;
    count = Number(btn.nextElementSibling.textContent)
    if(count>=1){
        --count;
    }
    btn.nextElementSibling.innerHTML = count;
     passenger1 =Number( passenger[0].textContent);
     passenger2 = Number(passenger[1].textContent);
     passenger3 = Number(passenger[2].textContent);
    // console.log(passenger1);    
    sum = passenger1 + passenger2 + passenger3;
    // console.log(sum);
    if(sum==1){
        sum =  `${sum} passenger`;
    }else{
        sum =  `${sum} passengers`;

    }
    $("form .formcontent .passenger li samp").text(sum);
    $("form .formcontent .passenger .invisible").val(Number(sum.slice(0,1)));
}
// $("form .formcontent .passenger li samp").text(sum);
// function addition(){
//     console.log($(this));
// }