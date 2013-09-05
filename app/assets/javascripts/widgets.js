var selectedButton;


jQuery(document).ready(function() {

    jQuery('#btn_style').click(function() {
        if(jQuery('#widgets_style').attr('theme') == 'widgets_style'){
            jQuery('#widgets_style').attr('href', 'http://localhost:3000/assets/widgets_alt.css.erb');
            jQuery('#widgets_style').attr('theme', 'widgets_style_alt');
        }else{
            jQuery('#widgets_style').attr('href', 'http://localhost:3000/assets/widgets.css.erb');
            jQuery('#widgets_style').attr('theme', 'widgets_style');
        }
    });


    selectedButton = jQuery('#videoClipsButton');

    jQuery('#videoClipsButton').click(function() {
        hideAllTabs();

        jQuery('#videoClipsTab').css('display', '');
        jQuery(this)[0].firstChild.src = jQuery(this)[0].firstChild.src.substr(0, jQuery(this)[0].firstChild.src.length - 4) + 'Selected.png';

        selectedButton = jQuery(this);
    });

    jQuery('#latestNewsButton').click(function() {
        hideAllTabs();

        jQuery('#latestNewsTab').css('display', '');
        jQuery(this)[0].firstChild.src = jQuery(this)[0].firstChild.src.substr(0, jQuery(this)[0].firstChild.src.length - 4) + 'Selected.png';

        jQuery('#scrollbar1').tinyscrollbar();

        selectedButton = jQuery(this);
    });

    jQuery('#signUpButton').click(function() {
        hideAllTabs();

        jQuery('#signUpTab').css('display', '');
        jQuery(this)[0].firstChild.src = jQuery(this)[0].firstChild.src.substr(0, jQuery(this)[0].firstChild.src.length - 4) + 'Selected.png';

        selectedButton = jQuery(this);
    });

    jQuery('#connectButton').click(function() {
        hideAllTabs();

        jQuery('#connectTab').css('display', '');
        jQuery(this)[0].firstChild.src = jQuery(this)[0].firstChild.src.substr(0, jQuery(this)[0].firstChild.src.length - 4) + 'Selected.png';

        selectedButton = jQuery(this);
    });

    jQuery('#aboutTheFilmButton').click(function() {
        hideAllTabs();

        jQuery('#aboutTheFilmTab').css('display', '');
        jQuery(this)[0].firstChild.src = jQuery(this)[0].firstChild.src.substr(0, jQuery(this)[0].firstChild.src.length - 4) + 'Selected.png';

        jQuery('#scrollbar2').tinyscrollbar();

        selectedButton = jQuery(this);
    });

    jQuery('#signupActionButton').click(function() {
        if (jQuery('#nameTF').val() == '') {
            alert('Please fill in your name to sign up.');
            return;
        }

        if (!checkEmail(jQuery('#emailTF').val())) {
            alert('Please fill in a valid email address to sign up');
            return;
        }

        jQuery.ajax({ url: 'http://widget.filmpr.com/mm/signup.php',
            dataType: 'text',
            type: 'POST',
            data: ({
                name      : jQuery('#nameTF').val(),
                email     : jQuery('#emailTF').val(),
                phone     : jQuery('#phoneTF').val()
            }),
            success: function(response) {
                if (response == 'SUCCESS') {
                    //on success

                    jQuery('#signupActionButton').remove();
                    jQuery('#signUpContainer').append('<div style="color:#00FF00;font-weight:bold;margin-left:255px;">Thank you for signing up!</div>');
                    //jQuery('#signupActionButton').parent().html('<div style="color:#00FF00;font-weight:bold;">Thank you for signing up!</div>');
                } else {
                    jQuery('#signupActionButton').remove();
                    jQuery('#signUpContainer').append('<div style="color:#FF0000;font-weight:bold;margin-left:255px;">There was an issue signing you up. Please refresh the page and try again.</div>');
                    //jQuery('#signupActionButton').parent().html('<div style="color:#FF0000;font-weight:bold;">There was an issue signing you up. Please refresh the page and try again.</div>');
                }
            },
            error: function() {
                jQuery('#signupActionButton').remove();
                jQuery('#signUpContainer').append('<div style="color:#FF0000;font-weight:bold;margin-left:255px;">There was an issue signing you up. Please refresh the page and try again.</div>');
            }
        });
    });
});

function hideAllTabs() {
    jQuery('#videoClipsTab').css('display', 'none');
    jQuery('#latestNewsTab').css('display', 'none');
    jQuery('#signUpTab').css('display', 'none');
    jQuery('#connectTab').css('display', 'none');
    jQuery('#aboutTheFilmTab').css('display', 'none');

    selectedButton[0].firstChild.src = selectedButton[0].firstChild.src.substr(0, selectedButton[0].firstChild.src.length - 12) + '.png';
}

function checkEmail(email) {
    var filter= /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

    if (filter.test(email))
        return true;
    else
        return false;
}