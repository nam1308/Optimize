(function($) {
    window.onload = function() {
        $(document).ready(function() {
            menuMobile();
            home_news_click();
            service_click();
        });
    };
})(jQuery);

function menuMobile(){
    $(".header__bars").click(function(){
        $(".overlay").addClass("overlay-active");
        $(".menu-mobile").addClass("menu-mobile-active");
    });

    $(".overlay").click(function() {
        $(".overlay").removeClass("overlay-active");
        $(".menu-mobile").removeClass("menu-mobile-active");
        $('.search__mobile').removeClass('active');
    });

    $(".menu-mobile-close").click(function() {
        $(".overlay").removeClass("overlay-active");
        $(".menu-mobile").removeClass("menu-mobile-active");
    });

    $('.menu-mobile').show();
    $(".menu-mobile nav ul li.menu-item-has-children>ul").before(`<span class="li-plus"></span>`);
    if ($(".li-plus").length) {
        $(".li-plus").click(function(e) {
            if ($(this).hasClass("clicked")) {
                $(this).removeClass('clicked').siblings('ul').slideUp();
            } else {
                $(this).parent().siblings('li').find('.li-plus').removeClass('clicked').find("ul").slideUp();
                $(this).parent().siblings().find("ul").slideUp();
                $(this).addClass('clicked').siblings('ul').slideDown();
            }
        });
    }
}

// Viết hàm slider 
function home_news_click(){
    // nút back của trang chủ phần các tin tức
    $('.home_news .flickity-prev-next-button.previous').html( 
        `<div class="home_news_ct_btn_back d-flex align-items-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.96231 11.6562L7.37321 10.2387L4.10297 6.98376L17.708 6.97007L17.706 4.97007L4.13824 4.98373L7.35338 1.7535L5.93586 0.342596L0.292229 6.01265L5.96231 11.6562Z" fill="#1672EC"/>
            </svg>
            <span>
                Back
            </span>
        </div>`);

    // nút next của trang chủ phần các tin tức
    $('.home_news .flickity-prev-next-button.next').html(
        `<div class="home_news_ct_btn_next d-flex align-items-center">
            <span>
                Next
            </span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0377 0.34375L10.6268 1.76127L13.897 5.01624L0.291992 5.02993L0.294005 7.02993L13.8618 7.01627L10.6466 10.2465L12.0641 11.6574L17.7078 5.98735L12.0377 0.34375Z" fill="#1672EC"/>
            </svg>
        </div>`);

    // nút back của trang chủ phần lãnh đạo
    $('.home_leader .flickity-prev-next-button.previous').html(
        `<div class="home_leader_back">
            <svg width="96" height="13" viewBox="0 0 96 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.650978 6.09166L5.70214 1.19861C6.01044 0.899942 6.51003 0.899942 6.81833 1.19861C7.12663 1.49728 7.12663 1.98126 6.81833 2.27993L3.11474 5.86782H94.3972C94.8331 5.86782 95.1865 6.21016 95.1865 6.63248C95.1865 7.05479 94.8331 7.39714 94.3972 7.39714H3.1144L6.81799 10.985C7.12629 11.2837 7.12629 11.7677 6.81799 12.0663C6.66384 12.2157 6.46195 12.2902 6.26006 12.2902C6.05817 12.2902 5.85596 12.2154 5.70214 12.0663L0.650978 7.17297C0.342682 6.87463 0.342682 6.39033 0.650978 6.09166Z" fill="white"/>
            </svg>
        </div>`);

    // nút next của trang chủ phần lãnh đạo
    $('.home_leader .flickity-prev-next-button.next').html(
        `<div class="home_leader_next">
            <svg width="96" height="13" viewBox="0 0 96 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M95.349 6.09166L90.2979 1.19861C89.9896 0.899942 89.49 0.899942 89.1817 1.19861C88.8734 1.49728 88.8734 1.98126 89.1817 2.27993L92.8853 5.86782H1.60279C1.16686 5.86782 0.813477 6.21016 0.813477 6.63248C0.813477 7.05479 1.16686 7.39714 1.60279 7.39714H92.8856L89.182 10.985C88.8737 11.2837 88.8737 11.7677 89.182 12.0663C89.3362 12.2157 89.538 12.2902 89.7399 12.2902C89.9418 12.2902 90.144 12.2154 90.2979 12.0663L95.349 7.17297C95.6573 6.87463 95.6573 6.39033 95.349 6.09166Z" fill="white"/>
            </svg>                                
        </div>`);

    // nút back của trang SEO phần các dự án đã thực hiện
    $('.service_seo_projects .flickity-prev-next-button.previous').html( 
        `<div class="home_news_ct_btn_back d-flex align-items-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.96231 11.6562L7.37321 10.2387L4.10297 6.98376L17.708 6.97007L17.706 4.97007L4.13824 4.98373L7.35338 1.7535L5.93586 0.342596L0.292229 6.01265L5.96231 11.6562Z" fill="#1672EC"/>
            </svg>
            <span>
                Back
            </span>
        </div>`);

    // nút next của trang SEO phần các dự án đã thực hiện
    $('.service_seo_projects .flickity-prev-next-button.next').html(
        `<div class="home_news_ct_btn_next d-flex align-items-center">
            <span>
                Next
            </span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0377 0.34375L10.6268 1.76127L13.897 5.01624L0.291992 5.02993L0.294005 7.02993L13.8618 7.01627L10.6466 10.2465L12.0641 11.6574L17.7078 5.98735L12.0377 0.34375Z" fill="#1672EC"/>
            </svg>
        </div>`);

    // nút back của trang thiết kế web phần nhận xét khách hàng
    $('.service_web_partner .flickity-prev-next-button.previous').html( 
        `<div class="home_news_ct_btn_back d-flex align-items-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.96231 11.6562L7.37321 10.2387L4.10297 6.98376L17.708 6.97007L17.706 4.97007L4.13824 4.98373L7.35338 1.7535L5.93586 0.342596L0.292229 6.01265L5.96231 11.6562Z" fill="#1672EC"/>
            </svg>
            <span>
                Back
            </span>
        </div>`);

    // nút next của trang thiết kế web phần nhận xét khách hàng
    $('.service_web_partner .flickity-prev-next-button.next').html(
        `<div class="home_news_ct_btn_next d-flex align-items-center">
            <span>
                Next
            </span>
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0377 0.34375L10.6268 1.76127L13.897 5.01624L0.291992 5.02993L0.294005 7.02993L13.8618 7.01627L10.6466 10.2465L12.0641 11.6574L17.7078 5.98735L12.0377 0.34375Z" fill="#1672EC"/>
            </svg>
        </div>`);



}


// Câu hỏi thường gặp
function service_click() {
    $(".home_questions_ct_item h3").click(function(e) {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active').siblings('.home_questions_ct_item_dropdown').slideUp();
        } else {
            $(this).parent().siblings('.home_questions_ct_item').find('h3').removeClass('active').find(".home_questions_ct_item_dropdown").slideUp();
            $(this).parent().siblings().find(".home_questions_ct_item_dropdown").slideUp();
            $(this).addClass('active').siblings('.home_questions_ct_item_dropdown').slideDown();
        }
    });
}





















