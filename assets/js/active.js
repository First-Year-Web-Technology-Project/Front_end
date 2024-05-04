(function ($) {
    "use strict";
    
    const $window = $(window),
        $body = $('body')

    /* Header Sticky */
    function headerSticky() {
        if ($window.scrollTop() > 350) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    }

    /* Mobile Sub Menu Toggle Function */
    const $mobileSubMenuToggle = $('.mobile-sub-menu-toggle')
    $mobileSubMenuToggle.on('click', function() {
        const $this = $(this),
            $mobileSubMenuToggleClass = '.mobile-sub-menu-toggle',
            $mobileSubMenuClass = '.mobile-sub-menu';
        if($this.hasClass('active')) {
            $this.removeClass('active').closest('li').removeClass('active').find($mobileSubMenuToggleClass).removeClass('active').closest('li').removeClass('active').find($mobileSubMenuClass).slideUp()
        } else {
            $this.addClass('active').siblings($mobileSubMenuClass).slideDown()
            $this.closest('li').addClass('active').siblings().find($mobileSubMenuToggleClass).removeClass('active').closest('li').removeClass('active').find($mobileSubMenuClass).slideUp()
        }
    })


    /* Swiper Slider */
    /* Hero Slider */
    const heroSlider = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.hero-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-slider .swiper-button-next',
            prevEl: '.hero-slider .swiper-button-prev',
        }
    });
    /* Product Carousel */
    const productCarousel = new Swiper('.product-carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: '.product-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-carousel .swiper-button-next',
            prevEl: '.product-carousel .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
    /* Deal Product Carousel */
    const dealProductCarousel = new Swiper('.deal-product-carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: '.deal-product-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.deal-product-carousel .swiper-button-next',
            prevEl: '.deal-product-carousel .swiper-button-prev',
        },
        breakpoints: {
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
    /* Group Product Carousel */
    $('.group-product-slider').each(function(){
        const groupProductCarousel = new Swiper($(this)[0], {
            slidesPerView: 1,
            grid: {
                fill: 'row',
                rows: 4,
            },
            spaceBetween: 20,
            pagination: {
                el: '.group-product-slider .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: `#${$(this).data('nav-target')} .swiper-button-next`,
                prevEl: `#${$(this).data('nav-target')} .swiper-button-prev`,
            }
        });
    });
    /* Single Product Thumbnail Carousel */
    const productThumbCarousel = new Swiper('.product-thumb-carousel', {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: '.product-thumb-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-thumb-carousel .swiper-button-next',
            prevEl: '.product-thumb-carousel .swiper-button-prev',
        }
    });
    /* Single Product Image Slider */
    const productImageSlider = new Swiper('.product-image-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.product-image-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-image-slider .swiper-button-next',
            prevEl: '.product-image-slider .swiper-button-prev',
        },
        thumbs: {
            swiper: productThumbCarousel,
        },
    });
    /* Single Product Thumbnail Carousel Vertical */
    const productThumbCarouselVertical = new Swiper('.product-thumb-carousel-vertical', {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: '.product-thumb-carousel-vertical .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-thumb-carousel-vertical .swiper-button-next',
            prevEl: '.product-thumb-carousel-vertical .swiper-button-prev',
        }
    });
    /* Single Product Image Slider Vertical */
    const productImageSliderVertical = new Swiper('.product-image-slider-vertical', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.product-image-slider-vertical .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.product-image-slider-vertical .swiper-button-next',
            prevEl: '.product-image-slider-vertical .swiper-button-prev',
        },
        thumbs: {
            swiper: productThumbCarouselVertical,
        },
    });
    /* Quickview Product Thumbnail Carousel */
    const quickviewProductThumbCarousel = new Swiper('.quickview-product-thumb-carousel', {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
            el: '.quickview-product-thumb-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.quickview-product-thumb-carousel .swiper-button-next',
            prevEl: '.quickview-product-thumb-carousel .swiper-button-prev',
        }
    });
    /* Quickview Product Image Slider */
    const quickviewProductImageSlider = new Swiper('.quickview-product-image-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.quickview-product-image-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.quickview-product-image-slider .swiper-button-next',
            prevEl: '.quickview-product-image-slider .swiper-button-prev',
        },
        thumbs: {
            swiper: quickviewProductThumbCarousel,
        },
    });
    /* Testimonial */
    const testimonialSlider = new Swiper('.testimonial-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 60,
        pagination: {
            el: '.testimonial-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-slider .swiper-button-next',
            prevEl: '.testimonial-slider .swiper-button-prev',
        }
    });
    /* Blog Carousel */
    const blogCarousel = new Swiper('.blog-carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: '.blog-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.blog-carousel .swiper-button-next',
            prevEl: '.blog-carousel .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
    /* Team Carousel */
    const teamCarousel = new Swiper('.team-carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: '.team-carousel .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.team-carousel .swiper-button-next',
            prevEl: '.team-carousel .swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });

    /* Magnific Popup */
    $('.mfp-zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});

    /* Countdown */
    $('[data-countdown]').each(function() {
        var $this = $(this),
        $finalDate = $(this).data('countdown'),
        $ = `<div class="countdown-item"><span class="number">%D</span><span class="label">Days</span></div><div class="countdown-item"><span class="number">%H</span><span class="label">Hours</span></div><div class="countdown-item"><span class="number">%M</span><span class="label">Min</span></div><div class="countdown-item"><span class="number">%S</span><span class="label">Sec</span></div>`;
        $this.countdown($finalDate, function(e) {
            $this.html(e.strftime($));
        });
    });

    /* Price Range */
    if($('#price-range')) {
        $('#price-range').ionRangeSlider({
            type: "double",
            min: 0,
            max: 2000,
            from: 200,
            to: 1000,
            prefix: "$"
        });
    }

    /* Image Zoom */
    function imageZoom () {
        const $elem = $('.image-zoom'),
            $zoomImage = $('.image-zoom .zoomImg');
        if($window.outerWidth() < 992) {
            if($zoomImage.length !== 0) {
                $elem.trigger('zoom.destroy');
            }
        } else {
            if($zoomImage.length === 0) {
                $elem.zoom();
            }
        }
    }
    imageZoom()

    $('.sidebar').stickySidebar({
        topSpacing: 100,
        bottomSpacing: 60
    });
  

    /* Shipping Form Toggle */
    if($('[data-toggle-shipping]').length) {
        const $shippingToggle = $('[data-toggle-shipping]'),
            $shippingToggleTarget = $($shippingToggle[0].dataset.toggleShipping),
            $shippingShowHide = function() {
                if( $shippingToggle[0].checked ) {
                    $shippingToggleTarget.slideDown();
                } else {
                    $shippingToggleTarget.slideUp();
                }
            }
        $shippingShowHide()
        $shippingToggle.on('change', function(){$shippingShowHide()});
    }

    /* Payment Method Toggle */
    if($('input[type="radio"][name="payment-method"]').length) {
        const $paymentToggle = $('input[type="radio"][name="payment-method"]'),
            $paymentShowHide = function() {
                $paymentToggle.each(function() {
                    const $this = $(this),
                        $thisContent = $this.siblings('p')
                    if( $this[0].checked ) {
                        $thisContent.slideDown();
                        $this.parent().siblings().find('p').slideUp()
                    }
                })
            }
        $paymentShowHide()
        $paymentToggle.on('change', function(){$paymentShowHide()});
    }

    /*--
        Ajax Contact Form
    -----------------------------------*/
    $(function () {
        // Get the form.
        var form = $('#contact-form');
        // Get the messages div.
        var formMessages = $('.form-messege');
        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();
            // Serialize the form data.
            var formData = $(form).serialize();
            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    formMessages.removeClass('error text-danger').addClass('success text-success learts-mt-10').text(response);
                    // Clear the form.
                    form.find('input:not([type="submit"]), textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    formMessages.removeClass('success text-success').addClass('error text-danger mt-3');
                    // Set the message text.
                    if (data.responseText !== '') {
                        formMessages.text(data.responseText);
                    } else {
                        formMessages.text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });

    /* Scroll To Top */
    const scrollToTopBtn = $('.scroll-to-top');
    scrollToTopBtn.on('click', function() {
        $("html, body").animate({ scrollTop: 0 });
        return false;
    })
    function scrollToTopShow() {
        if ($window.scrollTop() > $window[0].outerHeight) {
            scrollToTopBtn.addClass('show');
        } else {
            scrollToTopBtn.removeClass('show');
        }
    }

    /* Resize Event */
    $window.on('resize', function() {
        imageZoom()
    })
    /* Scroll Event */
    $window.on('scroll', function () {
        headerSticky()
        scrollToTopShow()
    });

})(jQuery);
// Get all the relevant elements


const chatbox = document.querySelector('.chatbox-conversation');
const userInput = document.querySelector('#chatbox-userInput');

function sendMessage() {
    const userText = userInput.value;
    const botResponse = getResponse(userText);

    addMessage('You', userText);
    addMessage('Chatbot', botResponse);

    userInput.value = '';
}

function getResponse(message) {
    const greetings = ['hello', 'hi', 'hey'];
    const farewells = ['bye', 'goodbye', 'see you later'];

    const questions = [
        {
            question: 'What is your name?',
            answer: 'My name is Chatbot.'
        },
        {
            question: 'What do you do?',
            answer: 'I am here to answer your questions and assist you.'
        },
        {
            question: 'How old are you?',
            answer: 'I am an AI, so I do not have an age.'
        },
        {
            question: 'What is the meaning of life?',
            answer: 'That is a philosophical question and opinions may vary. From my perspective, I exist to assist and make your life easier.'
        }];
    const randGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const randFarewell = farewells[Math.floor(Math.random() * farewells.length)];
    const questionMatch = questions.find(q => q.question.toLowerCase() === message.toLowerCase());
	if (questionMatch) {
        return questionMatch.answer;
    }

    if (greetings.includes(message.toLowerCase())) {
        return randGreeting + ', how can I assist you today?';
    } else if (farewells.includes(message.toLowerCase())) {
        return randFarewell + '!';
    } else {
        return 'I am sorry, I did not understand your question.';
    }
}

function addMessage(sender, message) {
    const newMessage = document.createElement('div');
    newMessage.innerHTML = `<strong>${sender}: </strong>${message}`;
    chatbox.appendChild(newMessage);
}

const addToCartButtons = document.querySelectorAll('.product-action-btn[data-tooltip-text="Add to cart"]');

for (let i = 0; i < addToCartButtons.length; i++) {
  const addToCartButton = addToCartButtons[i];
  const productPrice = addToCartButton.closest('.product').querySelector('.product-price').textContent;

  addToCartButton.addEventListener('click', function() {
    window.location.href = `shopping-cart.html?price=${productPrice}`;
})}

const quickViewButtons = document.querySelectorAll('.product-action-btn[data-tooltip-text="Quick View"]');

quickViewButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productLink = button.parentElement.querySelector('.product-image').getAttribute('href');
    window.location.href = productLink;
  });
});




 // Get all the buttons for incrementing/decrementing the quantity
