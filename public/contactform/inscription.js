jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('formIns.inscriptionForm').submit(function() {

    var f = $(this).find('.form-group-ins'),

      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;


    f.children('input').each(function() { // run all inputs


      var i = $(this); 
      var rule = i.attr('data-rule-ins');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
           case 'required':
             if (i.val() === '') {
               ferror = ierror = true;
             }
             break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
            if (! i.is(':checked')) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validationIns').html((ierror ? (i.attr('data-msg-ins') !== undefined ? i.attr('data-msg-ins') : 'wrong Input') : '')).show('blind');
      }
    });
    f.children('textarea').each(function() { // run all inputs

      var i = $(this); // current input
      var rule = i.attr('data-rule-ins');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {          

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validationIns').html((ierror ? (i.attr('data-msg-ins') != undefined ? i.attr('data-msg-ins') : 'wrong Input') : '')).show('blind');

        
        if(!ferror){ 
        	$("#sendmessageIns").addClass("show");
        	$("#errormessageIns").removeClass("show");
    	}else {
          $("#sendmessageIns").removeClass("show");
          $("#errormessageIns").addClass("show");
          $('#errormessageIns').html("Mensaje no eviado. Por favor revise los campos");
      }
        return(ferror)



      }
    });
    

      
    
  });

});
