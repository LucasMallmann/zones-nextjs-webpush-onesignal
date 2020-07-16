const myCustomUniqueUserId = "5f0dedbcbdca4c542c0136a1";

window.OneSignal = window.OneSignal || [];
OneSignal.push(function () {
  OneSignal.init({
    appId: "2bbf584d-8689-42f5-9a7a-cef7dbb6b496",
  });

  OneSignal.push(function () {
    OneSignal.setExternalUserId(myCustomUniqueUserId);
  });

  OneSignal.getExternalUserId().then((id) =>
    console.log("The external user id is: ", id)
  );
});
