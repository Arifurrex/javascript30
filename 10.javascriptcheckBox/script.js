const checkBoxs = document.querySelectorAll('.inbox input[type = "checkbox"]');
let lastChecked; // আমরা যখন input এ click করব তখন টা lastchecked variable এ store করব 


function handleChecked(e){
  let inbetween = false;

  // যদি shiftkey down হয়   console.log(e.shiftKey); এবং
  // input tag ট্যাগ টা যদি checked হয়   console.log(this.checked);
  
  if(e.shiftKey && this.checked){
    checkBoxs.forEach(checkBox=>{
      console.log(checkBox);
      if(checkBox === this || checkBox === lastChecked){
        console.log(checkBox);
        // inbetween = true 
        inbetween = !inbetween; // turn inbetween true
        console.log('hello');
      }
      console.log(inbetween);
      //condition true hole checkbox.checked = true kore dibo
      if(inbetween){
        checkBox.checked =true;
      }
    })
  }
  lastChecked = this; // this মানে হল যে checkbox click করেছি সেটা 
}
checkBoxs.forEach(checkBox=>{
  checkBox.addEventListener('click',handleChecked);
})