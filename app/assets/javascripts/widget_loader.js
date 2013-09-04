var get_widget = (function (div_container, widget_options) {

    var domain = 'http://localhost:3000';
    var jQueryURL = 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';

    function load_widget(url, callback) {

        if (window.jQuery == undefined) {
            var script = document.createElement("script")
            script.type = "text/javascript";

            if (script.readyState) { //IE Compatibility
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" || script.readyState == "complete") {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else { //Others browsers
                script.onload = function () {
                    callback();
                };
            }

            script.src = url;
            // Try to find the head, otherwise default to the documentElement
            (document.getElementsByTagName("head")[0] || document).appendChild(script);
        } else {
            callback();
        }
    }

    function getWidgetJSON() {
        //jQuery loaded
        jQuery(document).ready(function(jQuery) {

            // Load widget HTML via JSONP
            var jsonp_url = domain + "/load_widget?options=" + widget_options +"&callback=?";
            jQuery.getJSON(jsonp_url, function(data) {
                jQuery(div_container).html(data.html);
            });
        });
    }

    load_widget(jQueryURL, getWidgetJSON);
});
