import { SingleSeriesChart } from './single-series-chart';

export interface MultipleSeriesChart extends Array<{ name: string, series: SingleSeriesChart }> { }
