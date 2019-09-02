let App = angular.module('App',[]);
App.directive('navBar',function(){
    return{
        templateUrl:'../Components/nav-component.html'
    }
})

App.directive('footerNav',function(){
    return{
        templateUrl: '../Components/footer-component.html'
    }
})
App.directive('paginationBar',function(){
    return{
        templateUrl: '../Components/Pagination-component.html'
    }
})
