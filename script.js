// // Smily face code

// const svg = d3.select("svg");

// let height = 500;
// let width = 960;
// const Head = svg
//   .append("circle")
//   .attr("r", height / 2)
//   .attr("cx", width / 2)
//   .attr("cy", height / 2)
//   .attr("fill", "yellow")
//   .attr("stroke", "black");

// const Eyespacing = 100;
// const EyeYoffset = 70;
// const EyebrowWidth = 70;
// const Eyebrowoffset = -130;
// const EyebrowHeight = 15;
// const EyesG = svg
//   .append("g")
//   .attr("transform", `translate(${width / 2},${height / 2})`);
// const LeftEye = EyesG.append("circle")
//   .attr("r", 30)
//   .attr("cx", -Eyespacing)
//   .attr("cy", -EyeYoffset);

// const RightEye = EyesG.append("circle")
//   .attr("r", 30)
//   .attr("cx", +Eyespacing)
//   .attr("cy", -EyeYoffset);
// const EyebrowG = EyesG.append("g");

// EyebrowG.transition()
//   .duration(2000)
//   .attr("transform", "translate(0,-30)")
//   .transition()
//   .duration(2000)
//   .attr("transform", "translate(0,0)");

// const LeftEyebrow = EyebrowG.append("rect")
//   .attr("x", -Eyespacing - EyebrowWidth / 2)
//   .attr("y", Eyebrowoffset)
//   .attr("width", EyebrowWidth)
//   .attr("height", EyebrowHeight);

// const RghtEyebrow = EyebrowG.append("rect")
//   .attr("x", +Eyespacing - EyebrowWidth / 2)
//   .attr("y", Eyebrowoffset)
//   .attr("width", EyebrowWidth)
//   .attr("height", EyebrowHeight);

// const g = svg
//   .append("g")
//   .attr("transform", `translate(${width / 2},${height / 2})`);
// const mouth = g.append("path").attr(
//   "d",
//   d3.arc()({
//     innerRadius: 0,
//     outerRadius: 100,
//     startAngle: Math.PI / 2,
//     endAngle: (Math.PI * 3) / 2,
//   })
// );

// //BARCHAT

// let height = 500;
// let width = 720;
// const svg = d3.select("svg");
// function render(data) {
//   let margin = {
//     top: 20,
//     right: 20,
//     left: 40,
//     bottom: 30,
//   };
//   const innerheight = height - margin.top - margin.bottom;
//   const innerwidth = width - margin.left - margin.right;
//   const xscale = d3
//     .scaleLinear()
//     .domain([0, d3.max(data, (d) => d.Count)])
//     .range([0, innerwidth]);

//   const yScale = d3
//     .scaleBand()
//     .domain(data.map((d) => d.Period))
//     .range([0, innerheight])
//     .padding(0.2);

//   const g = svg
//     .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);
//   g.selectAll("rect")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("y", (d) => yScale(d.Period))
//     .attr("width", (d) => xscale(d.Count))
//     .attr("height", yScale.bandwidth());

//   const xaxis = () => d3.axisBottom(xscale).tickFormat(d3.format(".2s"));

//   g.append("g")
//     .call(d3.axisLeft(yScale))
//     .selectAll(".domain , .tick line")
//     .remove();
//   g.append("g").call(xaxis()).attr("transform", `translate(0,${innerheight})`);
// }
// d3.csv("data.csv").then((data) => {
//   console.log(data);
//   render(data);
// });

// scatterplot

// let height = 500;
// let width = 720;
// const svg = d3.select("svg");
// function render(data) {
//   let margin = {
//     top: 20,
//     right: 20,
//     left: 40,
//     bottom: 60,
//   };
//   const innerheight = height - margin.top - margin.bottom;
//   const innerwidth = width - margin.left - margin.right;
//   const xscale = d3
//     .scaleLinear()
//     .domain([0, d3.max(data, (d) => d.Count)])
//     .range([0, innerwidth])
//     .nice();

//   const yScale = d3
//     .scaleBand()
//     .domain(data.map((d) => d.Period))
//     .range([innerheight, 0])
//     .padding(0.7);

