/*===================================
=            GLOBAL VARS            =
===================================*/
var scrollMagicIsDestroyed = false;
var controllerLeave = new ScrollMagic({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

var controllerEnter = new ScrollMagic({
    globalSceneOptions: {
        triggerHook: "onEnter", 
        duration: $(window).height()*2
    }
});


/*=================================
=            DOM READY            =
=================================*/
$(function() {

    $('#site-nav a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 100
        }, 1000);
        return false;
    });

    // Only if not IE, not touch, and not mobile
    if ($(window).width() > 768 && !is_touch_device() && !is_ie()) {
        createScrollMagic();
    } else {
        $('body').addClass('no-scroll-magic');
        destroyScrollMagic();
        scrollMagicIsDestroyed = true;
        // Force better DOM repainting hack. Helps on mobile
        $('html').addClass('force-gpu').removeClass('force-gpu');
    }
});




/*===================================
=            WINDOW LOAD            =
===================================*/
$(window).load(function() {
    $('body').addClass('show-site');
});




/*=====================================
=            WINDOW RESIZE            =
=====================================*/
$(window).resize(function() {

    // Kill for small screens
    if ($(window).width() <= 768 && !scrollMagicIsDestroyed) {
        destroyScrollMagic();
        scrollMagicIsDestroyed = true;
        $('body').addClass('no-scroll-magic');
    }

    // Force better DOM repainting hack. Helps on mobile
    $('html').addClass('force-gpu').removeClass('force-gpu');
});



/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/
function createScrollMagic() {

    // Zoom Stuff 
    var zoomTween = TweenMax.fromTo('.zoomed-action', 1,
        {
            scale: 5
        },
        {
            scale: 1
        }
    );
    var zoomScene = new ScrollScene({
        triggerElement: '#call-to-action',
        duration: 1500, /* distance of zoom scroll */
        offset: 0
    })
    .addTo(controllerLeave)
    .setTween(zoomTween)
    .setPin('#call-to-action')
    .on('progress', function(e) {
        if (e.progress * 100 >= 90) {
            $('body').addClass('show-nav');
        } else {
            $('body').removeClass('show-nav');
        }
    });

    var ctaImgTween = TweenMax.fromTo('.zoomed-action-overlay', 1,
        {
            opacity: 0.7
        },
        {
            opacity: 0
        }
    );
    var ctaImgScene = new ScrollScene({
        triggerElement: '#call-to-action',
        duration: 1500,
        offset: 0
    })
    .addTo(controllerLeave)
    .setTween(ctaImgTween);

    // Call to Action Text Stuff
    var ctaTextTween = TweenMax.fromTo('#call-to-action h1', 1,
        {
            scale: 1,
            x: '-50%',
            y: '-100%',
            opacity: 1
        },
        {
            scale: 0.75,
            x: '-50%',
            y: '-100%',
            opacity: 0
        }
    );
    var ctaTextScene = new ScrollScene({
        triggerElement: '#call-to-action',
        duration: 500,
        offset: 0
    })
    .addTo(controllerLeave)
    .setTween(ctaTextTween);




    //Parallax effect
    var parallaxFirst = TweenMax.from('#parallax-first > div', 1,
        {
            top: '-80%',
            ease: Linear.easeNone
        }
    );
    new ScrollScene({
        triggerElement: '#parallax-first'
    })
    .setTween(parallaxFirst)
    .addTo(controllerEnter);

    var parallaxSecond = TweenMax.from('#parallax-second > div', 1,
        {
            top: '-50%', 
            ease: Linear.easeNone
        }
    );
    new ScrollScene({
        triggerElement: '#parallax-second'
    })
    .setTween(parallaxSecond)
    .addTo(controllerEnter);


    //Experience
    var pinExperiences = new TimelineMax()
        .add(TweenMax.to('#education', 1,
            {
                left: '-140%',
                delay: 0.2,
                opacity: -0.5
            }
        ));

    new ScrollScene({
        triggerElement: '#experiences',
        duration: 1600
    })
    .setTween(pinExperiences)
    .setPin('#experiences')
    .addTo(controllerLeave);

    var pinExperiences2 = new TimelineMax()
        .add(TweenMax.to('#work-experience', 1,
            {
                right: 0,
                delay: 0.2,
                opacity: 1
            }
        ));
    new ScrollScene({
        triggerElement: '#experiences',
        duration: 1300
    })
    .setTween(pinExperiences2)
    .addTo(controllerLeave);


    //Skills
    var abilitiesAnimate = new TimelineMax()
        .add([

            TweenMax.fromTo('.css-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.html-percent', 0.6,
            {
                opacity: 0
            },
            {
                width: '100%',
                opacity: 1,
                ease: Power3.easeOut
            }
            ),

            TweenMax.fromTo('.php-percent', 0.7, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.jquery-percent', 0.5,
                {
                    opacity: 0
                },
                {
                    width: '90%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.javascript-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '70%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.xml-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '0%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.json-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '0%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.bootstrap-percent', 0.7, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.wordpress-percent', 0.8, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.less-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '60%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.sass-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '80%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            ),

            TweenMax.fromTo('.angular-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '0%',
                    opacity: 1,
                    ease: Power3.easeOut
                }
            )

        ]);

    new ScrollScene({
        triggerElement: '#abilities'
    })
    .setTween(abilitiesAnimate)
    .addTo(controllerLeave);


    var toolsAnimate = new TimelineMax()
        .add([

            TweenMax.fromTo('.sublime-text-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.git-percent', 0.6,
            {
                opacity: 0
            },
            {
                width: '100%',
                opacity: 1,
                ease: Power3.easeOut,
                delay: 1
            }
            ),

            TweenMax.fromTo('.filezilla-percent', 0.7, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.poedit-percent', 0.6,
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.photoshop-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '50%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.dreamweaver-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '90%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.ms-office-percent', 0.5, 
                {
                    opacity: 0
                },
                {
                    width: '70%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.os-x-percent', 0.7, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.windows-percent', 0.8, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.mamp-percent', 0.6, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            ),

            TweenMax.fromTo('.scout-percent', 0.7, 
                {
                    opacity: 0
                },
                {
                    width: '100%',
                    opacity: 1,
                    ease: Power3.easeOut,
                    delay: 1
                }
            )

        ]);

    new ScrollScene({
        triggerElement: '#skills'
    })
    .setTween(toolsAnimate)
    .addTo(controllerLeave);


}

function destroyScrollMagic() {
    controllerLeave.destroy(true)
    controllerLeave = null;
    $('*').removeAttr('style');
}


function is_touch_device() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
};

function is_ie() {
    // Disable for IE
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        return true;
    }
}