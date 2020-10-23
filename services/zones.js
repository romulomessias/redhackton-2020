export const getZones = () => {
  return fetch(process.env.API_URL)
    .then((res) => res.json())
}

/**
 * const { isLoading, error, data } = useQuery('zonesData', getZones)
 * if (isLoading) return 'Loading'
 * if (error) return "Error occurred: " + error.message
 */

