# d3-api-obfuscate

Crawls the D3 API adding obfuscated methods. Here's an example which creates an ordinal axis and sets its range:

```
var x = d.sc.o()
    .rRB([0, width], .1);
```

## Usage

Include `obfustcate.js` then obfuscate as follows:

```
var d = shortenObject(d3);
shortenObject(d.selection.prototype);
shortenObject(d.selection.enter.prototype);
shortenObject(d.transition.prototype);
```

This adds shortened functions to d3

## Mappings

Here's what the shortened form of the d3 and Math APIs look like:

### d3

```
d3.version => d.v
d3.ascending => d.a
d3.descending => d.d
d3.min => d.m
d3.max => d.ma
d3.extent => d.e
d3.sum => d.s
d3.mean => d.me
d3.quantile => d.q
d3.median => d.med
d3.variance => d.va
d3.deviation => d.de
d3.bisectLeft => d.b
d3.bisectRight => d.bR
d3.bisect => d.bi
d3.bisector => d.bis
d3.shuffle => d.sh
d3.permute => d.p
d3.pairs => d.pa
d3.zip => d.z
d3.transpose => d.t
d3.keys => d.k
d3.values => d.val
d3.entries => d.en
d3.merge => d.mer
d3.range => d.r
d3.nest => d.n
d3.set => d.se
d3.behavior.drag => d.be.d
d3.behavior.zoom => d.be.z
d3.behavior => d.be
d3.rebind => d.re
d3.dispatch => d.di
d3.event => d.ev
d3.requote => d.req
d3.selection => d.sel
d3.select => d.sele
d3.selectAll => d.sA
d3.mouse => d.mo
d3.touch => d.to
d3.touches => d.tou
d3.interpolateZoom => d.i
d3.color => d.c
d3.hsl => d.h
d3.hcl => d.hc
d3.lab => d.l
d3.rgb => d.rg
d3.functor => d.f
d3.xhr => d.x
d3.dsv => d.ds
d3.csv => d.cs
d3.tsv => d.ts
d3.timer => d.ti
d3.round => d.ro
d3.formatPrefix => d.fP
d3.time.year => d.tim.y
d3.time.years => d.tim.ye
d3.time.day => d.tim.d
d3.time.days => d.tim.da
d3.time.dayOfYear => d.tim.dO
d3.time.sunday => d.tim.s
d3.time.sundays => d.tim.su
d3.time.sundayOfYear => d.tim.sO
d3.time.monday => d.tim.m
d3.time.mondays => d.tim.mo
d3.time.mondayOfYear => d.tim.mO
d3.time.tuesday => d.tim.t
d3.time.tuesdays => d.tim.tu
d3.time.tuesdayOfYear => d.tim.tO
d3.time.wednesday => d.tim.w
d3.time.wednesdays => d.tim.we
d3.time.wednesdayOfYear => d.tim.wO
d3.time.thursday => d.tim.th
d3.time.thursdays => d.tim.thu
d3.time.thursdayOfYear => d.tim.tOY
d3.time.friday => d.tim.f
d3.time.fridays => d.tim.fr
d3.time.fridayOfYear => d.tim.fO
d3.time.saturday => d.tim.sa
d3.time.saturdays => d.tim.sat
d3.time.saturdayOfYear => d.tim.sOY
d3.time.week => d.tim.wee
d3.time.weekOfYear => d.tim.wOY
d3.time.format => d.tim.fo
d3.time.second => d.tim.se
d3.time.seconds => d.tim.sec
d3.time.minute => d.tim.mi
d3.time.minutes => d.tim.min
d3.time.hour => d.tim.h
d3.time.hours => d.tim.ho
d3.time.month => d.tim.mon
d3.time.months => d.tim.mont
d3.time.scale => d.tim.sc
d3.time => d.tim
d3.locale => d.lo
d3.format => d.fo
d3.geo.stream => d.g.s
d3.geo.area => d.g.a
d3.geo.bounds => d.g.b
d3.geo.centroid => d.g.c
d3.geo.clipExtent => d.g.cE
d3.geo.conicEqualArea => d.g.cEA
d3.geo.albers => d.g.al
d3.geo.albersUsa => d.g.aU
d3.geo.path => d.g.p
d3.geo.transform => d.g.t
d3.geo.projection => d.g.pr
d3.geo.projectionMutator => d.g.pM
d3.geo.equirectangular => d.g.e
d3.geo.rotation => d.g.r
d3.geo.circle => d.g.ci
d3.geo.distance => d.g.d
d3.geo.graticule => d.g.g
d3.geo.greatArc => d.g.gA
d3.geo.interpolate => d.g.i
d3.geo.length => d.g.l
d3.geo.azimuthalEqualArea => d.g.aE
d3.geo.azimuthalEquidistant => d.g.az
d3.geo.conicConformal => d.g.cC
d3.geo.conicEquidistant => d.g.co
d3.geo.gnomonic => d.g.gn
d3.geo.mercator => d.g.m
d3.geo.orthographic => d.g.o
d3.geo.stereographic => d.g.st
d3.geo.transverseMercator => d.g.tM
d3.geo => d.g
d3.geom.hull => d.ge.h
d3.geom.polygon => d.ge.p
d3.geom.voronoi => d.ge.v
d3.geom.delaunay => d.ge.d
d3.geom.quadtree => d.ge.q
d3.geom => d.ge
d3.interpolateRgb => d.iR
d3.interpolateObject => d.iO
d3.interpolateNumber => d.iN
d3.interpolateString => d.iS
d3.interpolate => d.in
d3.interpolators => d.int
d3.interpolateArray => d.iA
d3.ease => d.ea
d3.interpolateHcl => d.iH
d3.interpolateHsl => d.inte
d3.interpolateLab => d.iL
d3.interpolateRound => d.inter
d3.transform => d.tr
d3.interpolateTransform => d.iT
d3.layout.bundle => d.la.b
d3.layout.chord => d.la.c
d3.layout.force => d.la.f
d3.layout.hierarchy => d.la.h
d3.layout.partition => d.la.p
d3.layout.pie => d.la.pi
d3.layout.stack => d.la.s
d3.layout.histogram => d.la.hi
d3.layout.pack => d.la.pa
d3.layout.tree => d.la.t
d3.layout.cluster => d.la.cl
d3.layout.treemap => d.la.tr
d3.layout => d.la
d3.random.normal => d.ra.n
d3.random.logNormal => d.ra.l
d3.random.bates => d.ra.b
d3.random.irwinHall => d.ra.i
d3.random => d.ra
d3.scale.linear => d.sc.l
d3.scale.log => d.sc.lo
d3.scale.pow => d.sc.p
d3.scale.sqrt => d.sc.s
d3.scale.ordinal => d.sc.o
d3.scale.category10 => d.sc.c
d3.scale.category20 => d.sc.c2
d3.scale.category20b => d.sc.c20
d3.scale.category20c => d.sc.ca
d3.scale.quantile => d.sc.q
d3.scale.quantize => d.sc.qu
d3.scale.threshold => d.sc.t
d3.scale.identity => d.sc.i
d3.scale => d.sc
d3.svg.arc => d.sv.a
d3.svg.line => d.sv.l
d3.svg.area => d.sv.ar
d3.svg.chord => d.sv.c
d3.svg.diagonal => d.sv.d
d3.svg.symbol => d.sv.s
d3.svg.symbolTypes => d.sv.sT
d3.svg.axis => d.sv.ax
d3.svg.brush => d.sv.b
d3.svg => d.sv
d3.transition => d.tra
d3.text => d.te
d3.json => d.j
d3.html => d.ht
d3.xml => d.xm
```