//   const svgG = svg
//     .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

//   svgG
//     .selectAll("circle")
//     .data(data)
//     .enter()
//     .append("circle")
//     .attr("cy", (d) => yScale(d.Period))
//     .attr("cx", (d) => xscale(d.Count))
//     .attr("r", 18);

//   svgG
//     .append("text")
//     .text("SOME RANDOM DATA")
//     .attr("x", innerwidth / 3);

//   const xaxis = () =>
//     d3.axisBottom(xscale).tickSize(-innerheight).tickFormat(d3.format(".2s"));
//   const yaxis = () => d3.axisLeft(yScale).tickSize(-innerwidth);

//   const YAxisG = svgG.append("g").call(yaxis());

//   YAxisG.selectAll(".domain ").remove();

//   const XAixG = svgG
//     .append("g")
//     .call(xaxis())
//     .attr("transform", `translate(0,${innerheight})`);

//   svgG
//     .append("text")
//     .text("COUNT")
//     .attr("fill", "black")
//     .attr("x", innerwidth / 3)
//     .attr("y", innerheight + 32)
//     .style("font-size", "1.2rem");
// }
// d3.csv("data.csv").then((data) => {
//   console.log(data);
//   render(data);
// });

// linechart

// let height = 500;
// let width = 720;
// const svg = d3.select("svg");
// function render(data) {
//   let margin = {
//     top: 20,
//     right: 20,
//     left: 40,
//     bottom: 60,
//   };
//   const innerheight = height - margin.top - margin.bottom;
//   const innerwidth = width - margin.left - margin.right;
//   const xscale = d3
//     .scaleTime()
//     .domain(d3.extent(data, (d) => d.time))
//     .range([0, innerwidth])
//     .nice();

//   const yScale = d3
//     .scaleLinear()
//     .domain(d3.extent(data, (d) => d.temperature))
//     .range([innerheight, 0])
//     .nice();

//   const svgG = svg
//     .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

//   const lineGenerator = d3
//     .line()
//     .x((d) => xscale(d.time))
//     .y((d) => yScale(d.temperature));

//   svgG
//     .append("path")
//     .attr("d", lineGenerator(data))
//     .attr("stroke", "black")
//     .attr("fill", "none")
//     .attr("class", "pathLine")
//   .attr("r", 18);

//   svgG
//     .append("text")
//     .text("SOME RANDOM DATA")
//     .attr("x", innerwidth / 3);

//   const xaxis = () => d3.axisBottom(xscale).tickSize(-innerheight);
//   const yaxis = () => d3.axisLeft(yScale).tickSize(-innerwidth);

//   const YAxisG = svgG.append("g").call(yaxis());
//   YAxisG.selectAll(".domain ").remove();

//   const XAixG = svgG
//     .append("g")
//     .call(xaxis())
//     .attr("transform", `translate(0,${innerheight})`);

//   svgG
//     .append("text")
//     .text("COUNT")
//     .attr("fill", "black")
//     .attr("x", innerwidth / 3)
//     .attr("y", innerheight + 32)
//     .style("font-size", "1.2rem");
// }
// d3.csv("data2.csv")
//   .then((data) => {
//     data.forEach((d) => {
//       d.time = new Date(d.time);
//       d.temperature = +d.temperature;
//     });
//     console.log(data);
//     render(data);
//   })
//   .catch((err) => console.error(err));

//areachart

// let height = 500;
// let width = 720;
// const svg = d3.select("svg");
// function render(data) {
//   let margin = {
//     top: 20,
//     right: 20,
//     left: 40,
//     bottom: 60,
//   };
//   const innerheight = height - margin.top - margin.bottom;
//   const innerwidth = width - margin.left - margin.right;
//   const xscale = d3
//     .scaleTime()
//     .domain(d3.extent(data, (d) => d.time))
//     .range([0, innerwidth]);

//   const yScale = d3
//     .scaleLinear()
//     .domain(d3.extent(data, (d) => d.temperature))
//     .range([innerheight, 0]);

//   const svgG = svg
//     .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

