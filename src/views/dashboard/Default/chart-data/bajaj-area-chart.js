// ===========================|| DASHBOARD - BAJAJ AREA CHART ||=========================== //

const chartData = {
  type: 'bar',
  options: {
    chart: {
      type: 'bar',
      height: 550
    },
    plotOptions: {
      bar: {
        borderRadius: 15,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: ['GitHub', 'Jira', 'Maga'],
      title: {
        text: 'integrations '
      }
    },
    yaxis: {
      title: {
        text: 'application'
      }
    },
    colors: ['#5e35b1', '#1e88e5', '#90CAF9D8 ']
  },
  series: [
    {
      name: 'Numbers',
      data: [200, 230, 448]
    },
    {
      name: 'Related',
      data: [200, 330, 548]
    },
    {
      name: 'Tasks',
      data: [400, 430, 448]
    }
  ]
};

export default chartData;
