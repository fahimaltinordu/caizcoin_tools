$(function () {
    $("#createbutton").on('click', function() {
        $('#createwalletmodal').modal('show');
    });
});



 $(document).ready(function(){	 
 $('[data-toggle="tooltip"]').tooltip();
 
	$("#show_hide_password a").on('click', function(event) {
		event.preventDefault();
		if($('#show_hide_password input').attr("type") == "text"){
			$('#show_hide_password input').attr('type', 'password');
			$('#show_hide_password i').addClass( "fa-eye-slash" );
			$('#show_hide_password i').removeClass( "fa-eye" );
		}else if($('#show_hide_password input').attr("type") == "password"){
			$('#show_hide_password input').attr('type', 'text');
			$('#show_hide_password i').removeClass( "fa-eye-slash" );
			$('#show_hide_password i').addClass( "fa-eye" );
		}
	});

 });
	 


function backcreatewalletbutton() {
	document.getElementById('createwalletpass').value = '';
    $("#createwalleterror").hide();
	$('#createwalletmodal').modal('hide');
	$(".iew_form__create_new_wallet").show();
	$(".iew_form__create_new_wallet_done").hide();
	$(".iew_form__create_new_wallet").find('.progress').hide()
}

var iEtherWallet = {
    wallet: null,
    provider: null,
    json: null,

    /**
     *
     */
    createNewWallet: function(password, callback_percent, callback_success, callback_fail) {
        var wallet;
        

        wallet = ethers.Wallet.createRandom({ extraEntropy: null });
        if (this.provider !== undefined)
            wallet.provider = this.provider;

        wallet.encrypt(password, function(percent) {
            if (callback_percent !== undefined)
                callback_percent(parseInt(percent * 100));
                document.querySelector("#btncreatenewwallet").disabled = true;
        }).then(function(json) {
            if (callback_success !== undefined) {
                callback_success(wallet, json);
                document.querySelector("#btncreatenewwallet").disabled = false;
            }
        }).catch(function(response){
            if (callback_fail !== undefined) {
                callback_fail((response + '').replace(/ at.*/, ''));
                document.querySelector("#btncreatenewwallet").disabled = false;
            }
        });

        this.wallet = wallet;
    },


    
}


/**
 *  Form: Create New Wallet
 */

$(document).on('submit', '.iew_form__create_new_wallet', function(event) {
    event.preventDefault();

    var form = $(this),
        done = $('.iew_form__create_new_wallet_done'),
        password = $("#createwalletpass").val();

	if (password!=''){
	
    iEtherWallet.createNewWallet(password, function(percent) {
        form.find('.progress').show().find('.progress-bar').attr('aria-valuenow', percent)
            .css({ width: percent + '%' }).text(percent + '%');
    }, function(wallet, json) {
        var data = JSON.parse(json);
        form.hide();
        done.show().find('.private-key').text(wallet.privateKey);
        done.find('.download-json-file')
            .attr('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(json))
            .attr('download', 'CAIZ--' + (new Date().toISOString().replace(/:/g, '-')) + '--' + data.address)
            .show();
    });
	} else {
		$("#createwalleterror").html('<i class="fas fa-exclamation-circle"></i> Password cannot be empty!')
        $("#createwalleterror").show();
        
		setTimeout(function(){
        $("#createwalleterror").hide();
        },2000);	
	}
	
	
});



