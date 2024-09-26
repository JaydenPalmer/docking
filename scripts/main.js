import { ShipList } from "./cargoship.js";
import { DockList } from "./docks.js";
import { HaulList } from "./hauler.js";

const mainContainer = document.querySelector("#container")

const pageHTML = `
<h1>Ships Are Shipping</h1>
<article class="details">
    <section class="detail--column">
    <h3>Docks</h3>
    ${DockList()}
    </section>
    <section class="detail--column">
    <h3>Hauling Ships</h3>
    ${HaulList()}
    </section>
    <section class="detail--column">
    <h3>Shipping Ships</h3>
    ${ShipList()}
    </section>
</article>
`

mainContainer.innerHTML = pageHTML