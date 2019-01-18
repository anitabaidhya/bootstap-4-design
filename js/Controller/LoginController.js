app.controller('LoginController', ['$scope', '$location', '$state',  '$filter', '$window', LoginController]);

function LoginController($scope, $location, $state, $filter,  $window) {
  

  $scope.screenHeight = '';
  $scope.calculateScreenHeight = function() {
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

    $scope.screenHeight = height - subheight - 20;
    $scope.screenWidth = width;
  }

  window.onresize = function(event) {
    $scope.$apply(function() {
      $scope.calculateScreenHeight();
    })
  };


  $scope.calculateScreenHeight();
  $scope.goto = function(val) {
    $state.go(val);
  }


  $scope.hideSlider = false;
			$scope.block1height = '50%';
			$scope.block2height = '50%';
			$scope.hideBlock1 = false;
			$scope.hideBlock2 = false;
			$scope.toggleSlider = function() {
				if($scope.hideSlider){
					$scope.hideSlider = false;	
				} else {
					$scope.hideSlider = true;	
				}				
			}
			
			$scope.toggleBlock = function(name) {
				switch(name){
					case "block1":
						if($scope.block1height == "50%"){
							$scope.block1height = '100%';
							$scope.hideBlock2 = true;
						} else {
							$scope.block1height = '50%';
							$scope.hideBlock2 = false;							
						}
						break;
					case "block2":
						if($scope.block2height == "50%"){
							$scope.block2height = '100%';
							$scope.hideBlock1 = true;
						} else {
							$scope.block2height = '50%';
							$scope.hideBlock1 = false;	
						}
						break;
				}
				

    };
  }

