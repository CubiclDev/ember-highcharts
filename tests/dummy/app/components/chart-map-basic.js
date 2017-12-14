import Component from '@ember/component';

import mapData from '../data/us-ca-map';

export default Component.extend({
  init() {
    this._super(...arguments);

    this.chartOptions = {
      title: {
        text: 'California'
      },
      colorAxis: {
        min: 0
      }
    };

    this.chartData = [
      {
        name: 'Random data',
        data: [
          {
            'hc-key': 'us-ca-071',
            'value': 5
          },
          {
            'hc-key': 'us-ca-037',
            'value': 10
          },
          {
            'hc-key': 'us-ca-073',
            'value': 20
          }
        ],
        mapData,
        joinBy: 'hc-key',
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }
    ];
  },
});