//   const arcGenerator = d3
//     .area()
//     .x((d) => xscale(d.time))
//     .y1((d) => yScale(d.temperature))
//     .y0(innerheight)
//     .curve(d3.curveBasis);

//   svgG
//     .append("path")
//     .attr("d", arcGenerator(data))
//     .attr("fill", "steelblue")
//     .attr("class", "pathLine");

//   svgG
//     .append("text")
//     .text("SOME RANDOM DATA")
//     .attr("x", innerwidth / 3);

//   const xaxis = () => d3.axisBottom(xscale).tickSize(-innerheight)
//   const yaxis = () => d3.axisLeft(yScale).tickSize(-innerwidth);

//   const YAxisG = svgG.append("g").call(yaxis());
//   YAxisG.selectAll(".domain ").remove();

//   const XAixG = svgG
//     .append("g")
//     .call(xaxis())

//     .attr("transform", `translate(0,${innerheight})`);

//   svgG
//     .append("text")
//     .text("COUNT")
//     .attr("fill", "black")
//     .attr("x", innerwidth / 3)
//     .attr("y", innerheight + 32)
//     .style("font-size", "1.2rem");
// }
// d3.csv("data2.csv")
//   .then((data) => {
//     data.forEach((d) => {
//       d.time = new Date(d.time);
//       d.temperature = +d.temperature;
//     });
//     console.log(data);
//     render(data);
//   })
//   .catch((err) => console.error(err));

//map

// const projection = d3.geoNaturalEarth1();
// const pathGenerator = d3.geoPath().projection(projection);

// const svg = d3.select("svg");

// const g = svg.append("g");

// svg.call(
//   d3.zoom().on("zoom", (event) => {
//     g.attr("transform", event.transform);
//   })
// );

// g.append("path")
//   .attr("class", "sphere")
//   .attr("d", pathGenerator({ type: "Sphere" }));

// d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(
//   (data) => {

//     const countries = topojson.feature(data, data.objects.countries);

//     const paths = g.selectAll("path").data(countries.features);

//     const pathEnter = paths.enter();
//     pathEnter
//       .append("path")
//       .attr("class", "country")
//       .attr("d", (d) => pathGenerator(d));

//     pathEnter.append("title").text("country");
//   }
// );

// world countries

// const height = 540;
// const width = 960;

// let margin = { left: 75, right: 50, top: 0, bottom: 0 };
// const innerwidth = width - margin.right - margin.left;
// const innerheight = height - margin.top - margin.bottom;

// const svg = d3.select("svg");
// const zoom = d3.zoom().scaleExtent([0.5, 32]).on("zoom", zoomed);

// const g = svg
//   .attr("width", width)
//   .attr("height", height)
//   .append("g")
//   .attr("transform", `translate(${margin.left},${margin.top})`);

// function zoomed(event) {
//   g.attr("transform", event.transform);
// }
// svg.call(zoom);

// const treelayout = d3.tree().size([innerheight, innerwidth]);
// const linepathGenerator = d3
//   .linkHorizontal()
//   .x((d) => d.y)
//   .y((d) => d.x);

// d3.json("/countries1.json").then((data) => {
//   const root = d3.hierarchy(data);
//   const links = treelayout(root).links();
//   g.selectAll("path")
//     .data(links)
//     .enter()
//     .append("path")
//     .attr("d", linepathGenerator);

//   g.selectAll("text")
//     .data(root.descendants())
//     .enter()
//     .append("text")
//     .attr("x", (d) => d.y)
//     .attr("dy", "0.3em")
//     .attr("y", (d) => d.x)
//     .attr("font-size", (d) => `${3.25 - d.depth}em`)
//     .attr("text-anchor", (d) => (d.children ? "middle" : "start"))
//     .text((d) => d.data.data.id);
// });

//color and size legends

// const colorscale = d3
//   .scaleOrdinal()
//   .domain(["apple", "lemon", "grape", "mango"])
//   .range(["red", "yellow", "purple", "green"]);

// const sizescale = d3.scaleSqrt().domain([0, 10]).range([0, 50]);

