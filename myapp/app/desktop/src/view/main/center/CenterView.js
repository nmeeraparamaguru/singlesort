/* Ext.define('Myapp.view.main.center.CenterView', {
	
		extend: 'Ext.grid.Grid',
		xtype: 'centerview',
		cls: 'centerview',
		title: 'Reykjavik Flight Departures',
		items: [{
			docked: 'top',
			xtype: 'toolbar',
			items: [{
				text: 'Sort on destination',
				handler: function(button){
					// Sort under program control
					button.up('grid').getStore().sort('to');
				}
			}]
		}],
		store: {
		 
			// Sort via store configuration
			sorters: [{
				property: 'airline'
			}],
		 
			type: 'store',
			autoLoad: true,
			fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
			proxy: {type: 'ajax',url: 'departures.json',reader: {rootProperty: 'results'}}
		},
		 
		columns: [{
			xtype: 'datecolumn',
			text: 'Date',
			dataIndex: 'date',
			format: 'M j',
			width: 60
		}, {
			xtype: 'column', // This is the default column xtype
			text: 'Airline',
			dataIndex: 'airline'
		}, {
			text: 'To',
			dataIndex: 'to'
		}, {
			text: 'Scheduled',
			dataIndex: 'plannedDeparture',
			align: 'center'
		}, {
			text: 'Status',
			dataIndex: 'realDeparture',
			flex: 1
		}],
		 
		});
		 
	
 */  //filters
		/* Ext.define('Myapp.view.main.center.CenterView', {
			xtype: 'centerview',
		cls: 'centerview',
			extend: 'Ext.grid.Grid',
			title: 'Reykjavik Flight Departures',
			 
			plugins: {
				gridfilters: true // new features adding 
			},
			 
			onClearFilters: function(){
				this.getStore().clearFilter();
			},
			columns: [{
				xtype: 'datecolumn',
				text: 'Date',
				dataIndex: 'date',
				format: 'M j, Y',
				filter: true,
				width: 120
			}, {
				xtype: 'column', // This is the default column xtype
				text: 'Airline',
				dataIndex: 'airline',
				width: 200,
				filter: 'string'
			}, {
				text: 'To',
				dataIndex: 'to',
				width: 200,
				filter: 'string'
			}, {
				text: 'Scheduled',
				dataIndex: 'plannedDeparture',
				align: 'center'
			}, {
				text: 'Status',
				dataIndex: 'realDeparture',
				flex: 1
			}],
			 
			store: {
				type: 'store',
				autoLoad: true,
				fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
				proxy: {type: 'ajax',url: 'departures.json',reader: {rootProperty: 'results'}}
			}
			 
			}); */
			/* Ext.define('Myapp.view.main.center.CenterView', {
				xtype: 'centerview',
		cls: 'centerview',
				extend: 'Ext.grid.Grid',
				title: 'Pokemon',
				
				onClearFilters: function(){
					this.getStore().clearFilter();
				},
				 
				onHpChange: function(field, value) {
					var store = this.getStore();
					store.clearFilter();
					store.filterBy(function(r1) {
						return r1.data.hp >= value;
					});
				},
				 
				items: [{
					xtype: 'toolbar',
					docked: 'top',
					items: [{
						xtype: 'spinnerfield',
						minValue: 30,
						maxValue: 100,
						stepValue: 10,
						value: 30,
						width: 80,
						labelWidth: 30,
						label: 'HP',
						listeners: {
							change: 'up.onHpChange'
						}
					}]
				}],
				plugins: {
					gridsummaryrow: true,
					gridfilters: true
				},
				store: {
					sorters: ['hp'],
					proxy: {
						type: 'ajax',
						url: 'inventory.json'
					},
					autoLoad: true
				},
				columns: [{
					text: 'Name',
					dataIndex: 'name',
					summary: 'count',
					filter: 'string',
					summaryRenderer: function(grid, context) {
						return (context.records.length + ' Pokemon');
					}
				}, {
					text: 'HP',
					dataIndex: 'hp',
					filter: 'string'
				}, {
					text: 'Attack',
					dataIndex: 'attack',
					filter: 'string'
				}, {
					cell: {
						encodeHtml: false,
						tpl: '<img src="https://docs.sencha.com/resources/json/pokemon/{pokedex}.png" height="24">',
					},
					text: 'Picture',
					dataIndex: 'pokedex',
					flex: 1
				}]
				}); */
				Ext.define('Myapp.view.main.detail.CenterView', {
					xtype: 'centerview',
					cls: 'centerview',
					extend: 'Ext.grid.Grid',
					title: 'Reykjavik Flight Departures',
				  
					grouped: true,
				  
					columns: [{
						xtype: 'datecolumn',
						text: 'Date',
						dataIndex: 'date',
						format: 'M j, Y',
						width: 120
					}, {
						xtype: 'column', // This is the default column xtype
						text: 'Airline',
						dataIndex: 'airline',
						width: 200
					}, {
						text: 'To',
						dataIndex: 'to',
						width: 200
					}, {
						text: 'Scheduled',
						dataIndex: 'plannedDeparture',
						align: 'center'
					}, {
						text: 'Status',
						dataIndex: 'realDeparture',
						flex: 1
					}],
				  
					store: {
						type: 'store',
						autoLoad: true,
						fields: [{name: 'date',type: 'date',dateFormat: 'j. M'}],
						proxy: {type: 'ajax',url: 'departures.json',reader: {rootProperty: 'results'}}
					}
					});