const quantityDecButtons = document.querySelectorAll('.dec.qty-btn');
const quantityIncButtons = document.querySelectorAll('.inc.qty-btn');

// Add click event listeners to decrement quantity buttons
quantityDecButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the input element for the corresponding quantity button
    const quantityInput = button.nextElementSibling;
    
    // Decrement the quantity by 1, unless it's already 1
    if (quantityInput.value > 1) {
      quantityInput.value--;
      
      // Update the total for the corresponding product
      updateTotalForProduct(button.closest('tr'));
    }
  });
});

// Add click event listeners to increment quantity buttons
quantityIncButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the input element for the corresponding quantity button
    const quantityInput = button.previousElementSibling;
    
    // Increment the quantity by 1
    quantityInput.value++;
    
    // Update the total for the corresponding product
    updateTotalForProduct(button.closest('tr'));
  });
});

// Get all the remove buttons
const removeButtons = document.querySelectorAll('.remove-btn');

// Add click event listeners to remove buttons
removeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove the corresponding product row from the table
    button.closest('tr').remove();
    
  });
})


// Get all the elements needed
const products = document.querySelectorAll(".cart-product-mobile");
const updateCartButton = document.querySelector(".update-cart-btn");
const clearCartButton = document.querySelector("#.lear-cart-btn");
const continueShoppingButton = document.querySelector(".continue-shopping-btn");

