$(function() {

    var app_id = '581844348584751';
    var scopes = 'email, user_friends, user_online_presence, user_photos, user_about_me';

    var btn_login = '<a href="#" id="login" class="btn btn-primary">Login</a>';

    var div_session = "<div id='facebook-session'>"+
        "<strong></strong>"+
        "<ul></ul>"+
        "<img>"+
        "<a href='#' id='logout' class='btn btn-danger'>Logout</a>"+
        "</div>";

    window.fbAsyncInit = function() {

        FB.init({
            appId      : app_id,
            status     : true,
            cookie     : true,
            xfbml      : true,
            version    : 'v2.2'
        });


        FB.getLoginStatus(function(response) {
            statusChangeCallback(response, function() {});
        });
    };

    var statusChangeCallback = function(response, callback) {
        console.log(response);

        if (response.status === 'connected') {
            getFacebookData();
            getFbImages();
            getFbCover();
        } else {
            callback(false);
        }
    }

    var checkLoginState = function(callback) {
        FB.getLoginStatus(function(response) {
            callback(response);
        });
    }

    var getFacebookData =  function() {
        FB.api('/me', function(response) {
            $('#login').after(div_session);
            $('#login').remove();
            $('#facebook-session strong').text("Welcome: "+response.name);
            $('#facebook-session img').attr('src','http://graph.facebook.com/'+response.id+'/picture?type=large');
        });
    }

    var getFbCover = function() {
        FB.api('/me?fields=cover', function(response) {
            $('#login').after(div_session);
            $('#facebook-session ul').html("<li><img class='big-img' src='"+ response.cover.source +"'>");
        });
    }

    var getFbImages = function() {
        FB.api('/me?fields=albums{photos{images{source}}}', function(response) {
            var imgArray = [];
            $('#login').after(div_session);
            for (i=0;i<response.albums.data.length;i++) {
                var album = response.albums.data[i];
                for (j=0;j<album.photos.data.length;j++) {
                    var albumPhoto = album.photos.data[j];
                    //console.log(albumPhoto.images[0].source);
                    //$('#facebook-session ul').append("<li><img src='"+ albumPhoto.images[0].source +"'>");
                    imgArray.push(albumPhoto.images[0].source);
                }
            }
            var imagesArray = $.map(imgArray, function(img, i) {
                var listItem = $("<li></li>");
                $("<img src='"+ img +"'>").appendTo(listItem);
                return listItem;
            });
            $("#facebook-session ul").html(imagesArray);
        });
    }

    var facebookLogin = function() {
        checkLoginState(function(data) {
            if (data.status !== 'connected') {
                FB.login(function(response) {
                    if (response.status === 'connected')
                        getFacebookData();
                }, {scope: scopes});
            }
        })
    }

    var facebookLogout = function() {
        checkLoginState(function(data) {
            if (data.status === 'connected') {
                FB.logout(function(response) {
                    $('#facebook-session').before(btn_login);
                    $('#facebook-session').remove();
                })
            }
        })

    }



    $(document).on('click', '#login', function(e) {
        e.preventDefault();

        facebookLogin();
    })

    $(document).on('click', '#logout', function(e) {
        e.preventDefault();

        if (confirm("Sigurno?"))
            facebookLogout();
        else
            return false;
    })

})