### d3 selections

```
d3.select.select => selection.s
d3.select.selectAll => selection.sA
d3.select.attr => selection.a
d3.select.classed => selection.c
d3.select.style => selection.st
d3.select.property => selection.p
d3.select.text => selection.t
d3.select.html => selection.h
d3.select.append => selection.ap
d3.select.insert => selection.i
d3.select.remove => selection.r
d3.select.data => selection.d
d3.select.datum => selection.da
d3.select.filter => selection.f
d3.select.order => selection.o
d3.select.sort => selection.so
d3.select.each => selection.e
d3.select.call => selection.ca
d3.select.empty => selection.em
d3.select.node => selection.n
d3.select.size => selection.si
d3.select.transition => selection.tr
d3.select.interrupt => selection.in
d3.select.layoutSuspended => selection.l
d3.select.layout => selection.la
```

### Math

```
Math.LN10 => M.L
Math.LN2 => M.LN
Math.LOG2E => M.LO
Math.LOG10E => M.LOG
Math.PI => M.P
Math.SQRT1_2 => M.S
Math.SQRT2 => M.SQ
Math.random => M.r
Math.abs => M.a
Math.acos => M.ac
Math.asin => M.as
Math.atan => M.at
Math.ceil => M.c
Math.exp => M.e
Math.floor => M.f
Math.log => M.l
Math.round => M.ro
Math.sqrt => M.s
Math.atan2 => M.a2
Math.pow => M.p
Math.max => M.m
Math.min => M.mi
Math.imul => M.i
Math.sign => M.si
Math.trunc => M.t
Math.asinh => M.asi
Math.acosh => M.aco
Math.atanh => M.ata
Math.hypot => M.h
Math.fround => M.fr
Math.clz32 => M.c3
Math.cbrt => M.cb
Math.cos => M.co
Math.tan => M.ta
Math.log10 => M.l1
Math.log2 => M.l2
Math.log1p => M.lo
Math.expm1 => M.e1
```

## Testing

Currently there is just a simple example in the `test` folder, just run using a local server from the project root.
