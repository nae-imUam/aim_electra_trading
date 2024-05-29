


const consultationSection = document.getElementById('consultationSection');
const formSlideOut = document.getElementById('formSlideOut');
/*  
consultationSection.addEventListener('mouseenter', () => {
    formSlideOut.classList.remove('hidden');
});

formSlideOut.addEventListener('mouseleave', () => {
    formSlideOut.classList.add('hidden')
});
$(document).ready(function() {
    $('#close-toggle2').click(function() {
        formSlideOut.classList.add('hidden');
    });
});
*/
formSlideOut.addEventListener('mouseleave', () => {
    formSlideOut.classList.add('hidden')
});

$(document).ready(function() {
    let isHoverConsultation2 = false;
    let isHoverForm2 = false;

    $('#consultationSection').hover(
        function() {
            isHoverConsultation2 = true;
            formSlideOut.classList.remove('hidden').slideDown(100);
        },
        function() {
            isHoverConsultation2 = false;
            hideIfNotHovered();
        }
    );

    $('#formSlideOut').hover(
        function() {
            isHoverForm2 = true;
        },
        function() {
            isHoverForm2 = false;
            hideIfNotHovered();
        }
    );

    $('#close-toggle2').click(function() {

            formSlideOut.classList.add('hidden').slideDown(100);

        });
    

    function hideIfNotHovered() {
        if (!isHoverConsultation2 && isHoverForm2) {
            formSlideOut.classList.add('hidden').slideDown(100);

        }
    }
});


const consultationSection2 = document.getElementById('consultationSection2');
const fso2 = document.getElementById('formSlideOut2');
$(document).ready(function() {
    let isHoveringConsultation = false;
    let isHoveringForm = false;

    $('#consultationSection2').hover(
        function() {
            isHoveringConsultation = true;
            fso2.classList.remove('hidden').slideDown(100);
        },
        function() {
            isHoveringConsultation = false;
            hideFormIfNotHovered();
        }
    );

    $('#formSlideOut2').hover(
        function() {
            isHoveringForm = true;
        },
        function() {
            isHoveringForm = false;
            hideFormIfNotHovered();
        }
    );

    $('#clsbtn3').click(function() {
        fso2.classList.add('hidden').slideDown(100);
    });

    function hideFormIfNotHovered() {
        if (!isHoveringConsultation && !isHoveringForm) {
            fso2.classList.add('hidden').slideDown(100);
        }
    }
});



$(document).ready(function() {
    $('#chat-button').on('click', function() {
        $('#chatbox').toggleClass('hidden');
    });

    $('#chatbox-close').on('click', function() {
        $('#chatbox').addClass('hidden');
    });
});



$(document).ready(function() {
    $('#menu-toggle').on('click', function() {
        $('#sidebar').toggleClass('translate-x-0');
        
    });

    $('#menu-close').on('click', function() {
        $('#sidebar').toggleClass('translate-x-0');
        
    });
});


$(document).ready(function() {
    $('.accordion-button').on('click', function() {
        // Toggle the clicked button's corresponding content
        $(this).next('.accordion-content').slideToggle();

        // Hide other accordion contents
        $('.accordion-content').not($(this).next()).slideUp();
    });

    $('.accordion-button').on('hover', function() {
        // Toggle the clicked button's corresponding content
        $(this).next('.accordion-content').slideToggle();

        // Hide other accordion contents
        $('.accordion-content').not($(this).next()).slideUp();
    });
});



$(document).ready(function() {
    $('.accordion-button1').on('click', function() {
        // Toggle the clicked button's corresponding content
        $(this).next('.accordion-content').slideToggle();

        // Hide other accordion contents
        $('.accordion-content').not($(this).next()).slideUp();
    });

    $('.accordion-button1').on('hover', function() {
        // Toggle the clicked button's corresponding content
        $(this).next('.accordion-content').slideToggle();

        // Hide other accordion contents
        $('.accordion-content').not($(this).next()).slideUp();
    });
});

$(document).ready(function() {
    const modal = $('#imageModal');
    const modalImage = $('#modalImage');
    modal.addClass('hidden');

    
        
    

    $('#imageToClick').on('click', function() {
        modal.removeClass('hidden');
        modal.show();
    });

    $('#closeModal').on('click', function() {
        modal.addClass('hidden');
        modal.hide();
        modalImage.css({ 'transform': 'scale(1)' });
    });

    modal.on('click', function(event) {
        if (!$(event.target).closest(modalImage).length) {
            modal.addClass('hidden');
            modal.hide();
            modalImage.css({ 'transform': 'scale(1)' });
        }
    });

    $('#zoomInImage').on('click', function() {
        let currentScale = modalImage.css('transform') === 'none' ? 1 : parseFloat(modalImage.css('transform').split(',')[3]);
        currentScale = currentScale < 2 ? currentScale + 0.2 : 2;
        modalImage.css({ 'transform': `scale(${currentScale})` });
    });

    $('#zoomOutImage').on('click', function() {
        let currentScale = modalImage.css('transform') === 'none' ? 1 : parseFloat(modalImage.css('transform').split(',')[3]);
        currentScale = currentScale > 0.5 ? currentScale - 0.2 : 0.5;
        modalImage.css({ 'transform': `scale(${currentScale})` });
    });

    $('#fullScreenImage').on('click', function() {
        if (modalImage[0].requestFullscreen) {
            modalImage[0].requestFullscreen();
        } else if (modalImage[0].webkitRequestFullscreen) { // Safari
            modalImage[0].webkitRequestFullscreen();
        } else if (modalImage[0].msRequestFullscreen) { // IE11
            modalImage[0].msRequestFullscreen();
        }
    });

    $('#shareImage').on('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this image',
                url: window.location.href
            }).catch(console.error);
        } else {
            alert('Sharing not supported by your browser.');
        }
    });
});

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: '9MRX86vrYSc',
        playerVars: {
            controls: 0,
            rel: 0,
            playsinline: 1,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            fs: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 1,
            mute: 1 // Mute the video
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.seekTo(10);
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.seekTo(10);
        player.playVideo();
    }

    if (event.data === YT.PlayerState.PLAYING) {
        checkVideoTime();
    }
}

function checkVideoTime() {
    setTimeout(() => {
        if (player.getCurrentTime() >= 30) {
            player.seekTo(10);
        }
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            checkVideoTime();
        }
    }, 1000); // Check every second
}



// Number increasing function
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('[data-target]');
    const speed = 200; // The lower the number, the faster the increment

    const countUp = (target, element) => {
        const updateCount = () => {
            const start = parseInt(element.innerText, 10);
            const end = parseInt(target, 10);
            const increment = Math.ceil(end / speed);

            if (start < end) {
                element.innerText = start + increment;
                setTimeout(updateCount, 1);
            } else {
                element.innerText = end;
            }
        };
        updateCount();
    };

    const options = {
        root: null,
        threshold: 0,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.getAttribute('data-target');
                countUp(target, entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.homepagenum');
    const speed = 200; // Speed of the counter animation

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.5 // Trigger when at least 50% of the element is visible
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const increment = target / speed;

                const updateCounter = () => {
                    const value = +counter.innerText;
                    if (value < target) {
                        counter.innerText = Math.ceil(value + increment);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCounter();
                observer.unobserve(counter); // Stop observing once the counter has started
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});
