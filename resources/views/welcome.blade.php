<!DOCTYPE html>
<html ng-app = "laravelAndAngular">
<head lang="en">
    <script type="text/javascript">
        //          var paths = {
        //              root : '/public'
        //              /* bower: '/cams/bower_components',
        //              app : '/admin/',
        //              cms_path : '/admin/cms',
        //              vod_url: 'http://ewank.com/vod/',
        //              host : '',
        //              rest_url : '/rest' */
        //          };
    </script>
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
    <meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Bends</title>
    <!-- Custom fonts -->

    <!-- Scripts -->
    <script src="app/bower_components/angular/angular.min.js"></script>
    <script src="app/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="app/bower_components/angular-facebook/lib/angular-facebook.js"></script>
    <script src="app/app.js"></script>
    <script type="text/javascript" src="app/users/users.js"></script>
    <script type="text/javascript" src="app/bends/bends.js"></script>

    <!-- Filters -->
    <script type="text/javascript" src="app/bends/filters/bends.filters.js"></script>

    <!-- Controllers -->
    <script type="text/javascript" src="app/users/controllers/login.controller.js"></script>
    <script type="text/javascript" src="app/users/controllers/users.controller.js"></script>
<!--     // <script type="text/javascript" src="app/users/controllers/users.detail.controller.js"></script>
    // <script type="text/javascript" src="app/users/controllers/item.edit.controller.js"></script>
    // <script type="text/javascript" src="app/users/controllers/detail.item.controller.js"></script> -->
    <script type="text/javascript" src="app/bends/controllers/bends.controller.js"></script>
    <script type="text/javascript" src="app/bends/controllers/bend.login.controller.js"></script>
    <script type="text/javascript" src="app/bends/controllers/bend.facebook.controller.js"></script>

    <!-- Services -->
    <script type="text/javascript" src="app/users/services/users.services.js"></script>
    <script type="text/javascript" src="app/users/services/auth.service.js"></script>
    <script type="text/javascript" src="app/utils/utils.service.js"></script>

    <script type="text/javascript" src="app/bends/services/bends.services.js"></script>
    <script type="text/javascript" src="app/bends/services/auth.service.js"></script>
    <script type="text/javascript" src="app/bends/services/session.service.js"></script>

    <!-- Directives -->

    <!-- Bootstrap -->
    <link href="app/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bandsStyle.css" rel="stylesheet">

    <!-- CSS -->

</head>

<body>
  <nav class="navbar navbar-default" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span><span
                      class="icon-bar"></span><span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" ui-sref="home">Bands</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
              <li ng-class="{active: $state.includes('users')}"><a ui-sref="users.list">Users</a></li>
              <li ng-class="{active: $state.includes('bends')}"><a ui-sref="bends.list">Bends</a></li>
              <li><a ui-sref="about">About</a></li>
              <!-- <li><a ui-sref="logout">Logout</a></li> -->
          </ul>
          <ul ui-view="hint" class="nav navbar-nav navbar-right">
              {{--<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span--}}
                              {{--class="glyphicon glyphicon-comment"></span>Chats <span class="label label-primary">42</span>--}}
                  {{--</a>--}}
                  {{--<ul class="dropdown-menu">--}}
                      {{--<li><a href="#"><span class="label label-warning">7:00 AM</span>Hi :)</a></li>--}}
                      {{--<li><a href="#"><span class="label label-warning">8:00 AM</span>How are you?</a></li>--}}
                      {{--<li><a href="#"><span class="label label-warning">9:00 AM</span>What are you doing?</a></li>--}}
                      {{--<li class="divider"></li>--}}
                      {{--<li><a href="#" class="text-center">View All</a></li>--}}
                  {{--</ul>--}}
              {{--</li>--}}
              {{--<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span--}}
                              {{--class="glyphicon glyphicon-envelope"></span>Inbox <span class="label label-info">32</span>--}}
                  {{--</a>--}}
                  {{--<ul class="dropdown-menu">--}}
                      {{--<li><a href="#"><span class="label label-warning">4:00 AM</span>Favourites Snippet</a></li>--}}
                      {{--<li><a href="#"><span class="label label-warning">4:30 AM</span>Email marketing</a></li>--}}
                      {{--<li><a href="#"><span class="label label-warning">5:00 AM</span>Subscriber focused email--}}
                              {{--design</a></li>--}}
                      {{--<li class="divider"></li>--}}
                      {{--<li><a href="#" class="text-center">View All</a></li>--}}
                  {{--</ul>--}}
              {{--</li>--}}
          </ul>
      </div>
      <!-- /.navbar-collapse -->
  </nav>
<!-- <div class="container-fluid"> -->
    <!-- page content -->
    <!-- <div id="content" ng-view></div> -->
    <!-- <h1>INDEX PAGE!!!</h1> -->
<!-- </div> -->
  <div ui-view class="container" style="padding-top: 80px;"></div>
  <hr>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> -->
<script src="app/bower_components/jquery/dist/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="app/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>