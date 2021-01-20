const displayNotification = async (msg = "Hello world!") => {
  if (Notification.permission === "granted") {
    const reg = await navigator.serviceWorker.getRegistration();

    reg.showNotification(msg);
  }
};

export default displayNotification;
