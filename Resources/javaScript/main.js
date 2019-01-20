$(document).ready(() => {
    const $logoDraw = $('#black-ex'),
        $wrapper = $('.wrapper'),
        $overlay = $('.overlay'),
        $a = $('.a-tags'),
        $prev = $('.prev a'),
        $next = $('.next a'),
        $work = $('.work'),
        $overlayOne = $('.overlayOne'),
        $overlayTwo = $('.overlayTwo'),
        $content = $('.content'),
        $display = $('.display'),
        $thumbnails = $('.container-grid'),
        $fadeIn = $('.fadeIn'),
        $home = $('.home');
    
    
    /*****************************IMAGE APPEND ********************************/
    
  
    
    
    

    /*********************************MENU BUTTON *****************************************/
    
    
    let tl = new TimelineMax({
        paused: true
    });
    tl.staggerFrom($a, 0.1, {
        scale: .2,
        x: -1000,
        ease: Bounce.easeIn
    }, 0.1);
    $wrapper.on('click', () => {
        if ($wrapper.hasClass('wrapper-position')) {
            $wrapper.removeClass('wrapper-position').
            addClass('change'); //add The change class 
            $wrapper.css({
                zIndex: '40',
                right: '0',
                top: '0'

            });
            $overlay.css('width', '40%');
            tl.play()
            //cancelInterval()


        } else if ($wrapper.hasClass('change')) {
            $wrapper.removeClass('change'). //remove the change class
            addClass('wrapper-position');
            $wrapper.css({
                zIndex: '', //goes back to default settings 
                right: '',
                top: ''

            });
            tl.reverse();

            //moveUpandDown()
            $overlay.css('width', '')

        }
    })


    function over() { //HOVER ON EACH NAV BUTTONS
        TweenMax.to($(this).find('.about'), 0.3, {
            borderBottom: '1px solid #e62739',
            borderTop: '1px solid #e62739',
            width: '-20%',
            textAlign: 'center'
        })
    }

    function out() {
        TweenMax.to($(this).find(".about"), 0.3, {
            borderBottom: '0 solid',
            borderTop: '0 solid',
            width: '45%',
            repeat: 0,
            overwrite: 'all'
        });

    }
    $a.hover(over, out) //END OF MENU BUTTON


    /*************************************LOGO ANIMATION ****************/
    TweenMax.set($logoDraw, {
        display: 'block'
    });
    TweenMax.set($('#xletter'), {
        stroke: '#e62739',
        strokeMiterlimit: "10",
        strokeWidth: "8"
    })
    const $logoDisplay = new TimelineMax({
        paused: true
    });
    $logoDisplay.from($('#black'), 0.5, {
            xPercent: -300,
            opacity: 0,
            ease: "easeOut"
        })
        .from($('#cellence'), 0.5, {
            xPercent: 300,
            opacity: 0,
            ease: "easeOut"
        })
        .from($('#xletter'), 0.5, {
            drawSVG: 0,
            stroke: '#000',
            strokeWidth: "160",
            opacity: 0
        })

    function play() {
        $logoDisplay.play()
    }
    let playTimeLine = play() //END OF LOGO ANIMATION

    /**********************************************HOVER ELEMENTS*/

    const $navTags = $('.nav--tags h3');
    const $grid = $('.grid-item');

    function navhover() {
        $grid.hover(function (e) {
            let view;
            view = $(e.currentTarget).find($navTags);
            view.css('opacity', '1')
            view.fadeIn('slow')

        }, function (e) {
            view = $(e.currentTarget).find($navTags);
            view.css('opacity', '0')
            view.fadeOut('fast')
        })


    }

    
    $prev.hover(() => {
        TweenMax.set($('#imgTopMove'), {
            opacity: 1,
            display: 'block'
        })
        TweenMax.set($('#backImg'), {
            x: -150
        })
        TweenMax.from($('#backImg'), 0.5, {
            x: 0
        })
        TweenMax.from($('#imgTopMove'), 0.5, {
            opacity: 0
        })
        
    }, () => {
        
        TweenMax.set($('#imgTopMove'), {
            opacity: 0,
            display: 'none'
        })
        
        TweenMax.from($('#imgTopMove'), 0.3,  {
            opacity: 1,
            display: 'block'
        })
        
        TweenMax.to($('#backImg'), 0.3, {
            x: 0
        })
    });
    
    $next.hover(() => {
        TweenMax.set($('#imgBottomMove'), {
            opacity: 1,
            display: 'block'
        })
        TweenMax.set($('#backImg2'), {
            x: 150
        })
        TweenMax.from($('#backImg2'), 0.5, {
            x: 0
        })
        TweenMax.from($('#imgBottomMove'), 0.5, {
            opacity: 0
        })
        

    }, () => {
        
        TweenMax.set($('#imgBottomMove'), {
            opacity: 0,
            display: 'none'
        })
        
        TweenMax.from($('#imgBottomMove'), 0.5,{
            opacity: 1,
            display: 'block'
        })
        
        
        TweenMax.to($('#backImg2'), 0.3, {
            x: 0
        })
        
    }) //END OF HOVER ELEMENTS


    // MENU ANIMATION TO DISPLAY CONTENTS
    TweenMax.set($content, {
        opacity: 1,
        width: '100%',
        display: 'block',
        zIndex: 9
    });
    TweenMax.set($fadeIn, {
        display: 'block'
    })
    TweenMax.set($overlayOne, {
        width: '100%',
        zIndex: 6
    })
    TweenMax.set($overlayTwo, {
        width: '100%',
        zIndex: 5
    })
    TweenMax.set($thumbnails, {
        opacity: 1,
        display: 'block'
    })
    TweenMax.set($grid, {
        display: 'block'
    })


    const animeOverlay = new TimelineMax({
        paused: true
    });
    animeOverlay.to($('#black'), 0.2, {
            xPercent: -300,
            opacity: 0,
            ease: "easeOut"
        })
        .to($('#cellence'), 0.2, {
            xPercent: 300,
            opacity: 0,
            ease: "easeOut"
        })
        .to($('#xletter'), 0.2, {
            drawSVG: 0,
            opacity: 0
        })
        .to($('.bottom'), 0.1, {
            opacity: 0
        })
        .to($display, 0.3, {
            x: '-200%',
            opacity: 0,
            ease: Expo.easeInOut
        }, 'same')
        .to($overlayOne, 0.5, {
            x: '-102%'
        }, 'same')
        .to($overlayTwo, 0.5, {
            x: '-102%',
            ease: Expo.easeInOut
        }, '-=0.1')
        .from($content, 0.5, {
            x: 500,
            opacity: 0,
            ease: Expo.easeInOut
        }, '-=0.5')
        .staggerFrom($fadeIn, 0.5, {
            cycle: {
                rotationY: [-90, 90],
                transformOrigin: 'center right'
            },
            opacity: 0,
            ease: Power3.easeIn
        }, '+=0.5')
        .staggerFrom($('.grid-item img'), 0.4, {
            cycle: {
                x: function (i) {
                    return i * 50;
                },
                ease: Back.easeIn
            },
            opacity: 0
        }, '+=0.5')
        .call(navhover)

    function animePlay() {
        animeOverlay.play()
    }

    function animeReverse() {
        animeOverlay.reverse()
    }


    //click EVENTS
    function clickMe() {
        $work.on('click', () => {
            if ($wrapper.hasClass('change')) {
                $wrapper.removeClass('change')
                    .addClass('wrapper-position');
                $wrapper.css({
                    zIndex: '',
                    right: '',
                    top: ''

                });
                tl.reverse();
                $overlay.css('width', '')
                animePlay();
            }
        })

        $home.on('click', () => {
            if ($wrapper.hasClass('change')) {
                $wrapper.removeClass('change')
                    .addClass('wrapper-position');
                $wrapper.css({
                    zIndex: '',
                    right: '',
                    top: ''
                })
                tl.reverse();
                $overlay.css('width', '')
                animeReverse()
            }

        })
    }
    let click = clickMe()

    //image grid
    const $container = $('.grid');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 106,
                gutter: 4
            }
        });
    });

    //scrollMAGIC
    const controller = new ScrollMagic.Controller();
    $grid.each(function () {
        TweenMax.set($grid, {
        display: 'block'
    })
         let ourScene = TweenMax.from($(this), 0.1, {autoAlpha: 0, scale: 0.5, x:100, ease: Power1.easeOut})
        let myscene = new ScrollMagic.Scene({
                triggerElement: this, //TARGETS ALL CHILDREN INDIVIDUALLY
                triggerHook: 0.9
            }).setTween(ourScene)
            .addTo(controller)
    }) //END OF SCROLLMAGIC
    
  










})
