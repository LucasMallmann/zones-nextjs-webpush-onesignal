window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "2bbf584d-8689-42f5-9a7a-cef7dbb6b496",
  });

  OneSignal.getExternalUserId().then((id) =>
    console.log("The external user id is: ", id)
  );

  OneSignal.on("subscriptionChange", function (isSubscribed) {
    console.log("changing subscription. User is subscribed: ", isSubscribed);
  });
});
