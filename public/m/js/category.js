
$(function(){
    // 声明一个letao是构造函数的实例化对象
    var letao =new Letao();
    // 既然是对象 点出里面的inintScroll方法
    letao.inintScroll();
    // 通过对象点 获取左侧数据
    letao.getCategoryLeft();
    letao.getCategoryRight();

})
// 乐淘的构造函数
var Letao =function(){};
// 通过构造函数访问原型  原型是对象
Letao.prototype ={
    inintScroll:function(){
         // 实现区域滚动
        var options = {
            scrollY: true, //是否竖向滚动
            scrollX: false, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: false, //是否显示滚动条
            deceleration: 0.0008, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
        }
        //  把对象作参数传入  
        mui('.mui-scroll-wrapper').scroll(options);
        },

    // 左侧获取数据
    getCategoryLeft:function(){
        $.ajax({
            url:'/category/queryTopCategory',
            success:function(data){
                // console.log(data);
                var result =template('categroyLeftTmp',data);
                // console.log(result);
                $('.category-left ul').html(result);
            }
        })
    },
    // 点击左侧获取右侧数据
    getCategoryRight:function(){
        //调用函数 getRightData()
        getRightData(1);
        
        // 因为是动态生成的  给父元素设置委托事件  传入参数e 然后得到一个对象 点出里面的a标签
        $('.category-left ul').on('click','a',function(e){
            // 当点击是当前的li获取active类名 其他的移除
            $(this).parent().addClass("active").siblings().removeClass("active");

            // console.log(e.target);
            //获取id 通过dataset的方法点出  这是原生的获取
            var id = e.target.dataset['id'];
            // console.log(id);
            getRightData(id);
        });
        function getRightData(id){
            $.ajax({
                url:'/category/querySecondCategory',
                data:{id:id},
                success:function(data){
                    // console.log(data);
                    var result1 =template('categroyRightTmp',data);
                    // console.log(result1);
                    if(result1){
                        $('.brands').html(result1);
                    }else{
                        alert("抱歉,你点击的没有更多!!");
                    }
                }
            })
        }
    },
}