 
var imagesLoaded = 0;
var numberOfImages = 1 + 29 * 2; //29 characters and 2 for each

function anotherImageLoaded(){
    imagesLoaded++;
    $('.pace-progress').css({
      '-webkit-transform' : 'translate3d(' + ((imagesLoaded/ numberOfImages) * 100) + '%, 0px, 0px)',
      '-moz-transform'    : 'translate3d(' + ((imagesLoaded/ numberOfImages) * 100) + '%, 0px, 0px)',
      '-ms-transform'     : 'translate3d(' + ((imagesLoaded/ numberOfImages) * 100) + '%, 0px, 0px)',
      '-o-transform'      : 'translate3d(' + ((imagesLoaded/ numberOfImages) * 100) + '%, 0px, 0px)',
      'transform'         : 'translate3d(' + ((imagesLoaded/ numberOfImages) * 100) + '%, 0px, 0px)'
    });
    if(imagesLoaded === numberOfImages){
        $('.pace').removeClass('pace-active').addClass('pace-inactive');
        imagesDoneLoading();
    }
}
 
function imagesDoneLoading() {
        $('#closeIntro').click(function(e) {
            if($('#skipTutorial').is(':checked')){
                for(var i in firstTime){
                    firstTime[i] = false;
                }
            }else{
                    $('#showShop').addClass('breathing');
            }
            if ($('#screenName').val() === "") {
                $("#screenName").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            } else {
                name = $('#screenName').val();
                $('#startInfo').toggle();
                $('#introTeamBox').toggle();
                setTimeout(function() {
                    $('#introTeamBox').fadeOut('slow');
                }, 1000)
            };
            playerTeam = 'blue';
             if(playerTeam === 'blue'){
                //cacheMapTiles()
                zoomPanTo(castles[1].x, castles[1].y, zoom, { x: false, y: false }, true)
                zoomToOne(castles[1].x, castles[1].y, .35);
            
             }else if(playerTeam === 'orange'){
                 //cacheMapTiles(true);
                 zoomPanTo(castles[4].x, castles[4].y, zoom, { x: false, y: false }, true)
                 zoomToOne(castles[4].x, castles[4].y, .35);
             }
        });
        $('#closeIntro').removeClass('disabled');
      
    };

function runTips(i) {
    if ($('#startInfo').is(":visible")) {
        setTimeout(function() {
            $('#didYouKnow').fadeTo('slow', .01, function() {
                $('#didYouKnow').text(tips[i]);
                $('#didYouKnow').fadeTo( 'slow', 1);
                i++;
                i %= tips.length;
                runTips(i);
            })
        }, 3000);
    }
}
var quality = 'low';
function cacheMapTiles(reverse) {
    function loadThem(i){
        var img = new Image();
        img.onload = anotherImageLoaded;
        img.src = 'img/tutorialMap.png';
        img = null;
    }
    loadThem();
}

cacheMapTiles();
runTips(0);

