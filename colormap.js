const projection = d3.geoNaturalEarth1();
const pathGenerator = d3.geoPath().projection(projection);

let renderMap = (
  selection,
  { countries, countriesData, colorvalue, colorscale }
) => {
  selection
    .append("path")
    .attr("class", "sphere")
    .attr("d", pathGenerator({ type: "Sphere" }));
  const paths = selection.selectAll("path").data(countries.features);

  const pathEnter = paths.enter();
  pathEnter
    .append("path")
    .attr("class", "country")
    .attr("d", pathGenerator)
    .attr("fill", (d) => colorscale(colorvalue(d)))
    .append("title")
    .text(
      (d) => `${countriesData[d.id].economy} : ${countriesData[d.id].name}`
    );
};
export default renderMap;
