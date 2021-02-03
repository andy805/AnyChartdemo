


// create a chart
   chart = anychart.tagCloud();
   var counter = 0;

   // configure angles
   chart.angles([0]);


function main(param) {
    fmJson = JSON.parse(param);
    var text = fmJson.words;
    var dummytext ="";
    var ignoredWords = fmJson["ignored words"];
   // set the parsing mode
   chart.data(text, {mode: "by-word",ignoreItems: ignoredWords
 });

   // set the chart title
   chart.listen("chartDraw", function () {
     chart.title("Tag Cloud Chart: Mode = " +  chart.mode());
   });

   // set the container id
   chart.container("container");

   // initiate drawing the chart
   if(counter === 0)
   {
     chart.draw();
   }
   else
   {
     chart.data(dummytext, {mode: "by-word",ignoreItems: ignoredWords
   });
   chart.draw();
     chart.data(text, {mode: "by-word",ignoreItems: ignoredWords
   });
   chart.draw();

   }
}
// set the mode of the tag cloud
function tagCloudMode(mode) {
  chart.mode(mode);
}
