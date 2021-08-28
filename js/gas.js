var apiprice = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=XWKN2IZS441JQZH8QTQMSM5YYJQ4B45ICI'			
				fetch(apiprice).then(res=> {
					res.json().then (data=> {
						var lowfee = data.result.SafeGasPrice;
						var averageqwei = data.result.ProposeGasPrice;
						var highqwei = data.result.FastGasPrice;
                        
                        $("#lowqwei").html(lowfee + " qwei");	
                        $("#averageqwei").html(averageqwei + " qwei");	
                        $("#highqwei").html(highqwei + " qwei");	
					})
				});
