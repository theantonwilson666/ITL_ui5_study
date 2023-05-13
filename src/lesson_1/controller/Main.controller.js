sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
    ],
    function (
        Controller,
    ) {
        "use strict";

        return Controller.extend("study.lesson_1.controller.Main", {
            onInit: function () {
                console.log('hello from controller');
            },

            DoPress: function(){
                this.getView().byId("mainbox").addItem(new sap.m.Text({text: "test"}))
            }
        });

    });