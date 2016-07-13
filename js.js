vk_mymsg_sel = '#l_msg  span.left_label.inl_bl';
vk_dialogs_sel = '#im_dialogs .dialogs_row';
$(vk_mymsg_sel).click(function(){
	msgflag = false;
	setInterval(function(){
		if(location.pathname=="/im"&&$(vk_dialogs_sel).length>0){
			chrome.storage.local.get('vkndata',function(e){								
				$(vk_dialogs_sel+" .dialogs_info a").each(function(){
					if(!$(this).hasClass('vkn_added')){
						for(a in e['vkndata']){
							if(e['vkndata'][a]['im']=="https://vk.com"+$(this).attr('href')){
								$(this).html($(this).html()+"<br><span style='color:"+e['vkndata'][a]['color']+";'>("+e['vkndata'][a]['note']+")<span>").addClass('vkn_added');
							}
						}
					}
				});
			});
		}	
	}
	,500);
	})