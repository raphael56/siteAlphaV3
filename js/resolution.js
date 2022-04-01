// ----------------------------------------------------------------------------
//--------------------resolution écran----------------------------------
// ----------------------------------------------------------------------------
var message = 'Votre écran à une résolution de ' + screen.width + 'x' + screen.height + '.';
if( screen.width <= 767 ){
    message += " Votre écran est correct pour cette application";
} else {
  message += " Ce n'est pas un écran mobile. Cette application n'est pas encore configurée pour ce type d'écran";
  alert(message);
}
