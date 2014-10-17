document.addEventListener('deviceready', function(){
    navigator.splashscreen.show();
}, false);

/*document.addEventListener("backbutton", onBackKeyDown, false);

function onBackKeyDown() {
    // Handle the back button
    window.plugins.orientationLock.unlock();
    window.location.replace("index.html");
}*/

var mailUser = "";
var statistiques = "";
var date = "";
var heure = "";

var today = new Date(); 
        var dd = today.getDate(); 
        var mm = today.getMonth()+1;//January is 0! 
        var yyyy = today.getFullYear(); 
        if(dd<10){dd='0'+dd} 
        if(mm<10){mm='0'+mm} 

function hh_mm_ss () {
  now = new Date();
  year = "" + now.getFullYear();
  month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
  day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
  hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
  minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
  second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
  return hour + ":" + minute + ":" + second;
}

function ajouterLigneStat(page){
    //alert("oki");
    //alert(mailUser);
    date = dd+'/'+mm+'/'+yyyy;
    //alert(date);
    heure = hh_mm_ss();
    //alert(heure);
    //alert(page);
        //statistiques+= date + ";" + heure + ";" + mailUser + ";" + page+ ";";
        //alert(statistiques);
        

      $.post("http://4planet.eu/",
        {
          dateDrive:date,
          heureDrive:heure,
          mailDrive:mailUser,
          pageDrive:page
        },
        function callback(data,status){
          alert("Data: " + data + "\nStatus: " + status);
        },json); 
}



var app = angular.module('app', []);

app.factory('GeolocationService', function($window, $q, $rootScope){
    var geolocation = $window.navigator.geolocation;
    return {
        getCurrentPosition : function(onSuccess, onError){
            geolocation.getCurrentPosition(function(position){
                $rootScope.$apply(function(){
                    onSuccess(position);
                })
            }, function(){
                $rootScope.$apply(function(){
                    onError();
                })
            })
        }
    }
})

app.config(function($routeProvider){
    $routeProvider
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/spots', {templateUrl: 'partials/spots.html'})
        /*.when('/scan', {templateUrl: 'partials/scan.html'})*/
        .when('/map', {templateUrl: 'partials/map.html'})
        .when('/jeu', {templateUrl: 'partials/jeu.html'})
        .when('/credit', {templateUrl: 'partials/credit.html'})
        .otherwise({redirectTo: '/home'})
})