$(function(){
	$('.account-toggle').on('click',function(){
	  $(this).toggleClass('active');
	  $('.headerFW .mod_login').toggleClass('active');
	});
	$('body').on('click',function(e){
	  if(!$(e.target).closest('.mod_login,.account-toggle').length && !$(e.target).hasClass('mod_login')  && !$(e.target).hasClass('account-toggle')){
	    $('.headerFW .mod_login,.account-toggle').removeClass('active');
	  }
	});

	$('.strTC').each(function(){
    $(this).css('background-color',utils.stringToColor($(this).text()));
  })
});

app.check403 = function(jqXHR, textStatus){
  if("timeout" == textStatus)
    notif_fade.error("Erreur de communication avec le serveur.");
  else if(jqXHR.status == 403){
    notif_fade.error("Vous avez été déconnecté, la page va se rafraichir et vous devrez vous reconnecter.");
    setTimeout(function(){ location.reload(); }, 3000);
  }
  else
    notif.error("Erreur : " + textStatus);
}

