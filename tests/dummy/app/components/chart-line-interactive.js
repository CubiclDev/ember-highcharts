import Component from '@ember/component';
import { copy } from '@ember/object/internals';
import { inject } from '@ember/service';
import commitStats from '../data/commit-stats';

export default Component.extend({
  dynamicChart: inject('dynamic-chart'),

  init() {
    this._super(...arguments);

    this.chartOptions = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Repo commits'
      },
      xAxis: {
        type: 'category',
        title: {
          text: 'Week'
        }
      },
      yAxis: {
        title: {
          text: '# of Commits'
        }
      }
    };

    this.chartData = copy(commitStats, true);
  },

  actions: {
    updateSeriesData() {
      const newChartData = this.get('dynamicChart').updateSeriesData(commitStats, 2, 52);
      this.set('chartData', newChartData);
    },

    fullUpdateToSeries() {
      const newChartData = this.get('dynamicChart').updateSeriesData(commitStats, 2, 52);

      // updated currentTime attribute causes series.update() to be used instead of series.setData()
      newChartData.forEach((series) => {
        series.currentTime = Date.now();
      });

      this.set('chartData', newChartData);
    },

    setSeriesCount(numSeries) {
      const newChartData = this.get('dynamicChart').updateSeriesCount(commitStats, numSeries);
      this.set('chartData', newChartData);
    }
  }
});