// Add event listeners to the buttons
updateCartButton.addEventListener("click", updateCart);
clearCartButton.addEventListener("click", clearCart);
continueShoppingButton.addEventListener("click", continueShopping);

// Define the functions
function updateCart() {
  // Loop through all the products
  for (let i = 0; i < products.length; i++) {
    // Get the quantity input and the total span for each product
    const quantityInput = products[i].querySelector(".product-quantity-box");
    const totalSpan = products[i].querySelector(".cart-product-mobile-total");
    
    // Get the quantity and price of the product
    const quantity = parseInt(quantityInput.value);
    const price = parseFloat(totalSpan.textContent.replace("$", ""));
    
    // Calculate the total for the product and update the total span
    const total = quantity * price;
    totalSpan.textContent = "$" + total.toFixed(2);
  }
}

function clearCart() {
  // Loop through all the products and set the quantity input to 0
  for (let i = 0; i < products.length; i++) {
    const quantityInput = products[i].querySelector(".product-quantity-box");
    quantityInput.value = 0;
    
    // Update the total span to $0.00
    const totalSpan = products[i].querySelector(".cart-product-mobile-total");
    totalSpan.textContent = "$0.00";
  }
}

function continueShopping() {
  // Replace this with the URL of the page you want to redirect to
  window.location.href = "https://example.com";
}