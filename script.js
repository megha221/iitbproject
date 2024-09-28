let chemicals = [
    { id: 1, name: "Ammonium Persulfate", vendor: "LG Chem", density: 3525.92, viscosity: 60.63, packaging: "Bag", packSize: 100, unit: "kg", quantity: 6495.18 },
    { id: 2, name: "Caustic Potash", vendor: "Formosa", density: 3172.15, viscosity: 48.22, packaging: "Bag", packSize: 100, unit: "kg", quantity: 8751.90 },
    { id: 3, name: "Dimethylaminopropylamino", vendor: "LG Chem", density: 8435.37, viscosity: 12.62, packaging: "Barrel", packSize: 75, unit: "L", quantity: 5964.61 },
    { id: 4, name: "Mono Ammonium Phosphate", vendor: "Sinopec", density: 1597.65, viscosity: 76.51, packaging: "Bag", packSize: 105, unit: "kg", quantity: 8183.73 },
    { id: 5, name: "Ferric Nitrate", vendor: "DowDuPont", density: 364.04, viscosity: 14.90, packaging: "Bag", packSize: 105, unit: "kg", quantity: 4154.33 },
    { id: 6, name: "n-Pentane", vendor: "Sinopec", density: 4535.26, viscosity: 66.76, packaging: "N/A", packSize: 0, unit: "t", quantity: 6272.34 },
    { id: 7, name: "Glycol Ether PM", vendor: "LG Chem", density: 6495.18, viscosity: 72.12, packaging: "Bag", packSize: 250, unit: "kg", quantity: 8749.54 },
    { id: 8, name: "Sodium Hydroxide", vendor: "BASF", density: 3212.56, viscosity: 44.10, packaging: "Barrel", packSize: 150, unit: "kg", quantity: 9001.11 },
    { id: 9, name: "Sulfuric Acid", vendor: "Solvay", density: 1834.56, viscosity: 98.34, packaging: "Bag", packSize: 80, unit: "kg", quantity: 2345.56 },
    { id: 10, name: "Potassium Chloride", vendor: "Ineos", density: 1293.45, viscosity: 23.56, packaging: "Bag", packSize: 60, unit: "kg", quantity: 5432.67 },
    { id: 11, name: "Calcium Carbonate", vendor: "AkzoNobel", density: 2033.56, viscosity: 16.23, packaging: "Barrel", packSize: 110, unit: "kg", quantity: 6543.22 },
    { id: 12, name: "Methanol", vendor: "LG Chem", density: 3935.67, viscosity: 19.87, packaging: "Barrel", packSize: 200, unit: "L", quantity: 4567.89 },
    { id: 13, name: "Acetic Acid", vendor: "BASF", density: 2067.34, viscosity: 15.89, packaging: "Bag", packSize: 140, unit: "kg", quantity: 1122.33 },
    { id: 14, name: "Phosphoric Acid", vendor: "Formosa", density: 1299.45, viscosity: 27.34, packaging: "Barrel", packSize: 100, unit: "kg", quantity: 8976.56 },
    { id: 15, name: "Sodium Bicarbonate", vendor: "Solvay", density: 1876.12, viscosity: 33.12, packaging: "Bag", packSize: 180, unit: "kg", quantity: 9876.45 }
];



let selectedRow = null;

function loadTable() {
    const tableBody = document.getElementById('chemicalTableBody');
    tableBody.innerHTML = '';

    chemicals.forEach((row, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.vendor}</td>
            <td>${row.density}</td>
            <td>${row.viscosity}</td>
            <td>${row.packaging}</td>
            <td>${row.packSize}</td>
            <td>${row.unit}</td>
            <td>${row.quantity}</td>
            <td><button onclick="editRow(${index})">Edit</button></td>
        `;
        tableBody.appendChild(tr);
    });
}


function sortTable(columnIndex) {
    let dir = "asc"; 
    let switching = true;
    let rows, x, y, shouldSwitch;

    
    if (this.sortDirection === "asc") {
        dir = "desc";
        this.sortDirection = "desc";
    } else {
        dir = "asc";
        this.sortDirection = "asc";
    }

   
    chemicals.sort((a, b) => {
        let valA, valB;
        switch (columnIndex) {
            case 0:
                valA = a.id;
                valB = b.id;
                break;
            case 1:
                valA = a.name.toLowerCase();
                valB = b.name.toLowerCase();
                break;
            case 2:
                valA = a.vendor.toLowerCase();
                valB = b.vendor.toLowerCase();
                break;
            case 3:
                valA = a.density;
                valB = b.density;
                break;
            case 4:
                valA = a.viscosity;
                valB = b.viscosity;
                break;
            case 5:
                valA = a.packaging.toLowerCase();
                valB = b.packaging.toLowerCase();
                break;
            case 6:
                valA = a.packSize;
                valB = b.packSize;
                break;
            case 7:
                valA = a.unit.toLowerCase();
                valB = b.unit.toLowerCase();
                break;
            case 8:
                valA = a.quantity;
                valB = b.quantity;
                break;
            default:
                break;
        }

        if (dir === "asc") {
            if (valA < valB) {
                return -1;
            }
            if (valA > valB) {
                return 1;
            }
            return 0;
        } else {
            if (valA > valB) {
                return -1;
            }
            if (valA < valB) {
                return 1;
            }
            return 0;
        }
    });

   
    loadTable();
}


function editRow(index) {
    selectedRow = index;
    const modal = document.getElementById('editModal');
    modal.style.display = "block";


    document.getElementById('editName').value = chemicals[index].name;
    document.getElementById('editVendor').value = chemicals[index].vendor;
    document.getElementById('editDensity').value = chemicals[index].density;
    document.getElementById('editViscosity').value = chemicals[index].viscosity;
    document.getElementById('editPackaging').value = chemicals[index].packaging;
    document.getElementById('editPackSize').value = chemicals[index].packSize;
    document.getElementById('editUnit').value = chemicals[index].unit;
    document.getElementById('editQuantity').value = chemicals[index].quantity;
}

const modal = document.getElementById("editModal");
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

document.getElementById('saveChangesBtn').onclick = function() {
    const name = document.getElementById('editName').value;
    const vendor = document.getElementById('editVendor').value;
    const density = document.getElementById('editDensity').value;
    const viscosity = document.getElementById('editViscosity').value;
    const packaging = document.getElementById('editPackaging').value;
    const packSize = document.getElementById('editPackSize').value;
    const unit = document.getElementById('editUnit').value;
    const quantity = document.getElementById('editQuantity').value;

    chemicals[selectedRow] = {
        id: chemicals[selectedRow].id,
        name,
        vendor,
        density: parseFloat(density),
        viscosity: parseFloat(viscosity),
        packaging,
        packSize: parseFloat(packSize),
        unit,
        quantity: parseFloat(quantity)
    };

    modal.style.display = "none";
    loadTable();  
}

window.onload = loadTable;



