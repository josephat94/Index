$(document).ready(function() {
    $('#aviso').hide(0);
    
    
            $(window).scroll(function(){
    
    
                    var windowHeight = $(window).scrollTop();
                    var about = $("#about").offset();
    
                    about = about.top;
    
    
                    if(windowHeight >= about  ){
                    
                        
                        $('#s1').fadeIn(500);
                        $('#s2').fadeIn(500);
                        $('#s3').fadeIn(500);
                        $('#s4').fadeIn(500);
    
                    }else{
                        $('#s1').fadeOut(500);
                        $('#s2').fadeOut(500);
                        $('#s3').fadeOut(500);
                        $('#s4').fadeOut(500);
    
                    }
    
    
            });
    
    });