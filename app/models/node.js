import randomNumber from "jeego-web/utils/random-number";

var Node = DS.Model.extend({
  kind:         DS.attr('string'),
  updated_at:   DS.attr('date'),
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
  FIXTURES: [
    {
      id: '2',
      kind: '1',
      updated_at: new Date() - (randomNumber(0, 10) * 60 * 1000),
      name: 'Salon',
      temperature: 20.6,
      humidity: 66,
      light: 94,
      motion: false,
      low_battery: false
    },
    {
      id: '3',
      kind: '2',
      updated_at: new Date() - (randomNumber(0, 10) * 60 * 1000),
      name: 'Chambre 1',
      temperature: 19.0,
      humidity: 66,
      light: 93,
      low_battery: false
    },
    {
      id: '4',
      kind: '2',
      updated_at: new Date() - (randomNumber(0, 10) * 60 * 1000),
      name: 'Chambre 2',
      temperature: 19.1,
      humidity: 70,
      light: 92,
      low_battery: false
    },
    {
      id: '27',
      kind: '5',
      updated_at: new Date() - (randomNumber(0, 10) * 60 * 1000),
      name: 'Bureau',
      temperature: 24.8,
      humidity: 70,
      light: 100,
      vcc: 3086
    },
    {
      id: '28',
      kind: '4',
      updated_at: new Date() - (randomNumber(0, 10) * 60 * 1000),
      name: 'Chambre 3',
      temperature: 19.4,
      humidity: 66,
      vcc: 3155
    },
    {
      id: '29',
      kind: '3',
      updated_at: new Date() - (randomNumber(0, 10) * 60 * 1000),
      name: 'Arriere cuisine',
      temperature: 19.6,
      vcc: 3044
    }
  ]
});

export default Node;
