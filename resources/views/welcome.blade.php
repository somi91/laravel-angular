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

    <title>Ewank Cams</title>
    <!-- Custom fonts -->

    <!-- Scripts -->
    <script src="app/bower_components/angular/angular.min.js"></script>
    <script src="app/bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="app/app.js"></script>
    <script type="text/javascript" src="app/users/users.js"></script>
    <script type="text/javascript" src="app/bends/bends.js"></script>

    <!-- Controllers -->
    <script type="text/javascript" src="app/users/controllers/login.controller.js"></script>
    <script type="text/javascript" src="app/users/controllers/users.controller.js"></script>
<!--     // <script type="text/javascript" src="app/users/controllers/users.detail.controller.js"></script>
    // <script type="text/javascript" src="app/users/controllers/item.edit.controller.js"></script>
    // <script type="text/javascript" src="app/users/controllers/detail.item.controller.js"></script> -->
    <script type="text/javascript" src="app/bends/controllers/bends.controller.js"></script>

    <!-- Services -->
    <script type="text/javascript" src="app/users/services/users.services.js"></script>
    <script type="text/javascript" src="app/users/services/auth.service.js"></script>
    <script type="text/javascript" src="app/utils/utils.service.js"></script>

    <script type="text/javascript" src="app/bends/services/bends.services.js"></script>

    <!-- Directives -->

    <!-- Bootstrap -->
    <link href="app/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- CSS -->

</head>

<body>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" ui-sref="home">Comtrade</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li ng-class="{active: $state.includes('users')}"><a ui-sref="users.list">Users</a></li>
          <li ng-class="{active: $state.includes('bends')}"><a ui-sref="bends.list">Bends</a></li>
          <li><a ui-sref="about">About</a></li>
          <!-- <li><a ui-sref="logout">Logout</a></li> -->
          <li ui-view="hint" class="pull-right ng-scope"></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
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