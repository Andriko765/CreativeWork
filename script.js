const menu = document.querySelector('#mobile_menu')
const menuLinks  = document.querySelector('.navbar_menu')


//Display Mobile Menu
const mobileMenu  = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

}

menu.addEventListener('click', mobileMenu)




document.addEventListener("DOMContentLoaded", function() {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
    OverlayScrollbars(document.querySelectorAll("body"), {  className            : "os-theme-light",
        resize               : "none",
        sizeAutoCapable      : true,
        clipAlways           : true,
        normalizeRTL         : true,
        paddingAbsolute      : false,
        autoUpdate           : null,
        autoUpdateInterval   : 33,
        updateOnLoad         : ["img"],
        nativeScrollbarsOverlaid : {
            showNativeScrollbars   : false,
            initialize             : true
        },
        overflowBehavior : {
            x : "scroll",
            y : "scroll"
        },
        scrollbars : {
            visibility       : "auto",
            autoHide         : "never",
            autoHideDelay    : 800,
            dragScrolling    : true,
            clickScrolling   : false,
            touchSupport     : true,
            snapHandle       : false
        },
        textarea : {
            dynWidth       : false,
            dynHeight      : false,
            inheritedAttrs : ["style", "class"]
        },
        callbacks : {
            onInitialized               : null,
            onInitializationWithdrawn   : null,
            onDestroyed                 : null,
            onScrollStart               : null,
            onScroll                    : null,
            onScrollStop                : null,
            onOverflowChanged           : null,
            onOverflowAmountChanged     : null,
            onDirectionChanged          : null,
            onContentSizeChanged        : null,
            onHostSizeChanged           : null,
            onUpdated                   : null
        }});
});


function progressBarHTML(progressVal,totalPercentageVal = 100) {
    var strokeVal = (3.2 * 100) /  totalPercentageVal;
    var x = document.querySelector('.progress-circle-prog_html');
    x.style.strokeDasharray = progressVal * (strokeVal)+" "+"999" ;


}

progressBarHTML(85,100);

function progressBarJS(progressValjs,totalPercentageValjs = 100) {
    var strokeValjs = (3.2 * 100) /  totalPercentageValjs;
    var x = document.querySelector('.progress-circle-prog_js');
    x.style.strokeDasharray = progressValjs * (strokeValjs)+" "+"999" ;


}

progressBarJS(80,200);

function progressBarCSS(progressVal,totalPercentageVal = 100) {
    var strokeVal = (3.2 * 100) /  totalPercentageVal;
    var x = document.querySelector('.progress-circle-prog_css');
    x.style.strokeDasharray = progressVal * (strokeVal)+" "+"999" ;


}


progressBarCSS(75,100);

