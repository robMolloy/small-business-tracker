const requestNotificationPermission = () => {
  if (process.env.NODE_ENV === "production") {
    Notification.requestPermission((status) => {
      return status;
    });
  }
};

export default requestNotificationPermission;
