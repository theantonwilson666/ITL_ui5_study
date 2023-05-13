sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment",
        "sap/ui/model/json/JSONModel",
        "../formatter"
    ],
    function (
        Controller,
        Fragment,
        JSONModel,
        formatter
    ) {
        "use strict";

        return Controller.extend("study.lesson_2.controller.Main", {

            formatter: formatter,

            onInit: function () {
                console.log('hello from controller');
            },

            onChangeButtonPress: function () {

                const oStateModel = this.getView().getModel('state').getData();
                oStateModel.editMode = !oStateModel.editMode;


                this.getView().getModel('state').updateBindings(true);
            },


            onAddNewProductButtonPress: function () {

                this.loadDialog
                    .call(this, {
                        sDialogName: "_productDialog",
                        sViewName: "study.lesson_2.view.dialogs.ProductDialog"
                    })
                    .then(
                        function (oDialog) {

                            const oProductModel = new JSONModel({
                                product_id: "",
                                product_name: "New Product",
                                product_count: 1,
                                product_weight: "",
                                product_unit: "",
                            });


                            const oUIModel = new JSONModel({
                                newEntry: true
                            });


                            oDialog.setModel(oProductModel);
                            oDialog.setModel(oUIModel, "ui");

                            oDialog.open();
                        }.bind(this)
                    );
            },

            onSelectProduct: function (oEvent) {

                const oProductContext = oEvent.getSource().getBindingContext();

                this.loadDialog
                    .call(this, {
                        sDialogName: "_productDialog",
                        sViewName: "study.lesson_2.view.dialogs.ProductDialog"
                    })
                    .then(
                        function (oDialog) {
                            const oProductModel = new JSONModel(oProductContext.getObject());

                            const oUIModel = new JSONModel({
                                newEntry: false
                            });

                            oDialog.setModel(oProductModel);
                            oDialog.setModel(oUIModel, "ui");

                            oDialog.open();
                        }.bind(this)
                    );
            },

            onSaveProduct: function(oEvent){
                
                const oDialog = oEvent.getSource().getParent();
                this.getView().getModel().updateBindings(true);
                oDialog.close();
            },

            onAddNewProduct: function (oEvent) {

                const oDialog = oEvent.getSource().getParent();
                const oNewProduct = oDialog.getModel().getData();

                const oProductsData = this.getView().getModel().getData();

                oProductsData.data.push(oNewProduct);

                this.getView().getModel().updateBindings(true);


                oDialog.close();
            },

            onCloseDialog: function (oEvent) {
                oEvent.getSource().getParent().close();
            },

            loadDialog: function (oParams) {
                if (!this[oParams.sDialogName]) {
                    return Fragment.load({
                        id: this.getView().sId,
                        type: "XML",
                        name: oParams.sViewName,
                        controller: oParams.controller ? oParams.controller : this,
                    }).then(
                        function (oDialog) {
                            this[oParams.sDialogName] = oDialog;
                            if (
                                oParams.bAddDependent === undefined ||
                                oParams.bAddDependent === true
                            ) {
                                this.getView().addDependent(this[oParams.sDialogName]);
                            }
                            if (!$.isArray(this[oParams.sDialogName])) {
                                this[oParams.sDialogName].setBusyIndicatorDelay(0);
                            }
                            return this[oParams.sDialogName];
                        }.bind(this)
                    );
                } else {
                    return new Promise(
                        function (res) {
                            res(this[oParams.sDialogName]);
                        }.bind(this)
                    );
                }
            }

        });

    });