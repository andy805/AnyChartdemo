
  var chart = anychart.scatter();
  var numOfChart = 0;


function main(param) {
  let fmJson = JSON.parse(param);

  /* get the json values into variable */
  var chartTitle = fmJson["chart title"];


  var xTitle = fmJson["x Title"];
  var xData = fmJson["x data"]; //aray
  var testArray = Array.isArray(xData);
  var arr1 = xData[0];


  var yTitle = fmJson["y Title"];
  var ySeries1Title = fmJson["y series 1 title"];
  var ySeries2Title = fmJson["y series 2 title"];
  var ySeries3Title = fmJson["y series 3 title"];
  var ySeries1Data = fmJson["y series 1 data"]; // array
  var ySeries2Data = fmJson["y series 2 data"]; // array
  var ySeries3Data = fmJson["y series 3 data"]; //array

  var series1 = {
    data: []
  };

  var series2 = {
    data: []
  };

  var series3 = {
    data: []
  };


  for(var i = 0; i < xData.length && i < ySeries1Data.length; i++)
  {
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


  var chartSeries1 = chart.marker(series1.data);
  var chartSeries2 = chart.marker(series2.data);
  var chartSeries3 = chart.marker(series3.data);

  chart.xGrid(true);
  chart.yGrid(true);

  chart.xMinorGrid(true);
  chart.yMinorGrid(true);

  chart.title(chartTitle);
  chart.container("container");
  if(numOfChart === 0)
  {
    chart.draw();
    numOfChart++;
  }
  else
  {
    chart.removeAllSeries();
    chart.draw();
    numOfChart = 0;
  }


}
