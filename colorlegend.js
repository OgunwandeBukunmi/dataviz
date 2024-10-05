function render(selection, { colorscale, radius, textoffset }) {
  selection.attr("transform", "translate(20,525)");

  const backgroundData = selection.selectAll("rect").data([null]);
  backgroundData
    .enter()
    .append("rect")
    .attr("class", "colorGbackground")
    .merge(backgroundData)
    .attr("width", 330)
    .attr("height", () => colorscale.domain().length * 20 + radius * 2)
    .attr("y", -radius * 2)
    .attr("x", -radius * 2)
    .attr("rx", radius);

  const colorGroupsEnter = selection
    .selectAll("g")
    .data(colorscale.domain())
    .enter()
    .append("g")
    .attr("class", "colorlegendElement")
    .attr("transform", (d, i) => `translate(0,${i * 20})`);

  colorGroupsEnter.append("circle").attr("r", radius).attr("fill", colorscale);
  colorGroupsEnter
    .append("text")
    .text((d) => d)
    .attr("font-size", "1.5em")
    .attr("dy", "0.3em")
    .attr("x", textoffset);
}

export default render;
