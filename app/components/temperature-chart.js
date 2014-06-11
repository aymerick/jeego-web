export default Ember.Component.extend({
  chartSettings: function() {
    var result = {
      title: {
        text: "Temperature"
      },

      xAxis: {
        type: 'datetime'
      },

      yAxis: {
        'title': {
          text: 'Temperature (°C)'
        }
      },

      tooltip: {
        valueSuffix: '°C',
        crosshairs: true,
        shared: true
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      }
    };

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
