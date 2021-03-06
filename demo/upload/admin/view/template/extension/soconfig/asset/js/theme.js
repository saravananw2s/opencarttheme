$(document).ready(function() {
	// Initialize the sticky scrolling on an item
	$(function() {
	    return $("[data-sticky_column]").stick_in_parent({
	      parent: "[data-sticky_parent]"
	    });
	});
	var tabs = $('.btn-toggle');
	tabs.each(function(i) {
		var tab = $(this).children('.btn');
		var ua = navigator.userAgent,
		event = (ua.match(/iPad/i)) ? "touchstart" : "click";
		tab.bind(event, function(e) {
			
			$(this).addClass(function() {
				if($(this).hasClass("btn-success")) return "";
				return "btn-success";
			});
			$(this).parent().find(".active").removeClass("btn-success");
		});
	});	
	
	//======= Create Cookies  MainTabs======= 
	var store_id ='';
	$('.main_tabs_vertical li a').bind('click', function(){
		menuTabs = $(this).attr('href').replace('#', '').replace ('tab-', '');
		storeId = menuTabs.substr(menuTabs.length - 1);
		$.cookie('main_tabs_vertical',menuTabs);
	});
	
	main_tabs = $.cookie('main_tabs_vertical');
	if (main_tabs) changeMainTabs(main_tabs);
	
	//======= Font Setting======= 
	$(".fonts-change").each( function(){
		var $this = this;
		$(".items-font",$this).hide();  
		$(".font-"+$(".type-fonts:checked",$this).val(), this).show();
	 
		$(".type-fonts", this).change( function(){
			$(".items-font",$this).hide();
			$(".font-"+$(this).val(), $this).show();
		} );
	});
	
})

function changeMainTabs($menuItem){
	$store_tab = 'tab-store';
	$('#'+$store_tab+' .main_tabs_vertical').find('> li').removeClass('active');
	$('#'+$store_tab+' .main_tabs_vertical > li').each(function() {
		if($(this).find('a').attr('href').indexOf($menuItem)!= -1) $(this).addClass('active');
	});
	$('#'+$store_tab+' .sidebar +.tab-content').find('> .tab-pane').removeClass('active');
	$('#'+$store_tab+' .sidebar +.tab-content > .tab-pane').each(function() {
		$("#tab-" + $menuItem).addClass('active');
		
	});
}

