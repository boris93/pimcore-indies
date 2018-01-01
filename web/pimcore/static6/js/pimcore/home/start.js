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

pimcore.registerNS("pimcore.home.start");
pimcore.home.start = Class.create({

    initialize: function () {
        this.getTabPanel();
    },

    activate: function () {
        var tabPanel = Ext.getCmp("pimcore_panel_tabs");
        tabPanel.setActiveItem("pimcore_home_start");
    },

    getTabPanel: function () {

        if (!this.panel) {
            this.panel = new Ext.Panel({
                id: "pimcore_home_start",
                iconCls: "pimcore_icon_glossary",
                title: t("dashboard"),
                border: false,
                closable: true,
                scrollable: 'y',
                items: [
                	pimcore.helpers.getTabHeader(),
                ].concat(this.getHomeStart())
            });

            var tabPanel = Ext.getCmp("pimcore_panel_tabs");
            tabPanel.add(this.panel);
            tabPanel.setActiveItem("pimcore_home_start");


            this.panel.on("destroy", function () {
                pimcore.globalmanager.remove("home_start");
            }.bind(this));

            pimcore.layout.refresh();
        }

        return this.panel;
    },

    getHomeStart: function () {
    	var buttons = [
			{
				text: t('orders'),
			},
			{
				text: t('products'),
			},
			{
				text: t('customers'),
			},
			{
				text: t('blog'),
			},
			{
				text: t('users'),
			},
			{
				text: t('pages'),
			},
			{
				text: t('packages'),
			},
			{
				text: t('settings'),
			}
		].map(function(i){
			return Ext.create('Ext.container.Container', {
				cls: "home-start-button-container",
				items: [
					Ext.create('Ext.Img', {
						src: "/pimcore/static6/img/icon/home/cart.png"
					}),
					new Ext.Button({
						text: i.text,
				        scale: "medium",
				        handler: function () {
				            alert(i.text);
				        }.bind(this)
				    })
				]
			});
		});
		
		return [
			new Ext.Panel({
                border: false,
                id: "home-start-panel",
                items: buttons.concat([
                	new Ext.Panel({
						id: "home-start-panel-helper",
						border:false,
						html: 'Make a selection above to get started.'
					})
                ])
            })
		];
    }
});