// const height = 540;
// const width = 960;
// let margin = { left: 75, right: 50, top: 50, bottom: 50 };
// const innerwidth = width - margin.right - margin.left;
// const innerheight = height - margin.top - margin.bottom;
// const radius = 30;
// const textoffset = 40;
// const svg = d3.select("svg");
// svg.attr("width", width).attr("height", height);
// const colorLegendg = svg
//   .append("g")
//   .attr("transform", `translate(100,${height / 3})`);

// const colorGroupsEnter = colorLegendg
//   .selectAll("g")
//   .data(colorscale.domain())
//   .enter()
//   .append("g")
//   .attr("transform", (d, i) => `translate(0,${i * 90})`);

// colorGroupsEnter.append("circle").attr("r", radius).attr("fill", colorscale);
// colorGroupsEnter
//   .append("text")
//   .text((d) => d)
//   .attr("font-size", "2.5em")
//   .attr("dy", "0.3em")
//   .attr("x", textoffset);
// const ticks = sizescale
//   .ticks(5)
//   .filter((d) => d != 0)
//   .reverse();
// const sizeLegendg = svg
//   .append("g")
//   .attr("transform", `translate(400,${height / 4})`);

// const sizeGroupsEnter = sizeLegendg
//   .selectAll("g")
//   .data(ticks)
//   .enter()
//   .append("g")
//   .attr("transform", (d, i) => `translate(0,${i * 90})`);

// sizeGroupsEnter.append("circle").attr("r", sizescale).attr("fill", colorscale);

// sizeGroupsEnter
//   .append("text")
//   .text((d) => d)
//   .attr("font-size", "2.5em")
//   .attr("dy", "0.3em")
//   .attr("x", textoffset);

//chloropleth map
// import renderMap from "./colormap.js";
// import render from "./colorlegend.js";
// const height = 540;
// const width = 960;
// const svg = d3.select("svg");
// const g = svg.append("g").attr("height", height).attr("width", width);

// svg.call(
//   d3.zoom().on("zoom", (event) => {
//     g.attr("transform", event.transform);
//   })
// );

// const colorscale = d3.scaleOrdinal();
// const colorvalue = (d) => {
//   return d.properties.economy;
// };

// let tsvfetch = d3.tsv("https://unpkg.com/world-atlas@1.1.4/world/50m.tsv");
// let jsonfetch = d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json");

// Promise.all([tsvfetch, jsonfetch]).then(([tsvData, jsonData]) => {
//   const countries = topojson.feature(jsonData, jsonData.objects.countries);
//   const countryG = g.append("g");
//   const colorLegendG = g.append("g");

//   const countriesData = tsvData.reduce((acc, current) => {
//     acc[current.iso_n3] = current;
//     return acc;
//   }, {});

//   countries.features.forEach((d) => {
//     Object.assign(d.properties, countriesData[d.id]);
//   });

//   colorscale
//     .domain(countries.features.map(colorvalue))
//     .domain(colorscale.domain().sort().reverse())
//     .range(d3.schemeSpectral[colorscale.domain().length]);

//   colorLegendG.call(render, {
//     colorscale,
//     radius: 10,
//     textoffset: 10,
//   });
//   countryG.call(renderMap, {
//     countries,
//     countriesData,
//     colorvalue,
//     colorscale,
//   });
// });

//unites states map
// function render(data) {
//   const svg = d3.select("svg");
//   console.log(data);
//   const projection = d3.geoAlbers();
//   const pathGenerator = d3.geoPath().projection(projection);

//   let g = svg.append("g");

//   g = g.selectAll("path").data(data.features);
//   const gEnter = g.enter().append("path").attr("class", "map-path");
//   gEnter.merge(g).attr("d", pathGenerator);

//   gEnter
//     .append("title")
//     .attr("class", "title")
//     .text((d) => d.properties.name);
// }

// d3.json("/ng.json").then(render);
//scatterplot with interaction
const svg = d3.select("svg");
const height = +svg.attr("height");
const width = +svg.attr("width");

