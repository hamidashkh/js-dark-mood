// 1

      var r=4;
      var s= r*r*(Math.PI);
      console.log(s);

//2

   var time=new Date();
   var hour=time.getHours();

   function timeAlert(){
      if(hour>=5 && hour<12){
          alert('Good Morning');
      }
      else if(hour>=12 && hour<17){
          alert('Good afternoon');
      }
      else if(hour>=17 && hour<22){
          alert('Good evening');
          document.body.style.backgroundColor='black';
          document.body.style.color='white';
      }
      else{
          alert('Good night');
          document.body.style.backgroundColor='black';
          document.body.style.color='white';
      }
   }
  timeAlert();

//3

function moonMode(){
  
    if(document.body.style.backgroundColor==='black'){
        document.body.style.backgroundColor='white';
        document.body.style.color='black';        
    }else{
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
    }
}
