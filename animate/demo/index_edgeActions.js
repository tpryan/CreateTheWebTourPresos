/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         var rs_an_obj = sym.getSymbol("rs_an");
         rs_an_obj.play("remove");
         
         var rs_tk_obj = sym.getSymbol("rs_tk");
         rs_tk_obj.play("remove");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 336, function(sym, e) {
         var rs_wf_obj = sym.getSymbol("rs_wf");
         rs_wf_obj.play("remove");
         
         var rs_co_obj = sym.getSymbol("rs_co");
         rs_co_obj.play("remove");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 440, function(sym, e) {
         var rs_in_obj = sym.getSymbol("rs_in");
         rs_in_obj.play("remove");
         
         var rs_bd_obj = sym.getSymbol("rs_bd");
         rs_bd_obj.play("remove");
         
         var rs_rf_obj = sym.getSymbol("rs_rf");
         rs_rf_obj.play("remove");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_an}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(start_an);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rs_an}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("start_an");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_in}", "click", function(sym, e) {
         sym.play("start_in");

      });
      //Edge binding end
      
       Symbol.bindElementAction(compId, symbolName, "${_rs_in}", "click", function(sym, e) {
         sym.play("start_in");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rs_co}", "click", function(sym, e) {
         sym.play("start_co");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_co}", "click", function(sym, e) {
         sym.play("start_co");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rs_bd}", "click", function(sym, e) {
         sym.play("start_bd");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bd}", "click", function(sym, e) {
         sym.play("start_bd");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rf}", "click", function(sym, e) {
         sym.play("start_rf");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rs_rf}", "click", function(sym, e) {
         sym.play("start_rf");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rs_tk}", "click", function(sym, e) {
         sym.play("start_tk");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tk}", "click", function(sym, e) {
         sym.play("start_tk");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_wf}", "click", function(sym, e) {
         sym.play("start_wf");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rs_wf}", "click", function(sym, e) {
         sym.play("start_wf");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'rs'
   (function(symbolName) {   
   
   })("rs");
   //Edge symbol end:'rs'

})(jQuery, AdobeEdge, "EDGE-171675818");