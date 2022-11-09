$.getJSON('https://ip-api.io/json', function(data) {
  $("#ip").html(`${data.ip}`);
  $("#city").html(`${data.city}`);
  $("#zip").html(` | ${data.zip_code}`);
  $("#region").html(` | ${data.region_name}`);
  $("#country").html(` | ${data.country_name}`);
  $("#countryFlag").attr("src",data.flagUrl);
  $("#coords").html(`Coordinates: ${data.latitude} | ${data.longitude}`);
  $("#org").html(`${data.organisation}<br>Calling Code: ${data.callingCode}`);
  $("#sus").html(`Using Proxy: ${data.suspiciousFactors.isProxy}<br>Tor node: ${data.suspiciousFactors.isTorNode}<br>Suspicious: ${data.suspiciousFactors.isSuspicious}`);
});

setTimeout(function() {
  
  if(document.getElementById('ip').innerText === ''){
    $("#ip").html('lo estoy viendo.');
  }

 
  if(document.getElementById('city').innerText === ''){
    $("#city").html('tu info no se guardo.');
  }
}, 2000);