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


  $('body').on('click', 'a.openModal', function(e) {
  	e.preventDefault()
  	let modal = new app.ModalFW({
  		name:'customModal-'+utils.uniqid(),
  		url: this.href,
  		blnAutodestroy: true
  	}).open()
  });
});

document.querySelectorAll('.headerFW li>a[class*=icon--],.headerFW li>strong[class*=icon--]').forEach((el)=>{
	let FAclass = el.classList.value.match(/\bicon--[a-zA-Z-\--\_]*/gm)?.[0] || undefined;
	if (FAclass) {
		FAclass = FAclass.split('--')[1];
		el.prepend(utils.getNodeFromString('<i class="'+FAclass.split('__').join(' ')+'"></i>'));
	}
})
document.querySelectorAll('.block-card[class*=icon--]').forEach((el)=>{
	let FAclass = el.classList.value.match(/\bicon--[a-zA-Z-\--\_]*/gm)?.[0] || undefined;
	if (FAclass) {
		FAclass = FAclass.split('--')[1];
		el.querySelector('.block-card__figure').prepend(utils.getNodeFromString('<i class="'+FAclass.split('__').join(' ')+'"></i>'));
	}
})

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

