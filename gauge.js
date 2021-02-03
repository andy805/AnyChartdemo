var chart = anychart.gauges.linear(); //create gauge object
var marker = chart.marker() // create marker object
var counter = 0; // counter to detect if i already drew a chart

//called from FileMaker
//input: a Json object - as a string
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

  marker.data([markerPos]); //set the position of the marker
  marker.dataIndex(0) //draw the marker
  marker.offset("11%"); //moves marker to the left of the chart.
  marker.type('triangle-left'); //shape of the marker
  marker.zIndex(10); //bring the marker up front
  marker.width(3); //size of the marker

  chart.container("container"); //set the html element that the chart will be drawn on
  chart.title(chartTitle); //set the title of the chart
  //counter will only be zero on the first time main is called.
  //counter will only be reseted when the web viewer is resetted
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
