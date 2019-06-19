$(window).scroll(function(){
    var scrollT=document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollT);
    var backTop_w=$("#world").offset().top - $(window).height()/2;
     console.log(backTop_w);
    if(scrollT > backTop_w){
        $(".a1").addClass("animated bounceInLeft show").removeClass("fade");
        $(".a2").addClass("animated bounceInUp show").removeClass("fade");
        $(".a3").addClass("animated bounceInDown show").removeClass("fade");
        $(".a4").addClass("animated bounceInRight show").removeClass("fade");
    }
    var backTop_acc=$("#accessory").offset().top - $(window).height()/2;
    // console.log(backTop_acc);
    if(scrollT > backTop_acc){
        $(".a01").addClass("animated bounceInLeft show").removeClass("fade");
        $(".a02").addClass("animated bounceInUp show").removeClass("fade");
        $(".a03").addClass("animated bounceInDown show").removeClass("fade");
        $(".a04").addClass("animated bounceInRight show").removeClass("fade");
    }
    var backTop_acc=$("#accessory").offset().top - $(window).height()/2;
    // console.log(backTop);
    if(scrollT > backTop_acc){
        $(".a012").addClass("animated bounceInRight show").removeClass("fade");
        $(".a022").addClass("animated bounceInUp show").removeClass("fade");
        $(".a032").addClass("animated bounceInDown show").removeClass("fade");
        // $(".a042").addClass("animated bounceInRight show").removeClass("fade");
    }
    var backTop_s=$("#star").offset().top - $(window).height()/2;
    // console.log(backTop);
    if(scrollT > backTop_s){
        $(".a001").addClass("animated fadeInRight show").removeClass("fade");
        $(".a002").addClass("animated bounceInDown show").removeClass("fade");
        $(".a003").addClass("animated bounceInUp show").removeClass("fade");
        $(".a004").addClass("animated fadeInLeft show").removeClass("fade");
    }
    var backTop_as=$("#serve").offset().top - $(window).height()/2;
    // console.log(backTop);
    if(scrollT > backTop_as){
        $(".a0001").addClass("animated bounceInLeft show").removeClass("fade");
        $(".a12").addClass("animated bounceInLeft show").removeClass("fade");
        $(".a0003").addClass("animated bounceInDown show").removeClass("fade");
        $(".a0004").addClass("animated bounceInRight show").removeClass("fade");
        $(".a0005").addClass("animated bounceInRight show").removeClass("fade");
    }
});