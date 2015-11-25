app.controller('MainController', ['$scope', function($scope) {
  $scope.promo = 'Get your Kicks!!!';

  // $scope.products = [
  // 	{
  //   	name: '',
  //   	price: '200',
  //   	cover: 'http://4.kicksonfire.net/wp-content/uploads/2015/11/Nike-Air-Presto-Desert-Digi-Camo-3-300x194.jpg?d25dc5',
  //     likes: 0,
  //     dislikes:0
  // 	},
  //   {
  //     name: '',
  //     price: '98',
  //     cover: 'http://5.kicksonfire.net/wp-content/uploads/2015/11/adidas-Originals-Tubular-X-Boonix-1-300x194.jpg?784c8a',
  //     likes: 0,
  //     dislikes:0
  //   },
  //   {
  //     name: '',
  //   	price: '500',
  //   	cover: 'http://4.kicksonfire.net/wp-content/uploads/2015/11/adidas-heritage-reborn-12-300x194.jpg?d25dc5',
  //     likes: 0,
  //     dislikes:0
  //   },
  //   {
  //     name: '',
  //     price: '309',
  //     cover: 'http://6.kicksonfire.net/wp-content/uploads/2015/08/imagemagic-1.php_7-300x194.jpeg?d25dc5',
  //     likes: 0,
  //     dislikes:0
  //   },
  //   {
  //     name: '',
  //   	price: '789',
  //   	cover: 'http://4.kicksonfire.net/wp-content/uploads/2015/11/Nike-Kobe-10-21-300x194.jpg?d25dc5',
  //     likes: 0,
  //     dislikes:0
  //   },
  //   {
  //     name: '',
  //   	price: '321',
  //   	cover: '',
  //     likes: 0,
  //     dislikes:0
  //   },
  //   {	name: '',
  //   	price: '345',
  //   	cover: 'http://5.kicksonfire.net/wp-content/uploads/2015/11/nike-free-trainer-1-chalk-for-your-feet-2-300x194.jpg?784c8a',
  //     likes: 0,
  //     dislikes:0
  //   },
  //   {
  //     name: '',
  //     price: '567',
  //     cover: 'http://4.kicksonfire.net/wp-content/uploads/2015/09/imagemagic.php_-300x194.jpeg?784c8a',
  //     likes: 0,
  //     dislikes:0
  //   },
  //   {
  //     name: '',
  //     price: '564',
  //     cover: 'http://6.kicksonfire.net/wp-content/uploads/2015/08/reebok-question-low-r13-carbon-aqua-4-300x194.jpg?784c8a',
  //     likes: 0,
  //     dislikes:0
  //   },
  //   {
  //     name: '',
  //     price: '354',
  //     cover: 'http://4.kicksonfire.net/wp-content/uploads/2015/11/Air-Jordan-8-Aqua-1-300x194.jpg?d25dc5',
  //     likes: 0,
  //     dislikes:0
  //   },
  //
  //
  // ];

  $scope.plusOne = function(index) {
   $scope.products[index].likes += 1;
 };
 $scope.minusOne = function(index) {
  $scope.products[index].dislikes += 1;
 };
 $scope.changeClass = function(){
     if ($scope.movie === "hidden")
         $scope.movie = "active";
      else
         $scope.movie = "hidden";
 };

}]);
