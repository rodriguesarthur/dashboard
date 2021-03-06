// BAR CHART
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],
        datasets: [{
            label: "Relatório Anual",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [100, 300, 700, 400, 600, 900, 700, 500, 800, 600, 400, 500],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// DOUGHNUT CHART
var ctx = document.getElementById('myDoughnutChart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['Abertos', 'Resolvidos','Cancelados'],
		datasets: [{
			data: [220, 170, 50],
			backgroundColor: ['#5FA0C3', '#7CDA90','#FF6384']
		}]
	}
});

// DOUGHNUT CHART
var ctx = document.getElementById('myPieChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Abertos', 'Resolvidos','Cancelados'],
        datasets: [{
            data: [220, 170, 50],
            backgroundColor: ['#5FA0C3', '#7CDA90','#FF6384']
        }]
    }
});