function notifyMe() {
    console.log('454545', Notification.permission)
	if (!("Notification" in window)) {
		// Check if the browser supports notifications
		alert("This browser does not support desktop notification");
	} else if (Notification.permission === "granted") {
		// Check whether notification permissions have already been granted;
		// if so, create a notification
		const notification = new Notification("我是標題", {
			body: "我是內容",
			icon: "./images/icons8-about-375.png",
			image: "./images/icons8-about-375.png",
		});
		// …
	} else if (Notification.permission !== "denied" || Notification.permission === "default" || Notification.permission === 'undefined') {
		// We need to ask the user for permission
		Notification.requestPermission().then((permission) => {
            console.log('545454545454545454545')
			// If the user accepts, let's create a notification
			if (permission === "granted") {
				const notification = new Notification("我是標題允許通知", {
                    body: "我是內容",
                    icon: "./images/icons8-about-375.png",
                    image: "./images/icons8-about-375.png",
                });
				// …
			}
		});
	}

	// At last, if the user has denied notifications, and you
	// want to be respectful there is no need to bother them anymore.
}