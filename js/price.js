var apiprice = 'https://api.coinmarketinfo.com:9445/get_market?name=WILC-USD'			
				fetch(apiprice).then(res=> {
					res.json().then (data=> {
						var price = data.data.price;
                        var exactprice = price.toFixed(4);
						console.log("WILC price: " + exactprice);
						$("#price").html(exactprice);	
					})
				});

$(".blur").draggable();