

// create the funnel object
var funnelChart = anychart.funnel();

//main function called by fileMaker
//input: JSON object from fileMaker that has all data needed for funnel chart
/*
{
	chart title: "chart title",
	x data: ["ex1", "ex2", "ex3",...],
	y series 1 data: [1, 2, 3, ...]
}
*/
function main(param) {

  let fmJson = JSON.parse(param); // turn param which is a string to an object
  var chartTitle = fmJson["chart title"]; //assigning variable
  var xData = fmJson["x data"]; //aray
  var ySeries1Data = fmJson["y series 1 data"]; // array

  var dataForFunnel = []; //empty array that will be populated by data from fmJson object

  for(var i = 0; i < xData.length && i < ySeries1Data.length; i++)
  {
    //inserting an object with and x value and y value
    dataForFunnel.push({
      x: xData[i],
      value: ySeries1Data[i]
    });
  }

  funnelChart.data(dataForFunnel); //setting the funnel charts object data
  funnelChart.labels().format("{%x} - {%Value} - {%yPercentOfTotal}%"); //formating the label
  funnelChart.title(chartTitle); //setting the title of the chart
  funnelChart.container("container"); //chosing where to draw the chart
  funnelChart.draw();

}
