function init() {
  //this is a start blank
}
init();

// for dropdown selection
d3.selectAll("#selDataset").on("change", optionChanged);

// This function is called when a dropdown menu item is selected
  function optionChanged() {
    var myselect = document.getElementById("selDataset");
    ds = myselect.options[myselect.selectedIndex].value;

  console.log(ds);

 // read data
 d3.json("../samples.json").then( function(data)
 {
    console.log(data);
    // console.log(ds);

 // bar graph
 // label string
 labelst = [];
 labels = data.samples[ds].otu_ids.slice(0,9);
 for (var i=0; i < labels.length; i++){
  text = "OTU "+labels[i]
labelst.push(text); 
 };

 // set up values for bar
 values = data.samples[ds].sample_values.slice(0,9);
 labels = labelst;
 text = data.samples[ds].otu_labels.slice(0,9);
 // console.log(values);
 // console.log(labels);

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
 valuesb = data.samples[ds].sample_values;
 labelsb = data.samples[ds].otu_ids;
 textb = data.samples[ds].otu_labels;

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
 // end of bubble

 // metadata info
 
 m_id = "ID: "+data.metadata[ds].id;
 // console.log(m_id);
 m_age = "Age: "+data.metadata[ds].age;
 m_eth = "Ethnicity: "+data.metadata[ds].ethnicity;
 m_gen = "Gender: "+data.metadata[ds].gender;
 m_loc = "Location: "+data.metadata[ds].location;
 m_bb = "bbtype: "+data.metadata[ds].bbtype;
 m_wf = "wfreq: "+data.metadata[ds].wfreq;

 document.getElementById("id").innerHTML = m_id;
 document.getElementById("age").innerHTML = m_age;
 document.getElementById("gen").innerHTML = m_gen;
 document.getElementById("loc").innerHTML = m_loc;
 document.getElementById("eth").innerHTML = m_eth;
 document.getElementById("bb").innerHTML = m_bb;
 document.getElementById("wf").innerHTML = m_wf;
 
 // end of meta info

 //end of then 

});
//end of redraw
  }

