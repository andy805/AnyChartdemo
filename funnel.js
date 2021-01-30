
var param = {
  "chart title": "test 1",
  "x data": ["test 1.1", "test 1.2", "test 1.3"],
  "y series 1 data": [100000, 1000, 10]
}

param = JSON.stringify(param);

var funnelChart = anychart.funnel();

// function main(param) {
  let fmJson = JSON.parse(param);

  var chartTitle = fmJson["chart title"];
  var xData = fmJson["x data"]; //aray
  var ySeries1Data = fmJson["y series 1 data"]; // array

  var dataForFunnel = [];

  for(var i = 0; i < xData.length && i < ySeries1Data.length; i++)
  {
    dataForFunnel.push({
      x: xData[i],
      value: ySeries1Data[i]
    });
  }

  funnelChart.data(dataForFunnel);
  funnelChart.labels().format("{%x}: {%yPercentOfTotal}%");
  funnelChart.title(chartTitle);
  funnelChart.container("container");
  funnelChart.draw();

// }
