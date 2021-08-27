Ext.define('Myapp.view.main.detail.DetailView', {
  xtype: 'detailview',
  cls: 'detailview', 
  /* extend: 'Ext.grid.Grid',
  title: 'The Marx Brothers',
     
    plugins: [{
     
        type: 'grideditable',
        enableDeleteButton: false, // Defaults to true{it gives delete option}
        
        triggerEvent: 'childtap' // Defaults to childdoubletap
     
        // type: 'gridcellediting',
        // triggerEvent: 'childtap'
     
    }],
     
    columns: [{
        xtype: 'column',
        dataIndex: 'name',
     
        editable: true,
     
        text: 'Name'
    }, {
        xtype: 'checkcolumn',
        dataIndex: 'playsHarp',
     
        editable: true,
     
        text: 'Plays Harp',
        align: 'center'
    }, {
        xtype: 'datecolumn',
        dataIndex: 'born',
     
        editable: true,
     
        text: 'DOB',
        format: 'F j, Y',
     
        width: 150
    }, {
        xtype: 'numbercolumn',
        dataIndex: 'age',
        text: 'Age',
     
     
        editable: true,
     
        format: '0',
        align: 'center'
    }],
    store: {
        type: 'store',
        fields: [{
            name: 'born',
            type: 'date',
            dateFormat: 'Y/m/d'
        }, {
            name: 'died',
            type: 'date',
            dateFormat: 'Y/m/d'
        }, {
            name: 'age',
            calculate: function(data) {
                if (!data.died) return; // Temporary workaround pending framework update
                var age = data.died.getFullYear() - data.born.getFullYear();
                var hadBirthday = (Ext.Date.getDayOfYear(data.died) >= Ext.Date.getDayOfYear(data.born));
                age = hadBirthday ? age : age - 1;
                return age;
            }
        }],
        data: [{
            "name": "Chico",
            "born": "1887/03/22",
            "died": "1961/10/11",
            "playsHarp": false
        }, {
            "name": "Harpo",
            "born": "1888/11/23",
            "died": "1964/09/28",
            "playsHarp": true
        }, {
            "name": "Groucho",
            "born": "1890/10/02",
            "died": "1977/08/19",
            "playsHarp": false
        }, {
            "name": "Gummo",
            "born": "1892/10/23",
            "died": "1977/04/21",
            "playsHarp": false
        }, {
            "name": "Zeppo",
            "born": "1901/02/25",
            "died": "1979/11/30",
            "playsHarp": false
        }]
    }
    });
     */
   /*  extend: 'Ext.grid.Grid',
    title: 'Pokemon',
 
    plugins: [{
        type: 'rowexpander'
    }],
    itemConfig: {
        body: {
            tpl: '<img height="215" src="https://docs.sencha.com/resources/json/pokemon/{pokedex}.png"/>'
        }
    },
 
    columns: [{
        text: 'Date',
        dataIndex: 'name'
    }, {
        text: 'HP',
        dataIndex: 'hp',
    }, {
        text: 'Defense',
        dataIndex: 'defense'
    }, {
        text: 'Attack',
        dataIndex: 'attack',
        align: 'center'
    }, {
        text: 'Speed',
        dataIndex: 'speed'
    }],
    store: {
        type: 'store',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'inventory.json'
        }
    }
	});
	 */
    /* extend: 'Ext.grid.Grid',
controller: 'mainviewcontroller',
title: 'Pokemon',
 
plugins: {
    rowoperations: {
        // This config replaces the default "Delete" button provided by the plugin.
        operation: {
            text: 'Operations',
            ui: 'alt',
            menu: [{
                text: 'Archive',
                iconCls: 'x-fa fa-archive',
                handler: 'onArchive'
            }, {
                text: 'Delete',
                iconCls: 'x-fa fa-trash',
                handler: 'onDelete'
            }]
        }
    }
},
 
columns: [{
    text: 'Date',
    dataIndex: 'name'
}, {
    text: 'HP',
    dataIndex: 'hp',
}, {
    text: 'Defense',
    dataIndex: 'defense'
}, {
    text: 'Attack',
    dataIndex: 'attack',
    align: 'center'
}, {
    text: 'Speed',
    dataIndex: 'speed'
}],
store: {
    type: 'store',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'inventory.json'
    }
}
}); */
extend: 'Ext.grid.Grid',
title: 'Pokemon',
plugins: {
    gridrowdragdrop: {}
},
columns: [{
    text: 'Date',
    dataIndex: 'name'
}, {
    text: 'HP',
    dataIndex: 'hp',
}, {
    text: 'Defense',
    dataIndex: 'defense'
}, {
    text: 'Attack',
    dataIndex: 'attack',
    align: 'center'
}, {
    text: 'Speed',
    dataIndex: 'speed'
}],
store: {
    type: 'store',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'inventory.json'
    }
}
});