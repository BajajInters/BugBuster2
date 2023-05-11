import { Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  isHovered: boolean = false;

  hoverCard(event: any) {
    this.isHovered = event.type === 'mouseenter';
  }
  
  public chart: any;
  
  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: ['solved bugs', 'unsolved bugs'],
        datasets: [{
          label: 'bug dashboard',
          data: [300, 240],
          backgroundColor: [
            'green',
            'red'
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2
      }
    });
  }

  public chart1: any;

  createChart1() {
    this.chart1 = new Chart("MyChart1", {
      type: 'line',
      data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
          label: 'Bugs Resolved',
          data: [50, 35, 60, 30, 70, 45, 80],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: 'origin', 
          pointBackgroundColor: 'white' ,

        }]
      },
      options: {
        scales: {
          y: {
            grid: {
              drawOnChartArea: false
            },
            beginAtZero: true,
            ticks: {
              font: {
                family: 'Arial',
                size: 14
              },
              color: '#333'
            }
          },
          x: {
            grid: {
              drawOnChartArea: false
            },
            ticks: {
              font: {
                family: 'Arial',
                size: 14
              },
              color: '#333'
            }
          }
        },
        plugins: {
          
          title: {
            display: true,
            text: 'Bugs Resolved in Last Week',
            font: {
              family: 'Arial',
              size: 18,
              weight: 'bold'
            },
            
          },
          filler: {
            propagate: false
          },
          legend: {
            labels: {
              font: {
                family: 'Arial',
                size: 14
              },
              color: '#333'
            },
            position: 'bottom'
          }
        },
        elements: {
          line: {
            tension: 0.2 // add some tension to the line for a smooth curve
          }
        }
        
      }
    });
    const ctx = this.chart1.canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255,99,132,0.2)');
    gradient.addColorStop(0.5, 'rgba(255,99,132,0.5)');
    gradient.addColorStop(1, 'rgba(255,99,132,0)');
    this.chart1.data.datasets[0].backgroundColor = gradient;
    this.chart1.update();
  }
  
  ngOnInit(): void {
    this.createChart();
    this.createChart1();
  }
}
