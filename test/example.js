var d = shortenObject(d3);
shortenObject(d.selection.prototype);
shortenObject(d.selection.enter.prototype);
shortenObject(d.transition.prototype);

// Math functions are not enumerable, so we use a different mechanism for discovering them
var M = shortenObject(Math, Object.getOwnPropertyNames);

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d.sc.o()
    .rRB([0, width], .1);

var y = d.sc.l()
    .r([height, 0]);

var xAxis = d.sv.ax()
    .s(x)
    .o("bottom");

var yAxis = d.sv.ax()
    .s(y)
    .o("left")
    .t(10, "%");

var svg = d.sel("body").ap("svg")
    .a("width", width + margin.left + margin.right)
    .a("height", height + margin.top + margin.bottom)
  .ap("g")
    .a("transform", "translate(" + margin.left + "," + margin.top + ")");

d.ts("data.tsv", type, function(error, data) {
  if (error) throw error;

  x.d(data.map(function(d) { return d.letter; }));
  y.d([0, d.ma(data, function(d) { return d.frequency; })]);

  svg.ap("g")
      .a("class", "x axis")
      .a("transform", "translate(0," + height + ")")
      .ca(xAxis);

  svg.ap("g")
      .a("class", "y axis")
      .ca(yAxis)
    .ap("text")
      .a("transform", "rotate(-90)")
      .a("y", 6)
      .a("dy", ".71em")
      .st("text-anchor", "end")
      .t("Frequency");

  svg.sA(".bar")
      .d(data)
    .e().a("rect")
      .a("class", "bar")
      .a("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .a("y", function(d) { return y(d.frequency); })
      .a("height", function(d) { return height - y(d.frequency); });
});

function type(d) {
  d.frequency = +d.frequency;
  return d;
}
