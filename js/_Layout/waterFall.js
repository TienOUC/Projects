var data = [
    {
      "src": "../img/_Layout-img/1.png",
      "title": "第一怪"
    },{
      "src": "../img/_Layout-img/2.png",
      "title": "第二怪"
    },{
      "src": "../img/_Layout-img/3.png",
      "title": "第三怪"
    },{
      "src": "../img/_Layout-img/4.png",
      "title": "第四怪"
    },{
      "src": "../img/_Layout-img/5.png",
      "title": "第五怪"
    },{
      "src": "../img/_Layout-img/6.png",
      "title": "第六怪"
    },{
      "src": "../img/_Layout-img/7.png",
      "title": "第七怪"
    },{
      "src": "../img/_Layout-img/8.png",
      "title": "第八怪"
    },{
      "src": "../img/_Layout-img/9.png",
      "title": "第九怪"
    },{
      "src": "../img/_Layout-img/10.png",
      "title": "第十怪"
    },{
      "src": "../img/_Layout-img/11.png",
      "title": "第十一怪"
    },{
      "src": "../img/_Layout-img/12.png",
      "title": "第十二怪"
    },{
      "src": "../img/_Layout-img/13.png",
      "title": "第十三怪"
    },{
      "src": "../img/_Layout-img/14.png",
      "title": "第十四怪"
    },{
      "src": "../img/_Layout-img/15.png",
      "title": "第十五怪"
    },{
      "src": "../img/_Layout-img/16.png",
      "title": "第十六怪"
    },{
      "src": "../img/_Layout-img/17.png",
      "title": "第十七怪"
    },{
      "src": "../img/_Layout-img/18.png",
      "title": "第十八怪"
    }
  ]
  
  //=============javascript================
  // function waterfall(wrap, boxes) {
  //   //获取屏幕显示的列数
  //   var boxWidth = boxes[0].offsetWidth + 20;
  //   var windowWidth = document.documentElement.clientWidth;
  //   var colsNumber = Math.floor(windowWidth / boxWidth);
  
  //   // 设置容器的宽度
  //   wrap.style.width = boxWidth * colsNumber + 'px';
  
  //   // 定义一个数组并存储每一列的高度
  //   var everyHeight = new Array();
  //   for (var i = 0; i < boxes.length; i++) {
  //     if (i < colsNumber) {
  //       everyHeight[i] = boxes[i].offsetHeight + 20;
  //     } else {
  //       // 定位下一个盒子在第二行中的位置
  //       var minHeight = Math.min.apply(null, everyHeight); //最小列高
  //       var minIndex = getIndex(minHeight, everyHeight);  //最小列高索引
  //       var leftValue = boxes[minIndex].offsetLeft - 10;
  //       boxes[i].style.position = 'absolute';
  //       boxes[i].style.top = minHeight + 'px';
  //       boxes[i].style.left = leftValue + 'px';
  //       everyHeight[minIndex] += boxes[i].offsetHeight + 20;
  //     };
  //   }
  // }
  
  // //获取最小列的索引
  // function getIndex(minHeight, everyHeight) {
  //   for (index in everyHeight) {
  //     if (everyHeight[index] == minHeight) {
  //       return index;
  //     };
  //   };
  // };
  
  // window.onload = function () {
  //   var wrap = document.getElementById('wrap');
  //   var boxes = wrap.getElementsByTagName('div');
  //   waterfall(wrap, boxes);
  // }
  
  
  
  // ==============jQuery===========================
  var waterfall = function (wrap, boxes) {
    var boxWidth = boxes.eq(0).width() + 40;
    var windowWidth = $(window).width();
    var colsNumber = Math.floor(windowWidth / boxWidth);
  
    // 设置容器宽度
    wrap.width(boxWidth * colsNumber);
  
    // 数组存储每一列的高度
    var everyHeight = new Array();
    for (var i = 0; i < boxes.length; i++) {
      if (i < colsNumber) {
        everyHeight[i] = boxes.eq(i).height() + 40;
      } else {
        var minHeight = Math.min.apply(null, everyHeight);
        var minIndex = getIndex(minHeight, everyHeight);
        var leftValue = boxes.eq(minIndex).position().left;
        setBoxStyle(boxes.eq(i), minHeight, boxes.eq(minIndex).position().left, i)
        // boxes.eq(i).css({
        //   'position': 'absolute',
        //   'top': minHeight,
        //   'left': leftValue,
        //   'opacity': '0'
        // }).stop().animate({
        //   'opacity': '1'
        // }, 1000);
        everyHeight[minIndex] += boxes.eq(i).height() + 40;
      }
      boxes.eq(i).hover(function(event){
        $(this).stop().animate({
          'opacity': '0.7'
        },500)
      },function(event){
        $(this).stop().animate({
          'opacity': '1'},500)
        })
    }
  }
  
  // 获取最小高度列的索引
  function getIndex(minHeight, everyHeight) {
    for (index in everyHeight) {
      if (everyHeight[index] == minHeight) {
        return index;
      }
    }
  }
  // 追加BOX样式
  var getStartNumber = 0;
  function setBoxStyle(box, top, left, index) {
    if (getStartNumber >= index) {
      return false;
    };
    box.css({
      'position': 'absolute',
      'top': top,
      'left': left,
      'opacity': '0'
    }).stop().animate({
      'opacity': '1'
    }, 1000);
    getStartNumber = index;
  }
  
  // 数据请求检查
  function getCheck(wrap){
    // 获取文档高度
    var documentHeight = $(window).height();
    // 获取文档向上滚动的高度
    var scrollHeight = $(window).scrollTop();
    // 获取最后一个box所在列的总高度
    var boxes = wrap.children('div');
    var lastBoxTop = boxes.eq(boxes.length - 1).offset().top;
    var lastHeight = boxes.eq(boxes.length - 1).height() + 20;
    var lastColHeight = lastBoxTop + lastHeight;
    return documentHeight + scrollHeight >= lastColHeight ? true : false;
  }
  
  // 追加box数
  function appendBox(wrap) {
    if(getCheck(wrap)){
      for (i in data) {
        var innerString = '<div><img src="../img/' + data[i].src + ' " /><a href="http://baidu.com" target="_blank">' + data[i].title + '</a></div>'
        wrap.append(innerString);
      }
    }else{
      return false;
    }
    waterfall(wrap, wrap.children('div'));
  }
  
  $(function (event) {
    var wrap = $('#wrap');
    var boxes = $('#wrap').children('div');
    waterfall(wrap, boxes);
    $(this).scroll(function (event) {
      appendBox(wrap, boxes);
    })
  });
  