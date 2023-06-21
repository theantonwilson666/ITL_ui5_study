sap.ui.define([
    "sap/ui/core/UIComponent",
    "study/lesson_4/model/models"
], function(UIComponent, models) {
    "use strict";

    return UIComponent.extend("study.lesson_4.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();
            
            this.setModel(models.createDeviceModel(), "device");
            // this.setModel(models.createProductModel());
        }
    });
});