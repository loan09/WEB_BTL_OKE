$(document).ready(
    /////sticky-nav
    function(){
        $('.info').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky')
                }else{
                    $('nav').removeClass('sticky')
                }
            },{
                offset: '0px'
            }
        )
    
    ////smooth sroll jqeury: seacher google
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);/* 500 laf thời gian cuộn đến các phần*/
            event.preventDefault();
        });
    }
)