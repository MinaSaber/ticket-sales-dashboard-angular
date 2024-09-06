import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import * as echarts from 'echarts'; // Correct way to import echarts
import { LineCHartService } from '../services/line-chart-mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartContainer', { static: true })
  chartContainer!: ElementRef<HTMLDivElement>;

  constructor(private lineChartService: LineCHartService) {}

  xAxisData: string[] = [];
  yAxisData: number[] = [];
  chart: echarts.ECharts | undefined;
  sortOptions: string[] = ['سنويا', 'شهريا', 'يوميا'];

  ngOnInit(): void {
    this.xAxisData = this.lineChartService.xAxisData;
    this.yAxisData = this.lineChartService.yAxisData;
  }

  ngAfterViewInit(): void {
    this.chart = echarts.init(this.chartContainer.nativeElement);
    this.setChartOptions();
    window.addEventListener('resize', () => {
      this.chart?.resize();
    });
  }

  setChartOptions(): void {
    if (this.chart) {
      const totalSum = this.yAxisData.reduce(
        (sum: number, value: number) => sum + value,
        0
      );

      this.chart.setOption({
        xAxis: {
          data: this.xAxisData,
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          splitLine: {
            show: true,
          },
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            data: this.yAxisData,
            type: 'line',
            smooth: true,
            lineStyle: {
              color: '#8A74F9',
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(138, 116, 249, 0.2637)' },
                  { offset: 1, color: 'rgba(0, 0, 0, 0)' },
                ],
              },
            },
            symbol: 'none',
          },
        ],
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#000000',
          textStyle: {
            color: '#FFFFFF',
          },
          formatter: (params: any[]) => {
            return params
              .map((param) => {
                const average: number = this.calculateAverage(
                  param.value,
                  totalSum
                );
                return `${param.value} إستخدام <br> ${average}%`;
              })
              .join('<br>');
          },
        },
      });
    }
  }

  calculateAverage(value: number, totalValues: number) {
    const average: number = parseFloat(((value / totalValues) * 100).toFixed());
    return average;
  }
}
