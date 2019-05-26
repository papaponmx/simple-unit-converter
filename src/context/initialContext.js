const initialContext = {
  magnitudes: [
    {
      name: 'weight',
      units: [
        {
          name: 'kg',
        },
        {
          name: 'lbs',
        },
      ],
    },
    {
      name: 'distance',
      units: [
        {
          name: 'mts',
        },
        {
          name: 'fts',
        },
        {
          name: 'km',
        },
        {
          name: 'miles',
        },
      ],
    },
    // TODO: Add support for more units
    // {
    //   name: 'height',
    // },
    // {
    //   name: 'volume',
    // },
  ],
};

export default initialContext;
