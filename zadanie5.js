let parser = new ol.format.WMSCapabilities();
function tabulka() {
  fetch('http://localhost:8080/geoserver/WMS_Kocovce/wms?service=WMS&version=1.3.0&request=GetCapabilities', { mode: 'cors' }).then(function (response) {
    return response.text();
  })
    .then(function (text) {
      let data = parser.read(text);
      let objekty = data.Capability.Layer.Layer;
      
      let table = "<tr><th>Označenie vrstvy</th><th>Možnosť dopytovania</th><th>Vloženie vrstvy</th></tr>";
      for (let riadky = 1; riadky < objekty.length; riadky++) {
        table += '<tr>';
        for (let stlpce = 1; stlpce <= 1; stlpce++) {
          table += '<tr>' + '<td>' + objekty[riadky].Name + '</td>' + '<td>' + objekty[riadky].queryable + '</td>' + '<td>' + `<input type = "checkbox"/>` + '</td>' + '</tr>';
        }
        table += '</tr>';
      }

      document.getElementById("tabulka").innerHTML = table;
    })
};
