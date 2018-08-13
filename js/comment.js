var show = true
$('.nav-move').click(function() {
  if (show) {
    $('.headerm').css({'top':'65px','opacity': '1'})
    show = !show
  } else {
    $('.headerm').css({'top':'-300%','opacity': '0'})
    show = !show
  }
})