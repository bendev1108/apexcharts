//Radial Bar Charts > Basic
var options = {
  series: [70],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    hollow: {
      size: '70%',
    }
  },
},
labels: ['Cricket'],
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

var chart = new ApexCharts(document.querySelector("#RBCbasic"), options);
chart.render();

//Radial Bar Charts > Multiple
var options = {
  series: [44, 55, 67, 83],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '22px',
      },
      value: {
        fontSize: '16px',
      },
      total: {
        show: true,
        label: 'Total',
        formatter: function (w) {
          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
          return 249
        }
      }
    }
  }
},
labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
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

var chart = new ApexCharts(document.querySelector("#Multiple"), options);
chart.render();

// Radial Bar Charts > Custom Angle Circle
var options = {
  series: [76, 67, 61, 90],
  chart: {
  height: 390,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    offsetY: 0,
    startAngle: 0,
    endAngle: 270,
    hollow: {
      margin: 5,
      size: '30%',
      background: 'transparent',
      image: undefined,
    },
    dataLabels: {
      name: {
        show: false,
      },
      value: {
        show: false,
      }
    }
  }
},
colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
legend: {
  show: true,
  floating: true,
  fontSize: '16px',
  position: 'left',
  offsetX: 160,
  offsetY: 15,
  labels: {
    useSeriesColors: true,
  },
  markers: {
    size: 0
  },
  formatter: function(seriesName, opts) {
    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
  },
  itemMargin: {
    vertical: 3
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
        show: false
    }
  }
}],
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

var chart = new ApexCharts(document.querySelector("#CustomAngleCircle"), options);
chart.render();

//Radial Bar Charts > Gradient
var options = {
  series: [75],
  chart: {
  height: 350,
  type: 'radialBar',
  toolbar: {
    show: true
  }
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 225,
     hollow: {
      margin: 0,
      size: '70%',
      background: '#fff',
      image: undefined,
      imageOffsetX: 0,
      imageOffsetY: 0,
      position: 'front',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 4,
        opacity: 0.24
      }
    },
    track: {
      background: '#fff',
      strokeWidth: '67%',
      margin: 0, // margin is in pixels
      dropShadow: {
        enabled: true,
        top: -3,
        left: 0,
        blur: 4,
        opacity: 0.35
      }
    },

    dataLabels: {
      show: true,
      name: {
        offsetY: -10,
        show: true,
        color: '#888',
        fontSize: '17px'
      },
      value: {
        formatter: function(val) {
          return parseInt(val);
        },
        color: '#111',
        fontSize: '36px',
        show: true,
      }
    }
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'dark',
    type: 'horizontal',
    shadeIntensity: 0.5,
    gradientToColors: ['#ABE5A1'],
    inverseColors: true,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 100]
  }
},
stroke: {
  lineCap: 'round'
},
labels: ['Percent'],
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

//Radial Bar Charts > Radialbars with Image
var options = {
  series: [67],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    hollow: {
      margin: 15,
      size: '70%',
      image: '../assets/img/logo.png',
      imageWidth: 64,
      imageHeight: 64,
      imageClipped: false
    },
    dataLabels: {
      name: {
        show: false,
        color: '#fff'
      },
      value: {
        show: true,
        color: '#00E396', //เปลี่ยนสีตัวหนังสือ 67%
        offsetY: 70,
        fontSize: '22px'
      }
    }
  }
},
fill: {
  type: 'image',
  image: {
    src: ['../assets/img/pp.jpg'],
  }
},
stroke: {
  lineCap: 'round'
},
labels: ['Volatility'],
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

var chart = new ApexCharts(document.querySelector("#Radialbars"), options);
chart.render();

//Radial Bar Charts > Stroked Gauge
var options = {
  series: [67],
  chart: {
  height: 350,
  type: 'radialBar',
  offsetY: -10
},
plotOptions: {
  radialBar: {
    startAngle: -135,
    endAngle: 135,
    dataLabels: {
      name: {
        fontSize: '16px',
        color: undefined,
        offsetY: 120
      },
      value: {
        offsetY: 76,
        fontSize: '22px',
        color: undefined,
        formatter: function (val) {
          return val + "%";
        }
      }
    }
  }
},
fill: {
  type: 'gradient',
  gradient: {
      shade: 'dark',
      shadeIntensity: 0.15,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 65, 91]
  },
},
stroke: {
  dashArray: 4
},
labels: ['Median Ratio'],
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

var chart = new ApexCharts(document.querySelector("#StrokedGauge"), options);
chart.render();

//Radial Bar Charts > Semi Circle Gauge
var options = {
  series: [76],
  chart: {
  type: 'radialBar',
  offsetY: -20,
  sparkline: {
    enabled: true
  }
},
plotOptions: {
  radialBar: {
    startAngle: -90,
    endAngle: 90,
    track: {
      background: "#e7e7e7",
      strokeWidth: '97%',
      margin: 5, // margin is in pixels
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        color: '#999',
        opacity: 1,
        blur: 2
      }
    },
    dataLabels: {
      name: {
        show: false
      },
      value: {
        offsetY: -2,
        fontSize: '22px'
      }
    }
  }
},
grid: {
  padding: {
    top: -10
  }
},
fill: {
  type: 'gradient',
  gradient: {
    shade: 'light',
    shadeIntensity: 0.4,
    inverseColors: false,
    opacityFrom: 1,
    opacityTo: 1,
    stops: [0, 50, 53, 91]
  },
},
labels: ['Average Results'],
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

var chart = new ApexCharts(document.querySelector("#SemiCircleGauge"), options);
chart.render();
