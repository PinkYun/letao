

$(function () {
  // new一个实例化letao
  var letao =new Letao();
  // 通过Letao对象初始化轮播图
  letao.inintSlide();
  // 通过Letao对象初始化区域滚动
  letao.inintScroll();
});

// 声明一个Letao的构造函数
var Letao = function () {
  
}
// 原型是对象
Letao.prototype={
  inintSlide: function() {
    var gallery = mui('.mui-slider');
    gallery.slider({
      interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
    });
  },
  inintScroll: function() {
    // 实现区域滚动
    var options = {
      scrollY: true, //是否竖向滚动
      scrollX: false, //是否横向滚动
      startX: 0, //初始化时滚动至x
      startY: 0, //初始化时滚动至y
      indicators: true, //是否显示滚动条
      deceleration: 0.0008, //阻尼系数,系数越小滑动越灵敏
      bounce: true //是否启用回弹
    }
    //  把对象作参数传入  
    mui('.mui-scroll-wrapper').scroll(options);
  }
}