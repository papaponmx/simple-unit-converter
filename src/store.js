import { observable } from 'mobx';

class MagnitudesStore {
  @observable history = []
  @observable options = [
    {
      name: 'weight',
      units: [
        'kg',
        'lbs',
      ],
    },
    {
      name: 'distance',
    },
    {
      name: 'height',
    },
    {
      name: 'volume',
    },
  ];
}

export default new MagnitudesStore()
