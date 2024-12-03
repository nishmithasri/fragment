sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
function (Controller,Fragment) {
    "use strict";

    return Controller.extend("fragment.controller.View1", {
        onInit: function () {
         
        },
        onVHTrigger: function (){
            var oView=this.getView();
            if(!this._oDialog){
                Fragment.load({
                    name:"fragment.view.helloDialog",
                    controller:this
                 }).then(function(_oDialog){
                    this._oDialog=_oDialog;
                    oView.addDependent(this._oDialog)
                    this._oDialog.open()
                 }.bind(this))
            } else{
                this._oDialog.open()
            }
       },
       onclose:function(){
        this._oDialog.close()
       },
       onPressItem:function(oEvent){
        var bp=oEvent.getParameter("listItem").getProperty("title");
        this.getView().byId("idInput").setValue(bp)
        this._oDialog.close()
       }
    });
});
