(function () {
'use strict';
angular.module('Lunch', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController ($scope) {
  $scope.name = "";
  $scope.string ;

  $scope.getData = function () {
  var  data = $scope.name;
  // convert string to array to count length
  // uses split method with comma char
  var strConvert = data.split(',');
  if (strConvert.length <= 1) {
    $scope.string= "Enter data please!";
  }else if (strConvert.length <= 3) {
    $scope.string = "Enjoy!";
  } else {
    $scope.string = "Too much!";
  }
  console.log(strConvert);
  };
};

})();
