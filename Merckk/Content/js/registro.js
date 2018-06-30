
//window.fbAsyncInit = function() {
//  FB.init({
//    appId            : '348324312344495',
//    autoLogAppEvents : true,
//    xfbml            : true,
//    version          : 'v2.12'
//  });

//  FB.getLoginStatus(function(response){
//    statusChangeCallback(response);
//  });
//};

//(function(d, s, id){
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) {return;}
//   js = d.createElement(s); js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk.js";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// function statusChangeCallback(response){
//   if(response.status === 'connected'){
//     console.log('autenticacion');
//     FB.api('/me', { locale: 'en_US', fields: 'name, email, id' },
//      function(response) {

//      document.getElementById('email').innerHTML = response.email;
//      document.getElementById('name').innerHTML = response.name;
//      document.getElementById('id').innerHTML = response.id;

//       $.ajax({
//        type: 'post',
//        url: 'https://2da37cdb.ngrok.io/api/Usuario/LoginFacebook',
//        dataType: "json",
//        data: {
//            "usuario": {
//            "usuario": response.name,
//            "contrasena": response.id
//            },
//            "persona": {
//            "email": response.email
//                      }
//                      },
//        success: function(data) {
//            console.log(data);
//            alert(data);
//        }
//     })
//      });   
//   }else {
//     console.log('no autenticado');

//   }
// }

// function checkLoginState(){
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }


FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
});
function statusChangeCallback(response) {
    if (response.status === 'connected') {
        console.log('autenticacion');
        FB.api('/me', { locale: 'en_US', fields: 'name, email, id' },
            function (response) {
                console.log(response);
            });

    } else {
        console.log('no autenticado');

    }
}
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}
