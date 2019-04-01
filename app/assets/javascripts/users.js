$("#fox").validate({
       rules : {
             username:{
                    required:true,
                  
             },
             password:{
                    required:true
             }
          },
             
        messages:{
             password:{
                required:"Please, insert your password "},
             username:{
                required:"Insert your username"
             }   
                        
       }
});

$("#form").validate({
       rules : {
             name:{
                    required:true,
                    minlength:10,
                    maxlength:50
             },
             email:{
                    required:true
             },
             username:{
                    required:true
             },
             password:{
                    required:true
                    minlength:6   
                }
              }  
       messages:{
             name:{
                    required:"Please, insert your name ",
                    minlength:"You name must contain at least 10 characteres"
             },
             email:{
                    required:"Please, insert a email"
             },
             username:{
                    required:"Please, insert a username"    
             },
             password:{
                required:"Please, insert a password ",
                    minlength:"You password must contain at least 6 characteres"     
            }
        }
});
