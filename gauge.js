var stage = anychart.graphics.create("container");
var chart = anychart.gauges.linear(); //create gauge object
var marker = chart.marker() // create marker object
var counter = 0; // counter to detect if i already drew a chart

// var testObj = {
//   "chart title": "test",
//   max: 100,
//   "upper mid": 75,
//   middle: 50,
//   "lower mid": 25,
//   bottom: 0,
//   marker: 35,
//    xOffSet: 0,
//    width: 50
// }
// param = JSON.stringify(testObj);

//called from FileMaker
//input: a Json object - as a string
/*
JSON
{
	chart title: "chart title",
	max: number,
	upper mid: number,
	middle: number,
	lower mid: number,
	bottom: number,
  marker: number,
  width: String,
  height: String,
  xOffSet: number
}
*/

function main(param) {
  let fmJson = JSON.parse(param); //take param which is a string to JS object

  //Assign variable from the json object
  var chartTitle = fmJson["chart title"];
  var max = fmJson["max"];
  var upperMid = fmJson["upper mid"];
  var middle = fmJson["middle"]
  var lowerMid = fmJson["lower mid"];
  var bottom = fmJson["bottom"];
  var markerPos = fmJson["marker"];
  var textForLabels = fmJson["textForLabels"];
  var width = fmJson["width"];
  //var height = fmJson["height"];
  //var xOffSet = fmJson["xOffSet"];

  // width = width+"%";
  // height = height+"px";

  // document.getElementById("container").style.width = width;
  // document.getElementById("container").style.height = height;

  //make the color scale
  var scaleBarColorScale = anychart.scales.ordinalColor().ranges(
    [{
        from: bottom,
        to: lowerMid,
        color: ['#D81E05', '#EB7A02']
      },
      {
        from: lowerMid,
        to: middle,
        color: ['#EB7A02', '#FFD700']
      },
      {
        from: middle,
        to: upperMid,
        color: ['#FFD700', '#CAD70b']
      },
      {
        from: upperMid,
        to: max,
        color: ['#CAD70b', '#2AD62A']
      }
    ]
  );
  // create a Scale Bar
  var myScaleBar = chart.scaleBar(0);
  myScaleBar.colorScale(scaleBarColorScale); //set the color scale
  chart.scale({minimum: bottom, maximum: max}); //set the min and max of the chart
  var defaultWidth = 10;
  var diffWidth = Number(width) - defaultWidth;
  var widthPercentage = width + "%";
  myScaleBar.width(widthPercentage);

  marker.data([markerPos]); //set the position of the marker
  marker.dataIndex(0) //draw the marker
  var markerOffSet = 11 + diffWidth; //11 to be to the right of the gauge. gauge can move too
  marker.offset(markerOffSet.toString()); //moves marker to the left of the chart.
  marker.type('triangle-left'); //shape of the marker
  marker.zIndex(10); //bring the marker up front
  var markerWidth = 3/10 *  Number(width)
  marker.width(markerWidth); //size of the marker

  // myScaleBar.offset(xOffSet.toString() +"%"); //move gauge by offset
  chart.container(stage); //set the html element that the chart will be drawn on
  chart.title(chartTitle); //set the title of the chart
  // chart.width("100%");
  //counter will only be zero on the first time main is called.
  //counter will only be reseted when the web viewer is resetted
  // chart.right(xPosition);
  if (counter === 0) {
    chart.draw();
    counter++;
  }
  //i have drawn a chart. Delete all data in chart object and give new data and redraw
  else {
    chart.removeAllSeries();
    chart.draw();
  }

}
