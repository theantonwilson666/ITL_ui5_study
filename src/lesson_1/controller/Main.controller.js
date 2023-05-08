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

            addProduct: function () {

                const oProductModel = this.getView().getModel();
                const oProductData = oProductModel.getData();

                oProductData.data.push({
                    product_id: oProductData.data[oProductData.data.length - 1].product_id + 1,
                    product_name: "Новый продукт"
                });

                oProductModel.updateBindings(true);
            }

        });

    });