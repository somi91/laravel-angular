<!DOCTYPE html>
<html ng-app = "laravelAndAngular">
    <head lang="en">
    	<script type="text/javascript">
//			var paths = {
//				root : '/public'
//				/* bower: '/cams/bower_components',
//				app : '/admin/',
//				cms_path : '/admin/cms',
//				vod_url: 'http://ewank.com/vod/',
//				host : '',
//				rest_url : '/rest' */
//			};
		</script>
        <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
        <meta name="viewport" content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <title>Ewank Cams</title>
        <!-- Custom fonts -->
               
        <!-- Scripts --> 
        <script src="app/bower_components/angular/angular.min.js"></script>
        <script src="app/bower_components/angular-route/angular-route.min.js"></script>
        <script src="app/app.js"></script>
        
        <!-- Controllers -->
        <script src="app/controllers/DrugiController.js"></script>
        <script src="app/controllers/IndexController.js"></script>

        <!-- Services -->

        <!-- Directives -->
        
        <!-- Bootstrap -->
        <link href="app/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
        
        <!-- CSS -->

    </head>

    <body>
        <div class="container-fluid">
        	<!-- page content -->
        	<div id="content" ng-view></div>
     		<!-- <h1>INDEX PAGE!!!</h1> -->
        </div>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> -->
        <script src="app/bower_components/jquery/dist/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="app/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    </body>
</html>