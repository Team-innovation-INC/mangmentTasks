const chartData = {
  type: 'line',
  height: 90,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#fff'],
    fill: {
      type: 'solid',
      opacity: 1
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (value) {
          return value + '%';
        }
      }
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: true
      },
      y: {
        title: '%'
      },
      marker: {
        show: false
      },
      formatter: function (val) {
        return val.toFixed(2) + '%';
      }
    }
  },
  series: [
    {
      data: [45, 66, 41, 89, 25, 44, 9, 54],
      labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6', 'Point 7', 'Point 8']
    }
  ]
};

export default chartData;
