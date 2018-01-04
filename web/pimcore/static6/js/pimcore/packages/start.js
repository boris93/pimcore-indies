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
                scrollable: 'y',
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
		return [];
    }
});
