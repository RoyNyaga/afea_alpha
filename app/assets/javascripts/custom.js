
$(document).ready(function () {
  $('.nav-container').click(function () {
    $('.testing').toggleClass('toggling')
  })

  $('.scrolling-link').click(function (link) {
    link.preventDefault()

    const target = $(this).attr('href')

    $('html, body').stop().animate({
      scrollTop: $(target).offset().top - 25
    }, 3000)
  })
})
