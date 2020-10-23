export const getZones = async () => {
  // return fetch(
  //   "http://ec2-18-234-191-73.compute-1.amazonaws.com/zone"
  // ).then((res) => res.json());

  return [
    {
      zone_id: 1,
      zone_name: "Colégio Cidade 1",
      zone_number: 76,
      zone_address: null,
      zone_city: "João Pessoa",
      zone_lat: -23.5942,
      zone_long: -23.5942,
      zone_status: 0,
      created_at: "2020-10-23T11:52:20.000Z",
      updated_at: null,
    },
    {
      zone_id: 3,
      zone_name: "Colégio Cidade 2",
      zone_number: 77,
      zone_address: null,
      zone_city: "João Pessoa 2",
      zone_lat: -23.595731,
      zone_long: -46.689165,
      zone_status: 0,
      created_at: "2020-10-23T11:54:46.000Z",
      updated_at: null,
    },
    {
      zone_id: 15,
      zone_name: "Colégio Cidade 3",
      zone_number: 78,
      zone_address: null,
      zone_city: "João Pessoa 3",
      zone_lat: -23.594718,
      zone_long: -46.687073,
      zone_status: 0,
      created_at: "2020-10-23T14:24:27.000Z",
      updated_at: null,
    },
    {
      zone_id: 16,
      zone_name: "Colégio Cidade 4",
      zone_number: 80,
      zone_address: null,
      zone_city: "João Pessoa 4",
      zone_lat: -23.592604,
      zone_long: -46.686461,
      zone_status: 0,
      created_at: "2020-10-23T14:44:56.000Z",
      updated_at: null,
    },
  ];
};

export const getZonesStatus = async (number) => {
  return fetch(
    "http://ec2-18-234-191-73.compute-1.amazonaws.com/zone/status?number=" +
      number
  ).then((res) => res.json());
};

/**
 * const { isLoading, error, data } = useQuery('zonesData', getZones)
 * if (isLoading) return 'Loading'
 * if (error) return "Error occurred: " + error.message
 */
