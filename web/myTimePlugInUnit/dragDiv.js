;(function($) {
    $.fn.upupooTimeFundragDiv = function(options,parentBox) {
        return this.each(function() {
            var _moveDiv = $(this),//需要拖动的Div
				_moveDivWidth = _moveDiv.width(),
				_moveDivHeight = _moveDiv.height();
            var _moveArea = options ? $(options) : $(document);//限定拖动区域，默认为整个文档内
            var _parentBox = document.getElementById(parentBox).getBoundingClientRect(), //传入限定区域盒子
                _parentBoxWidth = _parentBox.width,
                _parentBoxHeight = _parentBox.height;
            var isDown = false;//mousedown标记
            _moveDiv.mousedown(function(event) {            
                var e = event || window.event;
                //获得鼠标指针离DIV元素左边界的距离
                var x = e.pageX - _moveDiv.offset().left;
                //获得鼠标指针离DIV元素上边界的距离 
                var y = e.pageY - _moveDiv.offset().top;
                _moveArea.on('mousemove', function(event) {
                    var ev = event || window.event;
                    //获得X轴方向移动的值 
                    var abs_x = ev.pageX - x;
                    //获得Y轴方向移动的值 
                    var abs_y = ev.pageY - y;
                    abs_x>0?abs_x>_parentBoxWidth - _moveDivWidth?abs_x = _parentBoxWidth - _moveDivWidth:abs_x:abs_x=0;
                    abs_y>0?abs_y>_parentBoxHeight - _moveDivHeight?abs_y = _parentBoxHeight - _moveDivHeight:abs_y:abs_y=0;
                    //div动态位置赋值
                    _moveDiv.css({'left': abs_x, 'top': abs_y});
                })
            });
            _moveDiv.mouseup(function() {
                //解绑拖动事件
//              console.log((_moveDiv.offset().left/_parentBoxWidth*100).toFixed(2))//left转换为百分比
//              console.log((_moveDiv.offset().top/_parentBoxHeight*100).toFixed(2))//top转换为百分比
                var upupooAbsLeft = (_moveDiv.offset().left/_parentBoxWidth*100).toFixed(2),
                	upupooAbsTop = (_moveDiv.offset().top/_parentBoxHeight*100).toFixed(2);
                /*改变配置文件的upupoo_exhibitionLayer_two的定位样式*/	
            	upupooConfig.upupoo_exhibitionLayer_twoStyle.left = upupooAbsLeft;
            	upupooConfig.upupoo_exhibitionLayer_twoStyle.top = upupooAbsTop;
                parent.callNative(84,'var upupooConfig = '+JSON.stringify(upupooConfig))	
                _moveArea.off('mousemove');

            });

        })
    }
})(jQuery)