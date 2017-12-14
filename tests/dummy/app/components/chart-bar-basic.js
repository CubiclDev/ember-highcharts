import Component from '@ember/component';
import defaultTheme from '../themes/default-theme';

export default Component.extend({
  theme: defaultTheme,

  init() {
    this._super(...arguments);
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Fruit Consumption'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        allowDecimals: false,
        title: {
          text: 'Fruit eaten'
        }
      }
    };

    this.chartData = [
      {
        name: 'Jane',
        data: [5, 0, 20]
      },
      {
        name: 'John',
        data: [25, 30, 15]
      }
    ];
  },
});
