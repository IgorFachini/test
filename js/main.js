function logEvent(e) {
  console.log("error");
  console.log(e.type, e.message);
}

function successGps(e) {
  console.log("success", e);
}

var watchId = navigator.geolocation.watchPosition(successGps, logEvent, {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
});

console.log("main");
