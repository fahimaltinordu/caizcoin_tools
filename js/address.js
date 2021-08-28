

function CheckAddress() {
    var address = $('#inputbalance').val();
	if ($('#inputbalance').val() != "") {
	 try {
		ethers.utils.getAddress(address); //ethers.js kütüphanesinden adres kontrolü yapar	
		    $('#modalresult').modal('show');
			$(".modal-title").html('<i class="fas fa-check-circle" style="color:#82c91e"></i> Valid Address');
			$(".modalcontent").html("Your CAIZCOIN address is valid");
			$("#inputbalance").val("");
		} catch (error) {
		   $('#modalresult').modal('show');
			$(".modal-title").html('<i style="color:white" class="fas fa-exclamation-circle"></i> Invalid Address');
			$(".modalcontent").html("Your CAIZCOIN address is invalid. This validation is made from ethers.js library.");
			$("#inputbalance").val("");
		  return;
        }	
	} else {
		$('#modalresult').modal('show');
		$(".modal-title").html('<i style="color:#ffffff" class="fas fa-info-circle"></i> Empty Address');
		$(".modalcontent").html("Please type your CAIZCOIN address then click the button");
		$("#inputbalance").val("");
	}
}

$(function () {
    $(".closemodal").on('click', function() {
        $('#modalresult').modal('hide');
    });
});