//Pie Charts > Simple Pie
var options = {
  series: [44, 55, 13, 43, 22],
  chart: {
  width: 380,
  type: 'pie',
},
labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#SimplePie"), options);
chart.render();

//Pie Charts > Donut Update
var options = {
  series: [44, 55, 13, 33],
  chart: {
  width: 380,
  type: 'donut',
},
dataLabels: {
  enabled: false
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      show: false
    }
  }
}],
legend: {
  position: 'right',
  offsetY: 0,
  height: 230,
}
};

var chart = new ApexCharts(document.querySelector("#DonutUpdate"), options);
chart.render();


// function appendData() {
// var arr = chart.w.globals.series.slice()
// arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
// return arr;
// }

// function removeData() {
// var arr = chart.w.globals.series.slice()
// arr.pop()
// return arr;
// }

// function randomize() {
// return chart.w.globals.series.map(function() {
//     return Math.floor(Math.random() * (100 - 1 + 1)) + 1
// })
// }

// function reset() {
// return options.series
// }

// document.querySelector("#randomize").addEventListener("click", function() {
// chart.updateSeries(randomize())
// })

// document.querySelector("#add").addEventListener("click", function() {
// chart.updateSeries(appendData())
// })

// document.querySelector("#remove").addEventListener("click", function() {
// chart.updateSeries(removeData())
// })

// document.querySelector("#reset").addEventListener("click", function() {
// chart.updateSeries(reset())
// })

var options = { //Pie Charts > Monochrome Pie
  series: [25, 15, 44, 55, 41, 17],
  chart: {
  width: '60%',
  type: 'pie',
},
labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
theme: {
  monochrome: {
    enabled: true
  }
},
plotOptions: {
  pie: {
    dataLabels: {
      offset: -5
    }
  }
},
title: {
  text: "Monochrome Pie"
},
dataLabels: {
  formatter(val, opts) {
    const name = opts.w.globals.labels[opts.seriesIndex]
    return [name, val.toFixed(1) + '%']
  }
},
legend: {
  show: false
}
};

var chart = new ApexCharts(document.querySelector("#MonochromePie"), options);
chart.render();

//Pie Charts > Gradient Donut
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  width: 380,
  type: 'donut',
},
plotOptions: {
  pie: {
    startAngle: -90,
    endAngle: 270
  }
},
dataLabels: {
  enabled: false
},
fill: {
  type: 'gradient',
},
legend: {
  formatter: function(val, opts) {
    return val + " - " + opts.w.globals.series[opts.seriesIndex]
  }
},
title: {
  text: 'Gradient Donut with custom Start-angle'
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#GradientDonut"), options);
chart.render();

// Pie Charts > Semi Donut
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  type: 'donut',
},
plotOptions: {
  pie: {
    startAngle: -90,
    endAngle: 90,
    offsetY: 10
  }
},
grid: {
  padding: {
    bottom: -80
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 100
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#SemiDonut"), options);
chart.render();

//Pie Charts > Donut with Pattern
var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
  width: 380,
  type: 'donut',
  dropShadow: {
    enabled: true,
    color: '#111',
    top: -1,
    left: 3,
    blur: 3,
    opacity: 0.2
  }
},
stroke: {
  width: 0,
},
plotOptions: {
  pie: {
    donut: {
      labels: {
        show: true,
        total: {
          showAlways: true,
          show: true
        }
      }
    }
  }
},
labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
dataLabels: {
  dropShadow: {
    blur: 3,
    opacity: 0.8
  }
},
fill: {
type: 'pattern',
  opacity: 1,
  pattern: {
    enabled: true,
    style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
  },
},
states: {
  hover: {
    filter: 'none'
  }
},
theme: {
  palette: 'palette2'
},
title: {
  text: "Favourite Movie Type"
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#DWP"), options);
chart.render();

