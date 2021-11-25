var initialMouse = 0;
var slideMovementTotal = 0;
var mouseIsDown = false;
var slider = $('.slider');

slider.each(function() {
    var _this = $(this);

    _this.on('mousedown touchstart', function(event) {
        mouseIsDown = true;
        // slideMovementTotal = $('.button-background').width() - $(this).width() + 10;
        initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
    });

    $(document.body, _this).on('mouseup touchend', function(event) {
        if (!mouseIsDown)
            return;
        mouseIsDown = false;
        // var currentMouse = event.clientY || event.changedTouches[0].pageY;
        // var relativeMouse = currentMouse - initialMouse;

        // if (relativeMouse < slideMovementTotal) {
        //     $('.slide-text').fadeTo(300, 1);
            // _this.animate({
            //     left: "-10px"
            // }, 300);
            // return;
        // }
        _this.addClass('unlocked');
        // $('#locker').text('lock_outline');
        // setTimeout(function() {
        //     _this.on('click tap', function(event) {
        //         if (!_this.hasClass('unlocked'))
        //             return;
        //         _this.removeClass('unlocked');
        //         _this.off('click tap');
        //     });
        // }, 0);
    });

    $(document.body).on('mousemove touchmove', function(event) {
        if (!mouseIsDown)
            return;

        var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
        var relativeMouse = currentMouse - initialMouse;
        // var slidePercent = 1 - (relativeMouse / slideMovementTotal);

        // $('.slide-text').fadeTo(0, slidePercent);

        // if (currentMouse <= 138) {
        //     _this.css({ 'left': '-10px' });
        //     return;
        // }
            // if ((_this.position().left >= 138)) {
            //     _this.css({ 'left': '138px' });
            //     return;
            // }
        // if (relativeMouse >= slideMovementTotal + 10) {
        //     _this.css({ 'left': slideMovementTotal + 'px' });
        //     return;
        // }
        _this.css({ 'left': relativeMouse });
    });
});
