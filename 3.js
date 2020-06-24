$(function(){
	var $maininMenuItems = $("#main-menu ul").children("li"),/*tout le li*/
	totalmaininMenuItems = $maininMenuItems.length,/*le nbr de li*/
	openedIndex = 2, /*inconnu*/
		
	init = function(){
		bindEvents();
		if(validIndex(openedIndex))
		animateItem($maininMenuItems.eq(openedIndex),true,700);
	},
		bindEvents = function(){
		$maininMenuItems.children(".images").click(function(){
			var newIndex = $(this).parent().index();/*le numero de li qu'on a cliqué*/
			checkAndAnimateItem(newIndex);
				
			
		});
				
			$(".button").hover(
			function(){
					$(this).addClass("hovered");
				},
				function(){
					$(this).removeClass("hovered");
				}
			);
				
			$(".button").click(function(){
				var newIndex = $(this).index();
				checkAndAnimateItem(newIndex);

			});
			

	},
		
	validIndex = function(indexToCheck){/*fct pour verifier si le li cliqué est dans la liste*/
		return (indexToCheck >=0) && (indexToCheck <totalmaininMenuItems);
	}
	
	animateItem =function($item,toOpen,speed){
		var $colorImage = $item.find(".color"),
			itemParam = toOpen ? {width:"420px"}:{width:"140px"},
			colorImageParam = toOpen ? {left:"0px"}:{left:"140px"};
		     $item.animate(itemParam,speed);
			$colorImage.animate(colorImageParam,speed);
		
	var $p1 = $item.find("#p1"),
	 $p2 = $item.find("#p2"),
	 $p3 = $item.find("#p3");
		
		if(toOpen ==true){
			$p1.hide();
			$p2.hide();
			$p3.hide();		
			
			$p1.fadeIn(500, function () {
			$p2.fadeIn(500, function () {
			$p3.fadeIn(500);
				 });
				 });
			
		}
			
	};
	
	
	checkAndAnimateItem = function(indexToCheckAndAnimate){
		if(openedIndex === indexToCheckAndAnimate)/*teste si on a cliqué un li déja ouvert*/
				{
					animateItem($maininMenuItems.eq(indexToCheckAndAnimate),false,250);/*fermé le li ouvert*/
					openedIndex = -1;/*acun li ouvert*/
				}
			else 
				{
					if(validIndex(indexToCheckAndAnimate))/*tester si le nouvele index qu'on a cliqué parmi nos li*/
					   {
						   animateItem($maininMenuItems.eq(openedIndex),false,250);/*fermé le li ouvert*/
						   openedIndex = indexToCheckAndAnimate;
						   animateItem($maininMenuItems.eq(indexToCheckAndAnimate),true,250);/*ouvres le li qu'on a cliqué*/
					   }
				}
	};
	
	init();
	
		
});