jQuery(document).ready(function ($) {

    $('#myCarousel').carousel({
        interval: 0
    });

    load_templates();

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        var id = id_selector.substr(id_selector.length - 1);
        var id = parseInt(id);

        switch(id){
            case 0:
                load_templates();
                break;
            case 1:
                choose_content();
                break;
            case 2:
                get_widget();
                break;
        }
    });
});

function load_templates(){
    $.ajax({
        url: "/designers/layout_choose",
        cache: false,
        success: function(html){
            $("#choose_layout").html(html);
            $('#myCarousel').carousel(0);
        }
    });
}

function choose_content(){
    $.ajax({
        url: "/designers/content_choose",
        cache: false,
        success: function(html){
            $("#choose_content").html(html);
            $('#myCarousel').carousel(1);
        }
    });
}

function get_widget(){
    $.ajax({
        url: "/designers/get_widget",
        cache: false,
        success: function(html){
            $("#get_widget").html(html);
            $('#myCarousel').carousel(2);
        }
    });
}
