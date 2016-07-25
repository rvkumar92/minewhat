const context = document.getElementById('chart');

const data = {
  labels: [
    'MOBILE',
    'IPAD',
    'DESKTOP'
  ],
  datasets: [
    {
      data: [300,150,80],
      backgroundColor: [
        '#FFCE56',
        '#46BFBD',
        '#FF6384'
      ]
    }
  ]
};

var Chart = new Chart(context,{
  type: 'doughnut',
  data: data,
  options: {
    title: {
      display: true,
      text: 'DEVICE DISTRIBUTION'
    }
  }
});
