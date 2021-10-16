namespace ymaps.layout {
  interface PieChartStatic extends ymaps.interfaces.ILayoutStatic {
    new (data: PieChartData): PieChart;
  }

  interface PieChart extends ymaps.layout.templateBased.Base {}

  interface PieChartData {
    option?: PieChartDataOption;
    options?: PieChartDataOptions;
    properties: PieChartDataProperties;
  }

  interface PieChartDataOption {
    pieChartRadius?: number | Function;
  }

  interface PieChartDataOptions {
    pieChartCaptionMaxWidth?: number = 200;
    pieChartCoreFillStyle?: string = 'white';
    pieChartCoreRadius?: number | Function;
    pieChartStrokeStyle?: string = 'white';
    pieChartStrokeWidth?: number = 2;
  }

  interface PieChartDataProperties {
    data: object[] | Function;
    geoObjects?: interfaces.IGeoObject[];
    iconCaption?: string;
    iconContent?: string = 'The sum of all the sectors';
  }

  declare var PieChart: PieChartStatic;
}
