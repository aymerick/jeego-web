export default Ember.Component.extend({
  chartSettings: function() {
    var result = {
      chart: {
          type: 'spline'
      },

      xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
      },

      yAxis: {
        'title': {
          text: 'Temperature'
        },
        labels: {
          format: '{value} °C'
        },
        minPadding: 0.5
      },

      tooltip: {
        valueSuffix: '°C',
        crosshairs: true,
        shared: true
      },

      plotOptions: {
          spline: {
              marker: {
                  enabled: false
              }
          }
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      }
    };

    if (!Ember.isEmpty(this.get('title'))) {
      result['title'] = { text: this.get('title') };
    } else {
      result['title'] = { text: "Temperature" };
    }

    if (!Ember.isEmpty(this.get('series'))) {
      result['series'] = this.get('series');
    }

    return result;
  },

  initializeChart: function() {
    this.$().highcharts(this.chartSettings());
  }.on('didInsertElement'),

  destroyChart: function() {
    this.$().highcharts().destroy();
  }.on('willDestroyElement')
});
