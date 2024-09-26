import { getCargoShips, getDocks } from "./database.js"



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock") {

            const dockId = itemClicked.dataset.id

            const ships = getCargoShips

            let cargoShips = ''


            for (const ship of ships) {
                // Does the haulerId foreign key match the id?
                if (parseInt(dockId) === ship.id) {
                    // Increase the counter by 1
                    cargoShips += `${ship.name} `
                } 
            }

            if (cargoShips === '') {
                cargoShips = "nothing"
            }


            window.alert(`${itemClicked.dataset.name} dock is currently unloading ${cargoShips}`)

        }
    }
)



export const DockList = () => {
    const docks = getDocks

    docks.sort((a, b) => a.location.localeCompare(b.location))

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li 
        data-id="${dock.id}"
        data-type="dock"
        data-name="${dock.location}"
        >${dock.location} can hold ${dock.volume} million tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}