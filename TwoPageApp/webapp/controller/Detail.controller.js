sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TwoPageApp.controller.Detail", {
		getRouter: function() {
			
		},
		onInit: function() {
			debugger;

			// this.sModel = sap.ui.getCore().getModel(this.sModel);
			// 	
			this._oRouter =  sap.ui.core.UIComponent.getRouterFor(this);
			 this._oRouter.attachRouteMatched(this.onRouteMatched, this); //This will call the function of 'onRouteMatched' each time we hit the route as defined in our manifest.

		},
		onRouteMatched: function(oEvent) {
			var model = {};
			model.Name = this.getOwnerComponent().getModel("detailModel").getProperty("/Name");
		
			this.getView().byId("idName").setText(model.Name);
		},
		onNavBtn: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Home");
		}

	});

});