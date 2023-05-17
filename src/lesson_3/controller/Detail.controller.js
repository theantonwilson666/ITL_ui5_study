sap.ui.define(
    [
        "study/lesson_3/controller/Main.controller",
        "sap/ui/model/json/JSONModel"
    ],
    function (
        Controller,
        JSONModel
    ) {
        "use strict";

        return Controller.extend("study.lesson_3.controller.Detail", {

            onInit: function () {
                console.log('hello from detail controller');

                this.getRouter().getRoute("product").attachPatternMatched(this.onProductMatch, this);

            },

            onProductMatch: function(oEvent){

                this.setStateProperty('layout', 'TwoColumnsMidExpanded');

                const sProductId = oEvent.getParameter('arguments').productId;
                const oProduct = this.getOwnerComponent().getModel().getData().data.find(oProduct => oProduct.product_id === parseInt(sProductId));
                this.getView().setModel(new JSONModel(oProduct));


            }

        });

    });