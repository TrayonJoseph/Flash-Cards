let answer;
$(document).ready (function(){   })

$.ajax({
        type: 'GET',
        url: '/flash',
        success: function(data){
            // data.forEach(card => {
                let random = Math.floor(Math.random() * data.length)
                console.log(data[random].question)
                $("#question").html(data[random].question)
                $("#hint").html(data[random].hint)
                $("#answer").html(data[random].answer)
            // });
            
        }
        
        ,
   
         error : function(request,error){
             console.log(error)
             console.log(request)
         }
   
   
     })

