
var chart = anychart.line3d();
var counter = 0;



// var param = {
//   "chart title": "test 1",
//   "x data": [10, 20, 30, 25],
//   "y series 1 data": [100, 200, 300, 150],
//   "y series 2 data": [200, 300, 400, 550],
//   "y series 3 data": [300, 400, 500, 750]
// }

// param = JSON.stringify(param);


function main(param) {
  let fmJson = JSON.parse(param);

  var chartTitle = fmJson["chart title"];
  var xData = fmJson["x data"]; //aray
  var yTitle = fmJson["y Title"];
  // var ySeries1Title = fmJson["y series 1 title"];
  // var ySeries2Title = fmJson["y series 2 title"];
  // var ySeries3Title = fmJson["y series 3 title"];
  var ySeries1Data = fmJson["y series 1 data"]; // array
  var ySeries2Data = fmJson["y series 2 data"]; // array
  var ySeries3Data = fmJson["y series 3 data"]; //array

  var series1ForChart = [];
  var series2ForChart = [];
  var series3ForChart = [];

  for(var i = 0; i < xData.length && i < ySeries1Data.length; i++)
  {
    series1ForChart.push({
      x: xData[i],
      value: ySeries1Data[i]
    });
  }

  for(var i = 0; i < xData.length && i < ySeries2Data.length; i++)
  {
    series2ForChart.push({
      x: xData[i],
      value: ySeries2Data[i]
    });
  }

  for(var i = 0; i < xData.length && i < ySeries3Data.length; i++)
  {
    series3ForChart.push({
      x: xData[i],
      value: ySeries3Data[i]
    });
  }

  // chart.labels().format("{%x}: {%yPercentOfTotal}%");
  chart.title(chartTitle);
  chart.container("container");
  chart.zAngle(20);
  chart.zAspect("150%");
  if(counter === 0){
    chart.line(series1ForChart);
    chart.line(series2ForChart);
    chart.line(series3ForChart);
    chart.draw();
    counter++;
  }
  else {
    chart.removeAllSeries();
    chart.line(series1ForChart);
    chart.line(series2ForChart);
    chart.line(series3ForChart);
    chart.draw();
    counter = 0;


  }

}
