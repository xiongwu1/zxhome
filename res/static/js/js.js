if (typeof F863 == 'undefined') {
    function F863(id) {
        //第一个显示
        $('.item-list:first', '#' + id).addClass('active');
        $('.taps a:first', '#' + id).addClass('selected');
        //选项卡
        $('.taps a', '#' + id).hover(function () {
            var idx = $(this).index();
             $(this).addClass('selected').siblings().removeClass('selected');
            $('.item-list', '#' + id).removeClass('active');
            $('.item-list', '#' + id).eq(idx).addClass('active');
        })
    }
}
