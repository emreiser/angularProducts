var CreateProductCtrl = function($scope, $location, productData){

	// productData.loadProducts(function(data){
	// 	$scope.data.products = data.products;
	// });

	$scope.formData = {
    newProductName: '',
    newProductDescription: '',
    newProductPrice: ''
  };

  $scope.navNewProduct = function(){
    $location.url('/products/new')
  };

  $scope.navHome = function(){
    $location.url('/')
  };

  $scope.createProduct = function(){
  	console.log($scope.formData);
  	productData.createProduct($scope.formData);
  };

  $scope.clearProduct = function(){
    $scope.formData.newProductName = '';
    $scope.formData.newProductDescription = '';
    $scope.formData.newProductPrice = '';
  };

};