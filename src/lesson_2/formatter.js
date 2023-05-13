sap.ui.define([], function () {
	"use strict";
	return {
		formatDate: function (oDate) {
            return oDate ? oDate.toLocaleDateString('ru-RU', {year: 'numeric', month: 'numeric', day: 'numeric'}) : '';
		},

        formatWeight: function(sWeight){
            return 'ЗАСЕКРЕЧЕНО';
        }
	};
});