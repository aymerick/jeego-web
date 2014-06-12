var Node = DS.Model.extend({
  kind:         DS.attr('number'),
  updated_at:   DS.attr('iso-date'),
  last_seen_at: DS.attr('iso-date'),
  name:         DS.attr('string'),
  domoticz_idx: DS.attr('string'),

  // sensors
  temperature:  DS.attr('number'),
  humidity:     DS.attr('number'),
  light:        DS.attr('number'),
  motion:       DS.attr('boolean'),
  low_battery:  DS.attr('boolean'),
  vcc:          DS.attr('number')
});

// class methods and properties
Node.reopenClass({
  SENSORS: [ 'temperature', 'humidity', 'light', 'motion', 'low_battery', 'vcc' ],

  // @todo Receive that table from the server
  SENSORS_FOR_KIND: {
    1: [ 'temperature', 'humidity', 'light', 'motion', 'low_battery' ],
    2: [ 'temperature', 'humidity', 'light', 'low_battery' ],
    3: [ 'temperature', 'vcc' ],
    4: [ 'temperature', 'humidity', 'vcc' ],
    5: [ 'temperature', 'light', 'vcc' ]
  }
});

// instance methods and properties
Node.reopen({
  loadLogs: function() {
    var adapter = this.store.adapterFor('node');
    var url     = adapter.get('host');

    if (!Ember.isEmpty(adapter.get('namespace'))) {
      url += '/' + adapter.get('namespace');
    }

    url += '/nodes/' + this.get('id') + '/logs';

    var self = this;

    return $.getJSON(url).then(function(data) {
      var result = [ ];

      data.logs.forEach(function(logData) {
        // use serializer to normalize data
        var serializer = self.store.serializerFor('log');
        var model = self.store.modelFor('log');
        logData = serializer.normalize(model, logData);

        // push log to store
        var log = self.store.push('log', logData);

        result.pushObject(log);
      });

      // set logs to node instance
      self.set('logs', result);
    });
  },

  temperatureSerieData: function() {
    return (this.get('logs') || [ ]).map(function(log){
      return [ log.get('at').getTime(), log.get('temperature') ];
    });
  },

  hasSensor: function(sensor) {
    return Node.SENSORS_FOR_KIND[this.get('kind')].contains(sensor);
  },

  hasTemperature: function() {
    return this.hasSensor('temperature');
  }.property('kind'),

  hasHumidity: function() {
    return this.hasSensor('humidity');
  }.property('kind'),

  hasLight: function() {
    return this.hasSensor('light');
  }.property('kind'),

  hasMotion: function() {
    return this.hasSensor('motion');
  }.property('kind'),

  hasLowBattery: function() {
    return this.hasSensor('low_battery');
  }.property('kind'),

  hasVcc: function() {
    return this.hasSensor('vcc');
  }.property('kind')
});

export default Node;
