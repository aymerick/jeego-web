export default Ember.View.extend({

  series: [ ],
  title: null,
  yAxisTitle: null,

  highchartsSettings: function() {
    var result = {
      xAxis: {
        type: 'datetime'
      },

      tooltip: {
        crosshairs: true,
        shared: true,
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      }
    };

    if (!Ember.empty(this.get('title'))) {
      result['title'] = { 'text': this.get('title') };
    }

    if (!Ember.empty(this.get('yAxisTitle'))) {
      result['yAxis'] = { 'title': { text: this.get('yAxisTitle') } };
    }

    if (!Ember.empty(this.get('series'))) {
      result['series'] = this.get('series');
    }

    if (!Ember.empty(this.get('tooltipSuffix'))) {
      result['tooltip']['valueSuffix'] = this.get('tooltipSuffix');
    }

    return result;
  },

  didInsertElement: function() {
    this._super();

    this.$().highcharts(this.highchartsSettings());
  },

  willDestroyElement: function() {
    this._super();

    this.$().highcharts().destroy();
  }

});
