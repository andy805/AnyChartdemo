// create a chart
   chart = anychart.tagCloud();

   // configure angles
   chart.angles([0]);


//called from FileMaker
//input: a Json object - as a string
/*
Json
{
	chart title: "chart title",
	words: "string"
	ignored words: ["ex1", "ex2", "ex3", ...]
}
*/
function main(param) {
    fmJson = JSON.parse(param);
    var text = fmJson.words;
    var chartTitle = fmJson["chart title"];
    var ignoredWords = fmJson["ignored words"];
   // set the parsing mode
   chart.data(text, {mode: "by-word",ignoreItems: ignoredWords
 });

   // set the chart title
   chart.listen("chartDraw", function () {
     chart.title(chartTitle+": Mode = " +  chart.mode());
   });

   // set the container id
   chart.container("container");

   // initiate drawing the chart
     chart.draw();
 }
// set the mode of the tag cloud
function tagCloudMode(mode) {
  chart.mode(mode);
}
