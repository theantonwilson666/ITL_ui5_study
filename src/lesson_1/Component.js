sap.ui.define([
    "sap/ui/core/UIComponent",
    "study/lesson_1/model/models"
], function(UIComponent, models) {
    "use strict";

    return UIComponent.extend("study.lesson_1.Component", {

        metadata: {
            manifest: "json"
        },

        init: function() {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(models.createDeviceModel(), "device");
            this.setModel(models.createProductModel());
        }
    });
});