let margin = { left: 100, right: 70, top: 70, bottom: 100 };
const innerwidth = width - margin.right - margin.left;
const innerheight = height - margin.top - margin.bottom;
let selectedxvalue = "horsepower";
let selectedyvalue = "weight";
let Data;
let keys;
const svgG = svg.selectAll(".svgG").data([null]);
const svgGEnter = svgG.enter().append("g").attr("class", "svgG");

svgGEnter
  .merge(svgG)
  .attr("width", innerwidth)
  .attr("height", innerheight)
  .attr("transform", `translate(${margin.left},${margin.top})`);

let xvalue = (d) => +d[selectedxvalue];
let yvalue = (d) => +d[selectedyvalue];

svgG.attr("width", innerwidth);
svgG.attr("height", innerheight);

function render({ Data, keys }) {
  const xscale = d3
    .scaleLinear()
    .domain([0, d3.max(Data, xvalue)])
    .range([0, innerwidth]);

  const yscale = d3
    .scaleLinear()
    .domain([0, d3.max(Data, yvalue)])
    .range([innerheight, 0]);

  const xaxis = () => {
    return d3.axisBottom(xscale);
  };

  const yaxis = () => d3.axisLeft(yscale);

  const YaxisG = svgG.select(".yaxis");
  const YaxisGEnter = svgGEnter.append("g").attr("class", "yaxis");

  YaxisG.merge(YaxisGEnter).call(yaxis());

  const yAxisLabelEnter = YaxisGEnter.append("text")
    .attr("fill", "black")
    .attr("font-size", "3em")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .merge(YaxisG.select(".axis-label"))
    .attr("y", -innerheight / 10)
    .attr("x", -innerwidth / 10)
    .text(
      selectedyvalue.replace(selectedyvalue[0], selectedyvalue[0].toUpperCase())
    );
  const xAxisG = svgG.select(".xaxis");
  const xAxisGEnter = svgGEnter.append("g").attr("class", "xaxis");

  xAxisG
    .merge(xAxisGEnter)
    .attr("transform", `translate(0,${innerheight})`)
    .call(xaxis());

  xAxisGEnter
    .append("text")
    .attr("fill", "black")
    .attr("class", "xaxis-label")
    .attr("font-size", "3em")
    .merge(xAxisG.select(".xaxis-label"))
    .attr("y", innerheight / 10)
    .attr("x", innerwidth / 2)
    .text(
      selectedxvalue.replace(selectedxvalue[0], selectedxvalue[0].toUpperCase())
    );

  const circles = svgG.merge(svgGEnter).selectAll(".circle").data(Data);
  circles
    .enter()
    .append("circle")
    .attr("class", "circle")
    .merge(circles)
    .attr("r", 10)
    .attr("cx", (d) => xscale(xvalue(d)))
    .attr("cy", (d) => yscale(yvalue(d)));

  const menu1 = d3.select("#menu1");
  const select1 = menu1.selectAll("select").data([null]);

  const select1Enter = select1.enter().append("select");
  select1Enter.merge(select1).on("change", function () {
    selectedxvalue = this.value;
    render({ Data, keys });
  });
  const options = select1.merge(select1Enter).selectAll("option").data(keys);
  options
    .enter()
    .append("option")
    .merge(options)
    .attr("value", (d) => d)
    .text((d) => d);

  const menu2 = d3.select("#menu2");
  const select2 = menu2.selectAll("select").data([null]);

  const select2Enter = select2.enter().append("select");
  select2Enter.merge(select2).on("change", function () {
    selectedyvalue = this.value;
    render({ Data, keys });
  });
  const options2 = select2.merge(select2Enter).selectAll("option").data(keys);
  options2
    .enter()
    .append("option")
    .merge(options2)
    .attr("value", (d) => d)
    .text((d) => d);
}

function loadAndprocessData(data) {
  Data = data.filter((d, i, array) => {
    return i <= 75 && d.horsepower;
  });

  keys = Object.keys(data[0]);
  keys = keys.filter((key) => {
    return key !== "name" && key !== "origin";
  });
  render({ Data, keys });
}

d3.csv("/Automobile.csv").then(loadAndprocessData);
