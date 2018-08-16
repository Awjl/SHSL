// 导航栏
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
// 关于我们
$('.aboutus-nav ul li').click(function(){
  $(this).addClass('aboutus-navact').siblings().removeClass('aboutus-navact')
  $('.aboutus-list>div').removeClass('show').addClass('hide')
  $('.aboutus-list>div').eq($(this).index()).removeClass('hide').addClass('show')
})
$('.technologylist-span span').click(function() {
  $(this).addClass('span-act').siblings().removeClass('span-act')
  $('.technologylist>div').removeClass('show').addClass('hide')
  $('.technologylist>div').eq($(this).index()).removeClass('hide').addClass('show')
})
// 提交简历
$('.uplodebtn').click(function() {
  $('.ejectbox').css('display','block')
  // $('body').css('overflow','hidden')
})
$('.ejectbox').click(function() {
  $(this).css('display','none')
})