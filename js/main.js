$(document).ready(function () {
  // Initialize the main functionality of the application
  function init() {
    console.log('Application initialized');
    // Additional initialization code can go here
  }

  // Call the init function when the document is ready
  init();

  $('.card').click(function () {
    const $card = $(this);
    const getBoundingRect = this.getBoundingClientRect();
    console.log(getBoundingRect);
    const bgColor = $card.css('background-color');
    gsap.fromTo(
      '.floating_card',
      {
        position: 'absolute',
        left: getBoundingRect.left + 'px',
        top: getBoundingRect.top + 'px',
        width: getBoundingRect.width + 'px',
        height: getBoundingRect.height + 'px',
        backgroundColor: bgColor,
      },
      {
        position: 'absolute',
        backgroundColor: bgColor,
        left: '0px',
        top: '0px',
        right: 'auto',
        bottom: 'auto',
        width: '100vw',
        height: '100vh',
        ease: 'power2.inOut',
        duration: 2,
      }
    );
    gsap.fromTo(
      $card,
      {
        minWidth: '300px',
        opacity: 1,
        ease: 'power2.inOut',
      },
      {
        width: '0px',
        minWidth: '0px',
        opacity: 0,
        duration: 1,
        padding: 0,
        ease: 'power2.inOut',
        onComplete: function () {
          setTimeout(() => {
            $card.remove();
          }, 200);
        },
      }
    );
  });
});
