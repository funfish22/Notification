const btn = document.getElementById("button");

const fuInit = () => {
	console.log("123456");
};

const requestPermissionFu = () => {
	Notification.requestPermission().then((permission) => {
		console.log("permission", permission);
		NotificationType[permission].notifyFn();
	});
};

const NotificationType = {
	default: {
		fn() {
			alert("用戶暫未開啟該網站訊息通知");
		},
		init: [requestPermissionFu],
	},
	granted: {
		fn() {
			alert("用戶已開啟該網站訊息通知");
		},
		init: [requestPermissionFu],
		notifyFn() {
			const notification = new Notification("我是標題允許通知", {
				body: "我是內容",
				icon: "./images/icons8-about-375.png",
				image: "./images/icons8-about-375.png",
			});
		},
	},
	denied: {
		fn() {
			alert("用戶拒絕該網站訊息通知");
		},
		init: [requestPermissionFu],
        notifyFn() {
            
        }
	},
};

btn.onclick = () => {
	if ("Notification" in window) {
		NotificationType[Notification.permission].fn();
		NotificationType[Notification.permission].init.forEach((fn) => fn());
	}
};

// const notifyMe = () => {
//     console.log('454545', Notification.permission)
// 	if (!("Notification" in window)) {
// 		// Check if the browser supports notifications
// 		alert("This browser does not support desktop notification");
// 	} else if (Notification.permission === "granted") {
// 		// Check whether notification permissions have already been granted;
// 		// if so, create a notification

//         const notification = new Notification(`我是標題`, {
//             body: "我是內容",
//             icon: "./images/icons8-about-375.png",
//             image: "./images/icons8-about-375.png",
//             badge: "./images/icons8-about-375.png",
//             // tag: "123456",
//             // renotify: true,
//         });
//         // notification.onclick = function(e) {
//         //     e.preventDefault();
//         //     window.open('http://sample.com./');
//         // }
// 		// …
// 	} else if (Notification.permission !== "denied" || Notification.permission === "default" || Notification.permission === 'undefined') {
// 		// We need to ask the user for permission
// 		Notification.requestPermission().then((permission) => {
//             console.log('545454545454545454545')
// 			// If the user accepts, let's create a notification
// 			if (permission === "granted") {
// 				const notification = new Notification("我是標題允許通知", {
//                     body: "我是內容",
//                     icon: "./images/icons8-about-375.png",
//                     image: "./images/icons8-about-375.png",
//                 });
// 				// …
// 			}
// 		});
// 	}

// 	// At last, if the user has denied notifications, and you
// 	// want to be respectful there is no need to bother them anymore.
// }

// btn.onclick = () => {
//     notifyMe()
// }
