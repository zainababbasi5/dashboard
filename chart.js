
  const ctx = document.getElementById('barchart').getContext('2d');

   const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'],
      datasets: [{
        label: '# Followers',
        data: [12, 19, 3, 5],
        backgroundColor: [
            'rgb(117, 35, 106)',
             'rgb(117, 35, 106)',
             'rgb(117, 35, 106)',
             'rgb(117, 35, 106)',

        ],
        borderColor :[
            'rgba(255, 99, 132, 1)',

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 