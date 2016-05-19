jQuery(function ($) {
    var $w = $(window).width();


    //�Ż�ǰ ���콺����(PC only)
    var $new_item = $('.new_arrival .new_item_list')
    $new_item
        .on('mouseenter focusin', 'li', function (event) {
            if ($(window).width() < 1024) return;
            $(this)
                .find('.item_tag')
                    .stop()
                    .animate({ 'opacity': 1 }, 300);

        })
        .on('mouseleave focusout', 'li', function (event) {
            if ($(window).width() < 1024) return;
            $(this)
                .find('.item_tag')
                    .stop()
                    .animate({ 'opacity': 0 }, 300);
        });

    $(window).resize(function () {
        if ( $w < 1024 ) {
            $('.item_tag').removeAttr('style');
        }
    });



    //����� ȯ�� ����

    //gnb �����ܵ� ũ��(Tablet only)
    if (768 <= $w && $w < 1024) {
        $('.gnb .mobile i').addClass('fa-lg');
        $('.gnb_menu_bar i').addClass('fa-lg');
    };

    $(window).resize(function () {
        if (320 <= $(window).width() && $(window).width() < 768) {
            $('.gnb .mobile a i').removeClass('fa-lg');
            $('.gnb a.gnb_menu_bar i').removeClass('fa-lg');
        } else if (768 <= $(window).width() && $(window).width() < 1024) {
            $('.gnb .mobile a i').addClass('fa-lg');
            $('.gnb a.gnb_menu_bar i').addClass('fa-lg');
        }
    });


    //�˻� �����̵�
    $('.search_icon')
        .on('click', function (event) {
            event.preventDefault();
            if ($(window).width >= 1024) return;
            var $form = $(this).closest('div.gnb').find('.gnb_form')
            $form.slideToggle(function () {
                $(this).find('#search').focus();
            });
        });

    $(window).resize(function () {
        if ($(window).width() > 1024) {
            $('.gnb_form').removeAttr('style');
        }
    });

    //gnb �޴� �����̵� 
    $('.gnb_items > ul > li > a')
        .on('click', function (event) {
            event.preventDefault();
            $(this).find('i').toggleClass('fa-minus')
            $(this).closest('li').find('.item_sub_list').slideToggle();
        });

    $(window).resize(function () {
        if ($(window).width() > 1024) {
            $('.item_sub_list').removeAttr('style');
        }
    });



    $('.gnb_menu_bar')
        .on('click', function (event) {
            event.preventDefault();
            $(this).closest('.container').find('.gnb_items').slideToggle();
        });
    
    $(window).resize(function () {
        if ($(window).width() > 1024 && $('.gnb_items').is(':hidden')) {
            $('.gnb_items').removeAttr('style');
        }
    });

    //Ǫ�� �����̵�
    $('#footer h2')
        .on('click', function (event) {
            if ($(window).width() > 768) return;
            $(this).find('i').toggleClass('fa-chevron-down')
            $(this).next().slideToggle(function (event) {
                $(this).parent('.foot_box').toggleClass('foot_background_toggle');
            });
        });

    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.foot_box ul').removeAttr('style');
        }
    });

    //PC ȯ�� ����
    $('.gnb_items .item_list > li')
        .on('mouseenter focus', function (event) {
            $(this).addClass('active')
                .on('mouseenter focus', 'a', function (event) {
                    $(this).addClass('sub_active');
                })
                .on('mouseleave blur', 'a', function (event) {
                    $(this).removeClass('sub_active');
                })
        })
        .on('mouseleave', function (event) {
            $(this).removeClass('active');
        })
        .on('focusin', function (event) {
            if ($(this).has(event.relatedTarget).length === 0) {
                $(this).trigger('mouseenter');
            }
        })
        .on('focusout', function (event) {
            if ($(this).has(event.relatedTarget).length === 0) {
                $(this).trigger('mouseleave');
            }
        });

    //Back to Top
    $('.back_to_top span').click(function (event) {
        $(this).closest('body').animate({ scrollTop: 0 }, 500);
    })
});