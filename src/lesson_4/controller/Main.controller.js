sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment",
        "sap/ui/model/json/JSONModel",
    ],
    function (
        Controller,
        Fragment,
        JSONModel,
    ) {
        "use strict";

        return Controller.extend("study.lesson_4.controller.Main", {


            onInit: function () {
                console.log('hello from controller');
            },


            setStateProperty: function(sProperty, sValue){
                const oStateModel = this.getView().getModel('state');
                const oStateData = oStateModel.getData();

                oStateData[sProperty] = sValue;

                this.getView().getModel('state').updateBindings(true);
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
            },

            getRouter: function(){
                return this.getOwnerComponent().getRouter();
            },


        });

    });