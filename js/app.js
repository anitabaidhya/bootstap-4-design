var app = angular.module('app', 
    ['ui.router']);
//Route
app.config(
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("login");

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })

        //maintenance
    });



app.run(function($rootScope, $state, $location, $window, $timeout) {
    $rootScope.visible = true;
    
    $rootScope.$on('$viewContentLoading',
        function(event, viewConfig) {
            var busy = angular.element(document.querySelector('.cg-busy'));
            busy.removeClass('ng-hide');
        });
    $rootScope.calculateScreenHeight = function() {
        var height = $window.innerHeight;
        var width = $window.innerWidth;
        var subheight = 0;
        var headerheight = document.getElementById('headerTitle1');
        var headerheight2 = document.getElementById('headerTitle2');
        if (headerheight) {
            subheight += headerheight.offsetHeight;
        }

        if (headerheight2) {
            subheight += headerheight2.offsetHeight;
        }

        $rootScope.screenHeight = height - subheight - 20;
        $rootScope.screenWidth = width
        $rootScope.$broadcast('screenResize', {
            'height': width,
            'width': height
        })

    }
    $rootScope.$on('$viewContentLoaded',
        function(event) {
            $rootScope.$broadcast("viewContentLoaded");

           
            $timeout(function() {

            }, 500);



        });

   
    window.addEventListener('resize', function() {
        $rootScope.calculateScreenHeight();
    });



    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        // do something

       //forceSSL($location,$window);

        
       

       
    })

    $rootScope.$on('loading:progress', function() {
        $rootScope.loading = true;

    });

    $rootScope.$on('loading:finish', function() {
        $rootScope.loading = null;
    });



});
