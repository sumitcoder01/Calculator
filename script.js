console.log("Welcome To My Calculator..")
//Initlization
let string="";
let result=document.getElementById('result');
let buttons=Array.from(document.querySelectorAll('.btn'));
//Event Listiner
result.addEventListener('click',()=>{
    if(string!=""){
      string="";
      result.value="Ans "+result.value;
    }
});
buttons.forEach(button =>{
button.addEventListener("click",()=>{
        let val=button.innerHTML;
        if(val=='='){
            try {
                string=eval(string);

            } catch (error) {
                string="Invalid Operation";
            }
            console.log("Result is ",string);
        }
        else if(val=='C'){
            string="";
            console.log("Reset..");
        }
        else if(val=='%'){
            string+="/100";
        }
        else{
            string +=val;
        }
        result.value=string;
    });
});