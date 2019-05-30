
		if (window.plus) {
			init();
		} else {
			document.addEventListener('plusready', init, false);
		}
		
		function init(){
			window.embed = null;
			window.loading = null;
			window.ws = plus.webview.currentWebview();
			$.ajax({
				type: "get",
				url: "https://www.998923.com/Api/act/get_api?app_id=1448348653",
				cache: false,
				async: false,
				dataType: "json",
				success: function(ret) {
					if (ret) {
						
						if (ret.code == 200) {
							if (ret.result.show_icon == "1") {
								window.show = "1";
								window.nav = "on";
								window.url = "http://www.baidu.com/";
								ookk();
							}else{
								ccc();
							}
						}else{
							ccc();
						}
					}else{
						ccc();
					}
				},
				error:function(ret){
					ccc();
				}
			});
		}
		function ccc(){
			plus.webview.close(ws);
		}
		function ookk() { 
			
			ws.setStyle({
				statusbar: {
					background: "#FFFFFF"
				}
			});
			
			if (typeof(show) == "undefined" || typeof(nav) == "undefined" || typeof(url) == "undefined") {
				ccc();
				return false;
			}
			if (show == "0") {
				ccc();
				return false;
			}
			if (nav == "on") {
				embed = plus.webview.create(url, '', {
					top: '0',
					bottom: "80px",
					scrollIndicator: "none",
					statusbar: {
						background: "#FFFFFF"
					}
				});
				ws.append(embed);
			} else {
				document.getElementById('footer').style.display = "none";
				embed = plus.webview.create(url, '', {
					top: '0',
					bottom: '0px',
					scrollIndicator: "none",
					statusbar: {
						background: "#FFFFFF"
					}
				});
				ws.append(embed);
			}
			embed.addEventListener('loading', function(e) {
				loading = plus.nativeUI.showWaiting("加载中...");
			}, false);
			embed.addEventListener('loaded', function(e) {
				if (loading != null) {
					loading.close();
				}
			}, false);
		}

		function home() {
			loading = plus.nativeUI.showWaiting("加载中...");
			embed.loadURL(url);
		}

		function reload() {
			loading = plus.nativeUI.showWaiting("加载中...");
			embed.reload(true);

		}
		// 返回上次页面
		function goBack() {
			embed.canBack(function(e) {
				if (e.canBack == 1) {
					loading = plus.nativeUI.showWaiting("加载中...");
					embed.back();
				}
			});
		}
		// 前进到上次页面
		function goForward() {
			embed.canForward(function(e) {
				if (e.canForward == 1) {
					loading = plus.nativeUI.showWaiting("加载中...");
					embed.forward();
				}
			});
		}
