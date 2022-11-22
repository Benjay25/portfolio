import {
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries | number[];
    chart: ApexChart;
    xAxis: ApexXAxis;
    yAxis: ApexYAxis;
    title: ApexTitleSubtitle;
    theme: ApexTheme;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    labels: string[];
};

export type ChartData = {
    series: ApexAxisChartSeries,
    categories: string[];
    title: string;
}

export const CHART_DEFAULTS: ChartOptions = {   
    chart: {
        height: 350,
        type: "bar",
    },
    dataLabels: {
        style: {
            colors: ['#FFF']
        }
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
    }],
    theme: {
        monochrome: {
            enabled: true,
            color: '#52b258',
            shadeTo: 'light',
            shadeIntensity: 0.65
        }
    },
    xAxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999],
        labels: {
          style: {
            colors: ['#FFF'],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
        },
        }
    },
    yAxis: {
        labels: {
          style: {
            colors: ['#FFF'],
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
        },
        }
    },
    title: {
        text: "My First Angular Chart",
        style: {
            fontSize:  '14px',
            fontWeight:  'normal',
            fontFamily:  'Akshar',
            color:  '#FFF'
        },
    },
    labels: [],
};