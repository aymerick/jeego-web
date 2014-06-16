var Log = DS.Model.extend({
  node_id: DS.attr('number'),
  at:      DS.attr('iso-date'),

  // sensors
  temperature: DS.attr('number'),
  humidity:    DS.attr('number'),
  light:       DS.attr('number'),
  motion:      DS.attr('boolean'),
  low_battery: DS.attr('boolean'),
  vcc:         DS.attr('number'),

  // relationships
  node: DS.belongsTo('node')
});

export default Log;
