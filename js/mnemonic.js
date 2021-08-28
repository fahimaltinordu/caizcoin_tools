// let provider = new ethers.providers.EtherscanProvider("ropsten", "R7R3Z7MMTMQC7J7H8NCNDX2UAAUPP9RU2X");
let provider = new ethers.providers.InfuraProvider("homestead", "ec6d2493e2004b1f9723f2d11ddf356a");


function MnemonicToPrivate() {
    
	// let mnemonic = ".. .. .. ... .. ... ... ... ... ... ... ...";
	
	var mnemonic = $("#inputbalance").val();

		if (mnemonic!=''){	
		try {
					   let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
					   mnemonicWallet.provider = provider;
					   myWallet = mnemonicWallet;
					   console.log('wordlist===>', mnemonicWallet);
					   console.log("Opened Address: " + mnemonicWallet.address);
					   console.log(mnemonicWallet.privateKey);
					    $('#modalresult').modal('show');
						$(".modal-title").html('<i class="fas fa-check-circle" style="color:#82c91e"></i> Valid Mnemonic Phrase');
						$(".modalcontent").html("Private key: " + mnemonicWallet.privateKey + "<br><br><br> CAIZ Address : " + mnemonicWallet.address);
						$("#inputbalance").val("");
					   
			
					   
		} catch (e) {
					$('#modalresult').modal('show');
					$(".modal-title").html('<i style="color:white" class="fas fa-exclamation-circle"></i> Invalid Mnemonic');
					$(".modalcontent").html("Your mnemonic phrase is invalid. This validation is made from ethers.js library.");
					$("#inputbalance").val("");
				}
								 
		} 

		else {
				$('#modalresult').modal('show');
				$(".modal-title").html('<i style="color:#ffffff" class="fas fa-info-circle"></i> Empty Mnemonic');
				$(".modalcontent").html("Please type your mnemonic phrases then click the button");
				$("#inputbalance").val("");
			 }

}

$(function () {
    $(".closemodal").on('click', function() {
        $('#modalresult').modal('hide');
    });
});