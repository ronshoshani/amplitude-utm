$(function () {
  // Get all utm parameters from query string
  function ampGetQueryParams(qs) {
    qs = qs.split("+").join(" ");

    var params = {}, tokens,
        re = /[?&]?(u(?=tm)[^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }

    return params;
  }

  // Populate the object to be sent to Amplitude
  var utmParams = ampGetQueryParams(document.location.search), propertiesToReport = {};
  for (var param in utmParams) {
    propertiesToReport[param] = utmParams[param];
  }

  if(Object.getOwnPropertyNames(propertiesToReport).length !== 0){
    amplitude.setUserProperties(propertiesToReport);
  }
});
