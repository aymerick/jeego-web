var NodeModel = DS.Model.extend({
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
  vcc:          DS.attr('number'),

  // relationships
  logs: DS.hasMany('log', {'async': true})
});

// class methods and properties
NodeModel.reopenClass({
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
NodeModel.reopen({
  temperatureSerieData: Ember.computed.map('logs', function(log) {
    return [ log.get('at').getTime(), log.get('temperature') ];
  }),

  // Sensors

  hasSensor: function(sensor) {
    return NodeModel.SENSORS_FOR_KIND[this.get('kind')].contains(sensor);
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

export default NodeModel;
