sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TwoPageApp.controller.Home", {
		onInit: function(){
			this.sModel = new sap.ui.model.json.JSONModel(); //To make the variable global, we create it as like this.variable.	
		},
		onSubmit: function(){
			debugger;
			var json = {};
			
			var oName = this.byId("idInput").getValue();
			this.getOwnerComponent().getModel("detailModel").setProperty("/Name", oName);
			json.Name = oName;
			this.sModel.setData(json);
			sap.ui.getCore().setModel(this.sModel);	//To use the model in other views, we set the model globally using getCore
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Detail"); 
		}
	});
});