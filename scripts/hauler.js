import { getHaulingShips } from "./database.js";
import { getCargoShips } from "./database.js";

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id
            // Start a counter variable at 0
            let shipCounter = 0
            // Iterate all of the shipping ships
            const shippingShips = getCargoShips()

            for (const ship of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === ship.id) {
                    // Increase the counter by 1
                shipCounter++
                }
            }
            window.alert(`This hauler is carrying ${shipCounter} ships`)
        }
    }
)



export const HaulList = () => {
    const haulers = getHaulingShips()

    let haulerHTML = "<ul>"

    for (const hauler of haulers) {
        haulerHTML += `<li 
        data-type="hauler"
        data-id="${hauler.id}"
        >${hauler.name}</li>`
    }

    haulerHTML += "</ul>"

    return haulerHTML
}