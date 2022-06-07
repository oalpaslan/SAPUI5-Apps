sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TwoPageApp.controller.Detail", {
		getRouter: function() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onInit: function() {
			debugger;

			// this.sModel = sap.ui.getCore().getModel(this.sModel);
			// this.getView().byId("idName").setText(this.sModel.getData().Name);	
			this.getRouter().getRoute("Detail").attachMatched(this.onRouteMatched, this); //This will call the function of 'onRouteMatched' each time we hit the route as defined in our manifest.

		},
		onRouteMatched: function(oEvent) {
			var oArguments = oEvent.getParameter("arguments");
			var sTaskId = oArguments.taskId;
		},
		onNavBtn: function() {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Home");
		}

	});

});