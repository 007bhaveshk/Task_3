function validateform(){  
    var name=document.myform.name.value;  
    var email=document.myform.email.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(email){   
      return false;  
      }  
    }