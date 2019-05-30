
		if (window.plus) {
			plus.webview.close(ws);
		} else {
			document.addEventListener('plusready', init, false);
		}
