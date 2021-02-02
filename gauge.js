var chart = anychart.gauge.linear();


function main(param) {
  let fmJson = JSON.parse(param);

  var chartTitle = fmJson["chart title"];
  var xData = fmJson["x data"]; //aray
  var xTitle = fmJson["x title"];
  var yTitle = fmJson["y title"];
  var ySeries1Title = fmJson["y series 1 title"];
  var ySeries1Data = fmJson["y series 1 data"]; // array
  var scaleBarColorScale = anychart.scales.ordinalColor().ranges(
    [{
        from: 0,
        to: 25,
        color: ['#D81E05', '#EB7A02']
      },
      {
        from: 25,
        to: 50,
        color: ['#EB7A02', '#FFD700']
      },
      {
        from: 50,
        to: 75,
        color: ['#FFD700', '#CAD70b']
      },
      {
        from: 75,
        to: 100,
        color: ['#CAD70b', '#2AD62A']
      }
    ]
  );

  // create a Scale Bar
  var scaleBar = gauge.scaleBar(0);

  var series1ForChart = [];

  for (var i = 0; i < xData.length && i < ySeries1Data.length; i++) {
    series1ForChart.push({
      x: xData[i],
      value: ySeries1Data[i]
    });
  }


  // chart.labels().format("{%x}: {%yPercentOfTotal}%");
  chart.title(chartTitle);
  chart.container("container");
  chart.legend(true);
  chart.xAxis().title(xTitle);
  chart.yAxis().title(yTitle);
  if (counter === 0) {
    var series1 = chart.line(series1ForChart);
    var series2 = chart.line(series2ForChart);
    var series3 = chart.line(series3ForChart);
    series1.name(ySeries1Title);
    series2.name(ySeries2Title);
    series3.name(ySeries3Title);
    chart.draw();
    counter++;
  } else {
    chart.removeAllSeries();
    var series1 = chart.line(series1ForChart);
    var series2 = chart.line(series2ForChart);
    var series3 = chart.line(series3ForChart);
    series1.name(ySeries1Title);
    series2.name(ySeries2Title);
    series3.name(ySeries3Title);
    chart.draw();

  }

}
