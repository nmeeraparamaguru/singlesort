Ext.define('Myapp.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',
	onArchive: function() {
		var grid = this.getView();
		var records = grid.getSelections();
		var names = Ext.Array.pluck(Ext.Array.pluck(records, 'data'), 'name');
		Ext.Msg.alert('Archive', 'Archive ' + names.join(', ') + '?');
	},
	onDelete: function() {
		var grid = this.getView();
		var records = grid.getSelections();
		var names = Ext.Array.pluck(Ext.Array.pluck(records, 'data'), 'name');
		Ext.Msg.confirm('Delete', 'Delete ' + names.join(', ') + '?',
			function(buttonId) {
				if (buttonId === 'yes') {
					grid.getStore().remove(records);
				}
			});
	}
	});
	 

	