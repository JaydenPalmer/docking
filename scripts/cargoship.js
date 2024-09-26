import { getCargoShips } from "./database.js";
import { getHaulingShips } from "./database.js";


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "ship") {

            // Get the haulerId value of the shipping ship clicked
            const shipId = itemClicked.dataset.id
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }
            const haulingShips = getHaulingShips()
            // Iterate the array of hauler objects
                for (const hauler of haulingShips) {
                    haulingShip = hauler
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(shipId) === haulingShip.id) {
                        window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
                }
            }
                    // Reassign the value of `haulingShip` to the current hauler

            // Show an alert to the user with this format...
            // Palais Royal is being hauled by Seawise Giant




        }
    }
)


export const ShipList = () => {
    const ships = getCargoShips()

    let shipHTML = "<ul>"

    for (const ship of ships) {
        shipHTML += `<li 
        data-id="${ship.id}" 
        data-type="ship"
        data-name="${ship.name}"
        >${ship.name}</li>`
    }

    shipHTML += "</ul>"
    
    return shipHTML
}