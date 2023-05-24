//Line Charts > Basic
var options = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight' // 'smooth', 'straight', 'stepline'
},
title: {
  text: 'Product Trends by Month',
  align: 'left'
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    gradientToColors: [ '#775DD0'],
    shadeIntensity: 1,
    type: 'diagonal2', // horizontal, vertical, diagonal1, diagonal2
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 100, 100, 100]
  },
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
},
markers: {
  size: 0,
  colors: undefined,
  strokeColors: '#fff',
  strokeWidth: 2,
  strokeOpacity: 0.9,
  strokeDashArray: 0,
  fillOpacity: 1,
  discrete: [],
  shape: "circle", // "circle" | "square" | "rect"
  radius: 2,
  offsetX: 0,
  offsetY: 0,
  onClick: undefined,
  onDblClick: undefined,
  showNullDataPoints: true,
  hover: {
    size: undefined,
    sizeOffset: 3
  }
},
theme: {
  mode: 'dark',
  palette: 'palette1', //สีกราฟ
  monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'dark',
      shadeIntensity: 0.65
  },
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//Line Charts > Dashed
var options = {
  series: [{
    name: "Session Duration",
    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
  },
  {
    name: "Page Views",
    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
  },
  {
    name: 'Total Visits',
    data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
  }
],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  width: [5, 7, 5],
  curve: 'straight',
  dashArray: [0, 2, 4]
},
title: {
  text: 'Page Statistics',
  align: 'left'
},
legend: {
  tooltipHoverFormatter: function(val, opts) {
    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
  }
},
markers: {
  size: 0,
  hover: {
    sizeOffset: 6
  }
},
xaxis: {
  categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
    '10 Jan', '11 Jan', '12 Jan'
  ],
},
tooltip: {
  y: [
    {
      title: {
        formatter: function (val) {
          return val + " (mins)"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val + " per session"
        }
      }
    },
    {
      title: {
        formatter: function (val) {
          return val;
        }
      }
    }
  ]
},
grid: {
  borderColor: '#f1f1f1',
},
theme: {
  mode: 'dark',
  palette: 'palette1',
  monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
  },
}
};

var chart = new ApexCharts(document.querySelector("#Dashed"), options);
chart.render();

// Line Charts > Gradient
var options = {
  series: [{
  name: 'Sales',
  data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
}],
  chart: {
  height: 350,
  type: 'line',
},
forecastDataPoints: {
  count: 7
},
stroke: {
  width: 5,
  curve: 'smooth'
},
xaxis: {
  type: 'datetime',
  categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
  tickAmount: 10,
  labels: {
    formatter: function(value, timestamp, opts) {
      return opts.dateFormatter(new Date(timestamp), 'dd MMM')
    }
  }
},
title: {
  text: 'Forecast',
  align: 'left',
  style: {
    fontSize: "16px",
    color: '#666'
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    gradientToColors: [ '#FDD835'],
    shadeIntensity: 1,
    type: 'horizontal',
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 100, 100, 100]
  },
},
yaxis: {
  min: -10,
  max: 40
},
theme: {
  mode: 'dark',
  palette: 'palette1',
  monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
  },
}
};

var chart = new ApexCharts(document.querySelector("#Gradient"), options);
chart.render();


// Line Charts > Stepline
var options = {
  series: [{
  data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
}],
  chart: {
  type: 'line',
  height: 350
},
stroke: {
  curve: 'stepline',
},
dataLabels: {
  enabled: false
},
title: {
  text: 'Stepline Chart',
  align: 'left'
},
markers: {
  hover: {
    sizeOffset: 4
  }
},
theme: {
  mode: 'dark',
  palette: 'palette1',
  monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
  },
}
};

var chart = new ApexCharts(document.querySelector("#Stepline"), options);
chart.render();

// Line Charts > Missing / null values
var options = {
  series: [{
  name: 'Peter',
  data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
}, {
  name: 'Johnny',
  data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
}, {
  name: 'David',
  data: [null, null, null, null, 3, 4, 1, 3, 4,  6,  7,  9, 5, null, null, null]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  },
  animations: {
    enabled: false
  }
},
stroke: {
  width: [5,5,4],
  curve: 'straight'
},
labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
title: {
  text: 'Missing data (null values)'
},
xaxis: {
},
theme: {
  mode: 'dark',
  palette: 'palette1',
  monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
  },
}
};

var chart = new ApexCharts(document.querySelector("#Missing"), options);
chart.render();

// Line Charts > Line with Data Labels
var options = {
  series: [
  {
    name: "High - 2013",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Low - 2013",
    data: [12, 11, 14, 18, 17, 13, 13]
  }
],
  chart: {
  height: 350,
  type: 'line',
  dropShadow: {
    enabled: true,
    color: '#000',
    top: 18,
    left: 7,
    blur: 10,
    opacity: 0.2
  },
  toolbar: {
    show: false
  }
},
colors: ['#77B6EA', '#E91E63'],
dataLabels: {
  enabled: true,
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Average High & Low Temperature',
  align: 'left'
},
grid: {
  borderColor: '#e7e7e7',
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
markers: {
  size: 1
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  title: {
    text: 'Month'
  }
},
yaxis: {
  title: {
    text: 'Temperature'
  },
  min: 5,
  max: 40
},
legend: {
  position: 'top',
  horizontalAlign: 'right',
  floating: true,
  offsetY: -25,
  offsetX: -5
},
theme: {
  mode: 'dark',
  palette: 'palette1',
  monochrome: {
      enabled: false,
      color: '#255aee',
      shadeTo: 'light',
      shadeIntensity: 0.65
  },
}
};

var chart = new ApexCharts(document.querySelector("#DataLabels"), options);
chart.render();
