// read data

d3.json("../samples.json").then( function(data)
{
    console.log(data);

// bar graph
// label string
labelst = [];
labels = data.samples[1].otu_ids.slice(0,9);
for (var i=0; i < labels.length; i++){
  text = "OTU "+labels[i]
labelst.push(text); 
};

// set up values for bar
values = data.samples[1].sample_values.slice(0,9);
labels = labelst;
text = data.samples[1].otu_labels.slice(0,9);
console.log(values);
console.log(labels);

// bar 
let trace1 = {
    x: values,
    y: labels,
    text: text,
    type: "bar",
    orientation: "h"
  };

let traceData = [trace1]

let layout = {
    title: {text: " Top Ten Samples"},
    xaxis: {title:{text: "Sample Values"}},
    yaxis: {title:{text:"OTU IDS"}}
}

Plotly.newPlot("bar", traceData, layout);
// end of bar graph

//bubble
valuesb = data.samples[1].sample_values;
labelsb = data.samples[1].otu_ids;
textb = data.samples[1].otu_labels;

let trace2 = {
    y: valuesb,
    x: labelsb,
    text: textb,
    mode: 'markers',
    marker: {
        size: valuesb,
        sizemode: 'area',
        sizemin: 5,
        color: valuesb,
        showscale: true
    }
  };

let traceData1 = [trace2]

let layout1 = {
    title: {text: " All samples with bubble size and color as Sample Values"},
    xaxis: {title:{text: "OTU IDS"}},
    yaxis: {title:{text:"Sample Values"}}
}

Plotly.newPlot("bubble", traceData1, layout1);




//end of then 
});