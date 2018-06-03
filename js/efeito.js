$(function(){
	var i = 0;
	function slide(element, tamanhoP, qtd, i){
		if(i > qtd){
			$('#'+element+' ul').animate({marginRight: 0},1000);
			i = 0;
		}else{
			$('#'+element+' ul').animate({marginRight:'-='+tamanhoP}, 1000);
		}

		return i;
	}
	function effect(element, time){
		var tamanhoP = Number($('#'+element).width());
		$('#'+element+' li').css('width', tamanhoP+'px');
		$('#'+element+' li .row').css('width', tamanhoP+'px');

		var qtdLi = $('#'+element+' li').length;
		var wdtUl = tamanhoP*qtdLi;
		$('#'+element+' ul').css('width', wdtUl+'px');
		var qtd= qtdLi-1;

		$('#prev').on('click', function(e){
			e.preventDefault();
			if(i < qtd){
				$('#'+element+' ul').animate({marginRight:'-='+tamanhoP},1000);
				i++;
			}else if(i == qtd){
				$('#'+element+' ul').animate({marginRight:0}, 1000);
				i = 0;
			}
			console.log(i);
		});

		$('#next').on('click', function(e){
			e.preventDefault();
			if(i > 0){
				$('#'+element+' ul').animate({marginRight:'+='+tamanhoP},1000);
				i--;
			}else{
				$('#'+element+' ul').animate({marginRight:'-='+(tamanhoP*qtd)},1000);
				i = qtd;
			}
			console.log(i);
		});

		var t = setInterval(function(){
			i++;
			i = slide(element, tamanhoP, qtd, i);
		}, time);

		$('#'+element).on('mouseover', function(){
			clearInterval(t);
		});

		$('#'+element).on('mouseout', function(){
			t = setInterval(function(){
				i++;
				i = slide(element, tamanhoP, qtd, i);
			}, time);
		});
	}

	effect('slider', 5000);
});