const facebook_id = "123019441595534";
const facebook_src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.9&appId=123019441595534";

window.fbAsyncInit = function () {
    FB.init({
        appId: facebook_id,
        cookie: true,
        xfbml: true,
        version: 'v2.8'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = facebook_src;
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        displayElements(true);

        getFBProfile();

        console.log("Authenticated");
    }
    else {
        displayElements(false);
        console.log("Not authenticated");
    }
}

function getFBProfile() {
    FB.api(
        '/me',
        'GET',
        {"fields":"id,name,email,picture.width(100),birthday,gender,cover,photos,education, about,work,website,location,posts,favorite_athletes"},
        function(response) {

            console.log(response);

            if (response && !response.error) {
                displayProfile(response);
                displayPosts(response.posts.data);
            }
        }
    );
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

jQuery(document).ready(function() {
    jQuery("#fb-logout").click(function () {
        FB.logout(function (response) {
            displayElements(false);
        });
    });
});
