
export function filterData(searchInput,restaurants){
    return restaurants.filter(restaurant => restaurant?.info?.name?.toUpperCase().includes(searchInput?.toUpperCase()))
    }