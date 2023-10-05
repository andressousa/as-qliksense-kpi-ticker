/*!
*
* The MIT License (MIT)
* Copyright (c) 2023
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* @link https://github.com/andressousa/as-qliksense-kpi-ticker
* @author André Sousa
* @license MIT
*/

define([
	 "qlik"
	,"jquery"
	,"./scroller"
	,"./definition"
	,"./support"
	,"css!./style.css"
],
function (
	 qlik
	,$
	,scroller
	,definition
	,support
){
	"use strict";

	/**
	 * Function to provide random IDs for html elements
	 *
	 * @returns string
	 *
	 */
	function randID(){
	    let result = '';
	    const chr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	    const chrLen = chr.length;
	    while (result.length < 10) {
			result += chr.charAt(Math.floor(Math.random() * chrLen ));
	    }
	    return 'scroll-' + result;
	}

	return {
		definition 	: definition,
		support 	: support,
		paint: function ($element, layout) {

			//current app instance
			var app = qlik.currApp();

			//clear html
			$element.empty();

			//generate element ID
			var objID = randID();

			//generate full html layout
			var html = '<div class="carouselTicker" id="'+objID+'">';

			html += '<ul class="carouselTicker__list">';

			if( layout.kpi_1 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_1+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_2 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_2+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_3 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_3+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_4 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_4+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_5 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_5+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_6 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_6+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_7 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_7+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_8 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_8+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_9 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_9+'" style="width:'+layout.objectWidth+'px;"></li>';
			}
			if( layout.kpi_10 !== null ){
				html += '<li class="carouselTicker__item" data-obj="'+layout.kpi_10+'" style="width:'+layout.objectWidth+'px;"></li>';
			}

			html += '</ul></div>';

			//show elements
			$element.append(html);

			//initiate scroller
			var target = $("body").find('#' + objID);
			target.carouselTicker({
				speed: layout.scrollSpeed > 0 ? ( layout.scrollSpeed || 5 ) / 10 : 0,
				reverse: layout.scrollDirection || false
			});

			$element.find('.carouselTicker__list li').each(function(){
				$(this).attr('id', randID());
				if( layout.showBorder == false ) $(this).addClass('no-border');
				app.getObject( $(this).attr('id'), $(this).attr('data-obj') );
			});

			return qlik.Promise.resolve();

		}, controller: ["$scope", "$element", function ( $scope ) {
			$(window).resize(function(){
				qlik.resize();
			});
		}]
	};

});
