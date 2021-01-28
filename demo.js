


function main(param) {
  let fmJson = JSON.parse(param);

  /* get the json values into variable */
  var chartTitle = fmJson["chart title"];


  var xTitle = fmJson["x Title"];
  var xData = fmJson["x data"]; //aray
  var testArray = Array.isArray(xData);
  var arr1 = xData[0];

  document.querySelector("h2").innerHTML = "<h2>"+xData.length+"</h2>";

  var yTitle = fmJson["y Title"];
  var ySeries1Title = fmJson["y series 1 title"];
  var ySeries2Title = fmJson["y series 2 title"];
  var ySeries3Title = fmJson["y series 3 title"];
  var ySeries1Data = fmJson["y series 1 data"]; // array
  var ySeries2Data = fmJson["y series 2 data"]; // array
  var ySeries3Data = fmJson["y series 3 data"]; //array

  jsonObj = [];
  var series1 = {
    data: []
  };

  var series2 = {
    data: []
  };

  var series3 = {
    data: []
  };

  /* testing */
  var testString = "";
  for(var i = 0; (i < xData.length) && (i < ySeries1Data.length); i++)
  {
    document.querySelector("h3").innerText = "<h2>"+"in the loop"+"</h2>";
    testString = testString+xData[i].toString()+" ";
  }
  testString = "<p>" + testString + "</p>";

  document.querySelector("h1").innerHTML = testString;

  for(var i = 0; i < xData.length && i < ySeries1Data.length; i++)
  {
    item = {};
    item ["x"] = xData[i];
    item ["value"] = ySeries1Data[i];

    jsonObj.push(item);
      series1.data.push({
        x: xData[i],
        value: ySeries1Data[i]
      });
  }
  for(var i = 0; i < xData.length && i < ySeries2Data.length; i++)
  {
      series2.data.push({
        x: xData[i],
        value: ySeries2Data[i]
      });
  }
  for(var i = 0; i < xData.length && i < ySeries3Data.length; i++)
  {
      series3.data.push({
        x: xData[i],
        value: ySeries3Data[i]
      });
  }

  var chart = anychart.scatter();

  var chartSeries1 = chart.marker(series1.data);

  chart.xGrid(true);
  chart.yGrid(true);

  chart.xMinorGrid(true);
  chart.yMinorGrid(true);

  chart.title(chartTitle);
  chart.container("container");
  chart.draw();

}
