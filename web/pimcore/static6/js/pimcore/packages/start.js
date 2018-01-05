/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */

pimcore.registerNS("pimcore.packages.start");
pimcore.packages.start = Class.create({

    initialize: function () {
        this.getTabPanel();
    },

    activate: function () {
        var tabPanel = Ext.getCmp("pimcore_panel_tabs");
        tabPanel.setActiveItem("pimcore_packages_start");
    },

    getTabPanel: function () {

        if (!this.panel) {
            this.panel = new Ext.Panel({
                id: "pimcore_packages_start",
                iconCls: "pimcore_icon_glossary",
                title: t("packages"),
                border: false,
                closable: true,
                scrollable: true,
                items: [
                	pimcore.helpers.getTabHeader(),
                ].concat(this.getPackagesStart())
            });

            var tabPanel = Ext.getCmp("pimcore_panel_tabs");
            tabPanel.add(this.panel);
            tabPanel.setActiveItem("pimcore_packages_start");


            this.panel.on("destroy", function () {
                pimcore.globalmanager.remove("packages_start");
            }.bind(this));

            pimcore.layout.refresh();
        }

        return this.panel;
    },

    getPackagesStart: function () {
    	var numColumns = 5;
    	var items = [
			{
				html: '',
				cellCls: 'header-cell'				
			},
			{
				html: t('site_architecture'),
				cellCls: 'header-cell',
				value: 'site_architecture'
			},
			{
				html: t('marketing'),
				cellCls: 'header-cell',
				value: 'marketing'
			},
			{
				html: t('hosting'),
				cellCls: 'header-cell',
				value: 'hosting'
			},
			{
				html: t('support'),
				cellCls: 'header-cell',
				value: 'support'
			}
		];
		var options = ['basic', 'advanced', 'premium', 'custom'];
		
		options.forEach(function(option){
			items.push({
				html: t(option),
				cellCls: 'option-name'
			});
			for(var i=1; i<numColumns; i++){
				items.push({
					//html: items[i].value + "_" + option,
					html: "PH",
					cellCls: 'option-selection'
				});
			}
		});
		
    	var table = Ext.create('Ext.panel.Panel', {
			layout: {
				type: 'table',
				columns: numColumns
			},
			items: items
		});
		
		return [
			Ext.create('Ext.container.Container', {
				cls: "packages-page-container",
				items: [
					table,
			
					Ext.create('Ext.container.Container', {
						cls: "packages-page-button-row",
						items: [
							this.getUpdateButton()
						]
					}),
			
					Ext.create('Ext.container.Container', {
						cls: "packages-page-button-row-title",
						items: [
							{
								html: t("integrations")
							}
						]
					}),
			
					Ext.create('Ext.container.Container', {
						cls: "packages-page-button-row",
						items: [
							this.getUpdateButton()
						]
					}),
			
					Ext.create('Ext.container.Container', {
						cls: "packages-page-button-row-title",
						items: [
							{
								html: t("extensions")
							}
						]
					}),
			
					Ext.create('Ext.container.Container', {
						cls: "packages-page-button-row",
						items: [
							this.getUpdateButton()
						]
					})
				]
			})
		]
    },
    
    getUpdateButton: function(){
    	return new Ext.Button({
			text: t("update"),
	        scale: "medium",
	        handler: function () {
	        	if(typeof i.handler == 'function')
	        		i.handler();
	            else alert(i.text);
	        }
	    });
    }
    
});
