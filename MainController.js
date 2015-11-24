app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Top 10';
  $scope.promo = 'The most popular movies this month.';
  $scope.class = '';


  $scope.products = [
  	{
    	name: 'The Hunger Games: Mockingjay - Part 2',
    	Wkgross: 103003000,
    	pubdate: new Date('2015', '11', '20'),
    	cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/159276/images/masterrepository/fandango/159276/fin06_seashore2_payoff_25x38.jpg',
      youtube:'<iframe width="854" height="480" src="https://www.youtube.com/embed/KmYNkasYthg" frameborder="0" allowfullscreen></iframe>',
    	likes: 0,
      dislikes:0
  	},
    {
      name: 'SPECTRE',
      Wkgross: 14600000,
      pubdate: new Date('2015', '06', '21'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/180670/images/masterrepository/fandango/180670/spectre.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/7GqClqvlObY" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },
    {
      name: 'THE PEANUTS MOVIE',
      Wkgross: 12800000,
      pubdate: new Date('2015', '11', '06'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/179812/images/masterrepository/fandango/179812/peanuts_verc_ratedposter_srgb.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/-XmV3zGifOE" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },
    {
      name: 'The Night Before',
      Wkgross: 10010000,
      pubdate: new Date('2015', '11', '20'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/185544/images/masterrepository/fandango/185544/thenightbefore.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/ShIAH_G-Iuw" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },
    {
      name: 'Secret in Their Eyes',
      Wkgross: 6063000,
      pubdate: new Date('2015', '11', '20'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/184831/images/masterrepository/fandango/184831/secretintheireyes.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/N3b0PFCrayE" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },
    {
      name: 'LOVE THE COOPERS',
      Wkgross: 3093000,
      pubdate: new Date('2015', '11', '13'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/185538/images/masterrepository/fandango/185538/sm_lovethecoopers_finalones.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/-TSX_0rwPNc" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },
    {
      name: 'THE MARTIAN',
      Wkgross: 3070000,
      pubdate: new Date('2015', '10', '02'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/183474/images/masterrepository/fandango/183474/themartian.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/ej3ioOneTy8" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },
    {
      name: 'SPOTLIGHT',
      Wkgross: 3060000,
      pubdate: new Date('2015', '11', '06'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/184742/images/masterrepository/fandango/184742/spotlight.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/EwdCIpbTN5g" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },
    {
      name: 'THE 33',
      Wkgross: 2024000,
      pubdate: new Date('2015', '11', '13'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/183574/images/masterrepository/fandango/183574/the33poster.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/hOoIBOYqHyw" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },
    {
      name: 'BRIDGE OF SPIES',
      Wkgross: 1095000,
      pubdate: new Date('2015', '11', '16'),
      cover: 'http://images.fandango.com/r98.7/ImageRenderer/500/500/redesign/static/img/default_poster.png/184015/images/masterrepository/fandango/184015/bridgeofspies-ps-1.jpg',
      youtube: '<iframe width="854" height="480" src="https://www.youtube.com/embed/mBBuzHrZBro" frameborder="0" allowfullscreen></iframe>',
      likes: 0,
      dislikes:0
    },


  ];

  $scope.plusOne = function(index) {
   $scope.products[index].likes += 1;
 };
 $scope.minusOne = function(index) {
  $scope.products[index].dislikes += 1;
 };
 $scope.changeClass = function(){
     if ($scope.class === "hidden")
         $scope.class = "active";
      else
         $scope.class = "hidden";
 };

}]);
