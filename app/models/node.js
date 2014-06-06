var Node = DS.Model.extend({
  kind:         DS.attr('number'),
  updated_at:   DS.attr('iso-date'),
  name:         DS.attr('string'),
  domoticz_idx: DS.attr('string'),
  temperature:  DS.attr('number'),
  humidity:     DS.attr('number'),
  light:        DS.attr('number'),
  motion:       DS.attr('boolean'),
  low_battery:  DS.attr('boolean'),
  vcc:          DS.attr('number')
});

Node.reopenClass({
  SENSORS: [ 'temperature', 'humidity', 'light', 'motion', 'low_battery', 'vcc' ]
});

export default Node;
