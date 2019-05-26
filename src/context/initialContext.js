const initialContext = {
  magnitudes: [
    {
      name: 'weight',
      units: [
        {
          name: 'kg',
        },
        {
          name: 'lb',
        },
      ],
    },
    {
      name: 'distance',
      units: [
        {
          name: 'mt',
        },
        {
          name: 'ft',
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
