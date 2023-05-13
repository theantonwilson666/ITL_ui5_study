sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {
		createDeviceModel: function () {
			const oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},


        createProductModel: function(){

            const ProductData = {
                title: 'Отображаемые продукты',
                description: 'Просмотр',
                data: [
                    {
                        product_id: 1,
                        product_name: "Гайка",
                        product_count: 10,
                        product_weight: 5,
                        product_unit: "Грамм",
                        created_at: new Date()
                    },


                    {
                        product_id: 2,
                        product_name: "Ключ на 12",
                        product_count: 1,
                        product_weight: 2,
                        product_unit: "Килограмм",
                        created_at: new Date()
                    },

                    {
                        product_id: 3,
                        product_name: "Буханка хлеба",
                        product_count: 10,
                        product_weight: 500,
                        product_unit: "Грамм",
                        created_at: new Date()
                    },


                    {
                        product_id: 4,
                        product_name: "Ватрушка",
                        product_count: 10,
                        product_weight: 500,
                        product_unit: "Грамм",
                        created_at: new Date()
                    }
                ]
            };

            const oModel = new JSONModel(ProductData);
            oModel.setDefaultBindingMode("TwoWay");
            return oModel;
        }
	};
});