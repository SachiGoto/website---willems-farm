


        $(document).ready(function(){

           
            //Event Focus - when the textbox is selected. Focus will be triggered
            // Event keyup - when the user starts typing.
            // Event Blur - when the user leave the text box. 

            $("#first_name").focus(function(){
                $("#firstname-message").show();
            });

            $("#last_name").focus(function(){
                $("#lastname-message").show();
            });

           

            $("#email").focus(function(){
                $("#email_message").show();
            });

            // $("#phone_number").focus(function(){
            //     $("#phone_message").show();
            // });


            $("#first_name").blur(function(){

                if (checkFistName($(this).val()) == false){
                    // console.log("empty");
                    $("#firstname-message").show();
                    $("#firstname-message").removeClass("success").addClass("error");
                    $("#firstname_success").hide();
                    $("#firstname_error").show();
                    console.log("fail :(");

                }else{
                    $("#firstname-message").hide();
                    // $("#firstname-message").removeClass("error").addClass("success");
                    $("#firstname_success").show();
                    $("#firstname_error").hide();
                    console.log("success!");
                   
                    return $("#firstname-message");
                
                //   console.log("not empty");
                 
                };

      });


      $("#last_name").blur(function(){

        if (checkLastName($(this).val()) == false){
            // console.log("empty");
            $("#lastname-message").show();
            $("#lastname-message").removeClass("success").addClass("error");
            $("#lastname_success").hide();
            $("#lastname_error").show();
            console.log("fail :(");

        }else{
            $("#lastname-message").hide();
            // $("#firstname-message").removeClass("error").addClass("success");
            $("#lastname_success").show();
            $("#lastname_error").hide();
            console.log("success!");
            showSubmit();
            return $("#last_name");
          
        
        //   console.log("not empty");
         
        };

});

            $("#email").keyup(function(){

                //console.log($(this).val());
                // isEmail($(this).val());
                // console.log($(this).val());
                // console.log(isEmail($(this).val()));

                // if(!isEmail($(this).val()))
                // this means (isEmail($(this).val()) == false)

                if(isEmail($(this).val()) == false){
                        
                        $("#email_message").removeClass("success").addClass("error");
                        $("#email_success").hide();
                        $("#email_error").show();
                        console.log("fail :(");

                }else{
                        $("#email_message").removeClass("error").addClass("success");
                        $("#email_error").hide();
                        console.log("success!");
                        $("#email_success").show();
                        
                        return $("#email_message");
                };

         


                
            });





            $("#phone_number").keyup(function(){
              

                // console.log($("#phone_number").val().length);

                  if( ($(this).val().length ) < 10 || checkPhoneNumber($(this).val()) == false ){
            
                      $("#phone_message").show();
                    // console.log($("#phone_number").val().length);
                    // console.log("hello");
                    console.log("fail :(");
                    $("#phone_message").removeClass("success").addClass("error");
                    
                    // $("#password1-message").show();
                    $("#phone_success").hide();
                    $("#phone_error").show();

                  }else{
                    $("#phone_message").hide();
                    $("#phone_error").hide();
                    $("#phone_success").show();
                    console.log("success!");
                    return $("#phone_number");
                    

                  
                }
                 

                  });



          
            



       


        });

        function isEmail(email) { 
            
            showSubmit();
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);

        };

        function isCorrectFormat(email){

            //john@vanarts.com, a@a.c, a@abc.co. 
            //1. after a series of characters or at least one character, there should be the first occurence of '@. It cen not start with a anything other than.

            //2. After '@' there should be a seriers of characters of at least one character until the first occurence of a '.' . It can not start with anything other than a character. 

            //3. There should be at least one or a seriers of characters after the '.' It cannot be a number. 

            //4. No uppercase letters.

            // 5. There cannot be more than one '@' . 


            console.log(email)


        }

        isCorrectFormat("john@vanarts.com");

  
        function checkPhoneNumber(phoneNumber){
             showSubmit();
          return /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phoneNumber);
       
          

        // function countPasswordChars(password){
        //     if(password.length >=6)
        //     return true;

        //     else
        //     return false;
        };



        function checkFistName(first_name){

                if(first_name == "" ){
                    return false;
                }else{
                    showSubmit(true);
                    return true;
                }

        };


        function checkLastName(last_name){

            if(last_name == "" ){
                return false;
            }else{

                return true;
            }

    };

    function showSubmit(){
        // console.log("works");
        // console.log(Boolean(first_name.value));
        // console.log(Boolean(last_name.value));

        if (last_name.value && first_name.value && email.value ){
             
         
            $(".btn").show();
               
        };
    }

