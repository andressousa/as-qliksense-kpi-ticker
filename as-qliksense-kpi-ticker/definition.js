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

define(["qlik", "ng!$q"],
function ( qlik, $q ){
	"use strict";

	//current app
	var app = qlik.currApp();

	/**
	 * Function for listing all objects in the master item list
	 *
	 * @returns list
	 *
	 */
	function listObjects(){
		var defer = $q.defer();
		app.getAppObjectList('masterobject', function(data){
			var objects = [];
			objects.push({
				value: null,
				label: 'Select'
			});
			var sortedData = _.sortBy( data.qAppObjectList.qItems, function(item){
				return item.qData.rank;
			});
			_.each(sortedData, function(item){
				objects.push({
					value: item.qInfo.qId,
					label: item.qMeta.title
				});
			});
			return defer.resolve(objects);
		} );
		return defer.promise;		
	};


	return {
		type: "items",
		component: "accordion",
		items: {
			appearence: {
				uses: "settings"
			},
			settings: {
				type: "items",
				label: "Params",
				items: {
					scrollSpeed: {
						type: "number",
						component: "dropdown",
						label: "Scroll Speed",
						ref: "scrollSpeed",
						defaultValue: 5,
						options: [
							{				
								value: 0,
								label: 'Stop'
							},
							{				
								value: 1,
								label: 'Slowly'
							},
							{				
								value: 3,
								label: 'Slow'
							},
							{				
								value: 5,
								label: 'Normal'
							},
							{				
								value: 7,
								label: 'Fast'
							},
							{				
								value: 9,
								label: 'Faster'
							}
						]
					},
					scrollDirection: {
						type: "boolean",
						component: "dropdown",
						label: "Scroll Direction",
						ref: "scrollDirection",
						defaultValue: true,
						options: [
							{				
								value: true,
								label: 'Left to Right'
							},
							{				
								value: false,
								label: 'Right to Left'
							}
						]
					},
					objectWidth: {
						type: "number",
						label: "Object Width",
						ref: "objectWidth",
						defaultValue: 150
					},
					showBorder: {
						type: "string",
						component: "dropdown",
						label: "Show boerder",
						ref: "showBorder",
						defaultValue: true,
						options: [
							{				
								value: true,
								label: 'Yes'
							},
							{				
								value: false,
								label: 'No'
							}
						]
					},
					kpi_1: {
						type: "string",
						component: "dropdown",
						label: "Object 1",
						ref: "kpi_1",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_2: {
						type: "string",
						component: "dropdown",
						label: "Object 2",
						ref: "kpi_2",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_3: {
						type: "string",
						component: "dropdown",
						label: "Object 3",
						ref: "kpi_3",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_4: {
						type: "string",
						component: "dropdown",
						label: "Object 4",
						ref: "kpi_4",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_5: {
						type: "string",
						component: "dropdown",
						label: "Object 5",
						ref: "kpi_5",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_6: {
						type: "string",
						component: "dropdown",
						label: "Object 6",
						ref: "kpi_6",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_7: {
						type: "string",
						component: "dropdown",
						label: "Object 7",
						ref: "kpi_7",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_8: {
						type: "string",
						component: "dropdown",
						label: "Object 8",
						ref: "kpi_8",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_9: {
						type: "string",
						component: "dropdown",
						label: "Object 9",
						ref: "kpi_9",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
					kpi_10: {
						type: "string",
						component: "dropdown",
						label: "Object 10",
						ref: "kpi_10",
						defaultValue: null,
						options: function(){ return listObjects().then(function(items){ return items; }); }
					},
				}
			}
		}
	}
});