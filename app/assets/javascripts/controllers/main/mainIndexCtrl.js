var IndexCtrl = function($scope, $location, $http, productData){

	$scope.data = {};

	productData.loadProducts(function(data){
		$scope.data.products = data.products;
	});

  $scope.viewPost = function(productId){
    $location.url('/products/' + productId);
  };

  $scope.navNewProduct = function(){
    $location.url('/products/new');
  };

};