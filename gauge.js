var chart = anychart.gauges.linear();
var marker = chart.marker()
//chart.addPointer(0)
var counter = 0;
// var param = {
//   "chart title": "test 1",
//   "max": 1000,
//   "upper mid": 750,
//   "middle": 500,
//   "lower mid": 250,
//   "bottom": 0,
//   "marker": 500
// }

param = JSON.stringify(param);


function main(param) {
  let fmJson = JSON.parse(param);

  var chartTitle = fmJson["chart title"];
  var max = fmJson["max"]; //aray
  // console.log("top:"+max);
  var upperMid = fmJson["upper mid"];
  // console.log("upper mid:"+upperMid);
  var middle = fmJson["middle"]
  // console.log("mid:"+middle);
  var lowerMid = fmJson["lower mid"];
  // console.log("lower mid:"+lowerMid);
  var bottom = fmJson["bottom"];
  // console.log("bottom:"+bottom);
  var markerPos = fmJson["marker"];
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

  marker.data([markerPos]);
  marker.dataIndex(0)
  marker.offset("11%");
  marker.type('triangle-left');
  marker.zIndex(10);
  marker.width(3);
  // create a Scale Bar
  var myScaleBar = chart.scaleBar(0);
  myScaleBar.colorScale(scaleBarColorScale);
  chart.scale({minimum: bottom, maximum: max});
  // chart.scaleBar(true);

  chart.container("container");
  chart.title(chartTitle);
  if (counter === 0) {
    chart.draw();
    counter++;
  } else {
    chart.removeAllSeries();
    chart.draw();
  }

}
