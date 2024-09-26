



const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {id: 1, name: "Big Ole Hauler"},
        {id: 2, name: "Small Lil Hauler"},
        {id: 3, name: "Jeremy"}
    ],
    cargoships: [
        { id: 1, name: "Stellar Voyager" },
        { id: 1, name: "Crimson Tide" },
        { id: 2, name: "Nebula Seeker" },
        { id: 2, name: "Aqua Horizon" },
        { id: 2, name: "Cosmic Wanderer" },
        { id: 1, name: "Azure Dream" },
        { id: 3, name: "Starlight Cruiser" },
        { id: 3, name: "Emerald Empress" },
        { id: 3, name: "Solar Wind" },
        { id: 3, name: "Galactic Pioneer" }
      ]
}


export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))
}

export const getCargoShips = () => {
    return database.cargoships.map(ship => ({...ship}))
}