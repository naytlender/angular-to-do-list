var app = angular.module("app", [])

app.controller('ctrl', function($scope){

  $scope.listItems = [];

  $scope.addItem = function(){
    $scope.listItems.push({toDoText:$scope.listItem, done:false})
    $scope.listItem = ""
    $scope.touchedTimes = 0;
  };

  $scope.deleteSel = function(){
    var oldList = $scope.listItems;
    $scope.listItems = [];
    oldList.forEach(function(task){
      if(task.done == false){
        $scope.listItems.push(task)
      }
    })
  }

  $scope.selectAll = function(){
    $scope.listItems.forEach(function(task){
      task.done = true;
    })
  }

  $scope.deselectAll = function(){
    $scope.listItems.forEach(function(task){
      task.done = false;
    })
  }

  $scope.deleteItem = function(item){
    var index = $scope.listItems.indexOf(item);
    $scope.listItems.splice(index, 1)
  }

  console.log($scope.listItems)

})