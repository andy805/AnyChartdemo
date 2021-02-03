
var chart = anychart.line3d(); //create a line3d object
var counter = 0; //counter to detect if i already drew a chart

//called from FileMaker
//input: a Json object - as a string
/*  Json Object
 *  {
       chart title: "title",
       x title: "x title",
       x data: [num1, num2,...],
       y title: "y title",
       y series 1 data: [num1, num2,...],
       y series 1 title: "title"
       y series 2 data: [num1, num2,...],
       y series 2 title: "title"
       y series 3 data: [num1, num2,...],
       y series 3 title: "title"
 }
 */
function main(param) {
  let fmJson = JSON.parse(param); //take param which is a string to JS object

  //set variables to items contained in the json object
  var chartTitle = fmJson["chart title"];
  var xData = fmJson["x data"]; //array
  var xTitle = fmJson["x title"];
  var yTitle = fmJson["y title"];
  var ySeries1Title = fmJson["y series 1 title"];

  var ySeries2Title = fmJson["y series 2 title"];
  var ySeries3Title = fmJson["y series 3 title"];
  var ySeries1Data = fmJson["y series 1 data"]; // array
  var ySeries2Data = fmJson["y series 2 data"]; // array
  var ySeries3Data = fmJson["y series 3 data"]; //array

  var zAngle = fmJson["z angle"];

  // arrays to hold objects that will be used to render the chart
  var series1ForChart = [];
  var series2ForChart = [];
  var series3ForChart = [];

  //three for loops to put the data from series 1,2 and 3 into their respected arrays
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

  chart.title(chartTitle); //set the title
  chart.container("container"); //chosing which html element that the chart will be drawn on
  chart.zAngle(zAngle); //changed the view of the chart
  chart.zAspect("150%");
  chart.legend(true); //allows for multiple legends
  chart.xAxis().title(xTitle); //setting the x axis title
  chart.yAxis().title(yTitle); //setting the y axis title

  if(counter === 0){
    var series1 = chart.line(series1ForChart); //add series 1 to chart object
    var series2 = chart.line(series2ForChart); //add series 2 to chart object
    var series3 = chart.line(series3ForChart); //add series 3 to chart object
    series1.name(ySeries1Title); //set the name for the series
    series2.name(ySeries2Title);
    series3.name(ySeries3Title);
    chart.draw();
    counter++;
  }
  else {
    chart.removeAllSeries(); //remove all series that are in the chart objects
    //set new series into the chart object
    var series1 = chart.line(series1ForChart);
    var series2 = chart.line(series2ForChart);
    var series3 = chart.line(series3ForChart);
    series1.name(ySeries1Title);
    series2.name(ySeries2Title);
    series3.name(ySeries3Title);
    chart.draw();

  }

}
