let compA = [];
let baseA = [];
let heightA = [];
let xvalA = [];
let yvalA = [];

let area = [];
let ax = [];
let ay = [];
let axx = [];
let ayy =[];
let igxx = [];
let igyy = [];

let dec = 3;
let pi = Math.PI;
let n = 0;
let sarea = 0;
let sax = 0;
let say = 0;
let saxx = 0;
let sayy = 0;
let sigxx = 0;
let sigyy = 0;
let xbar = 0;
let ybar = 0;
let iab = 0;
let ipq = 0;
let moix = 0;
let moiy = 0;
let kgxx = 0;
let kgyy = 0;

const getInfo = () => {
    for(let i=0 ; i<5 ; i++) {
        let id = "comp"+(i+1);
        let name = document.getElementById(id).value;
        compA[i] = name;
    }
    for(let i=0 ; i<5 ; i++) {
        let id = "base"+(i+1);
        let name = document.getElementById(id).value;
        baseA[i] = name;
    }
    for(let i=0 ; i<5 ; i++) {
        let id = "height"+(i+1);
        let name = document.getElementById(id).value;
        heightA[i] = name;
    }
    for(let i=0 ; i<5 ; i++) {
        let id = "xval"+(i+1);
        let name = document.getElementById(id).value;
        xvalA[i] = name;
    }
    for(let i=0 ; i<5 ; i++) {
        let id = "yval"+(i+1);
        let name = document.getElementById(id).value;
        yvalA[i] = name;
    }
    computeCD();
}

let hasAlphabet = (input) => {         // check no. of components
    let regex = /[a-zA-Z]/;
    return regex.test(input);
}
let round = (num) => {                         // round off to decimal
    return parseFloat(num.toFixed(dec))
}

let computeCD = () => {
    for (let i=0 ; i<5 ; i++) {
        if(hasAlphabet(compA[i])) {
            n += 1;
        }
        else {
            break;
        }
    }
    console.log("n = "+n);
    
    for ( let i=0 ; i<n ; i++ ) {           // Float Conversion
        baseA[i] = parseFloat(baseA[i]);
        heightA[i] = parseFloat(heightA[i]);
        xvalA[i] = parseFloat(xvalA[i]);
        yvalA[i] = parseFloat(yvalA[i]);
    }
    
    for ( let i=0 ; i<n ; i++ ) {             // area calculation
        if(compA[i] == 'R') {
            area[i] = baseA[i]*heightA[i];
        }
        else if(compA[i] == 'T') {
            area[i] = 0.5*baseA[i]*heightA[i];
        }
        else if(compA[i] == 'C') {
            area[i] = pi*(baseA[i]**2);
        }
        else if(compA[i] == 'SC') {
            area[i] = (pi*(baseA[i]**2))/2;
        }
        else if(compA[i] == 'QC') {
            area[i] = (pi*(baseA[i]**2))/4;
        }
        else if(compA[i] == 'NR') {
            area[i] = (baseA[i]*heightA[i])*(-1);
        }
        else if(compA[i] == 'NT') {
            area[i] = (0.5*baseA[i]*heightA[i])*(-1);
        }
        else if(compA[i] == 'NC') {
            area[i] = (pi*(baseA[i]**2))*(-1);
        }
        else if(compA[i] == 'NSC') {
            area[i] = ((pi*(baseA[i]**2))/2)*(-1);
        }
        else if(compA[i] == 'NQC') {
            area[i] = ((pi*(baseA[i]**2))/4)*(-1);
        }
        area[i] = round(area[i]);
    }
    console.log(area);
    
    for ( let i=0 ; i<n ; i++ ) {
        ax[i] = round(area[i] * xvalA[i]);
        ay[i] = round(area[i] * yvalA[i]);
    }
    console.log(ax);
    console.log(ay);
    
    for ( let i=0 ; i<n ; i++ ) {
        sarea += area[i];
        sax += ax[i];
        say += ay[i];
    }
    sarea = round(sarea)
    sax = round(sax);
    say = round(say);
    console.log(sarea);
    console.log(sax);
    console.log(say);
    
    xbar = round(sax/sarea);
    ybar = round(say/sarea);
    
    console.log(round(xbar));
    console.log(ybar);

    let table = document.createElement("table");

    let headerRow = table.insertRow(0);

    let headerCell1 = headerRow.insertCell(0);
    headerCell1.textContent = "Sl. NO.";

    let headerCell2 = headerRow.insertCell(1);
    headerCell2.textContent = "Component";

    let headerCell3 = headerRow.insertCell(2);
    headerCell3.textContent = "Area";

    let headerCell4 = headerRow.insertCell(3);
    headerCell4.textContent = "X";

    let headerCell5 = headerRow.insertCell(4);
    headerCell5.textContent = "Y";

    let headerCell6 = headerRow.insertCell(5);
    headerCell6.textContent = "AX";

    let headerCell7 = headerRow.insertCell(6);
    headerCell7.textContent = "AY";

    for (let i = 0; i <n; i++) {
        let row = table.insertRow(i+1);
        
        let cell1 = row.insertCell(0);
        cell1.textContent = i+1;

        let cell2 = row.insertCell(1);
        cell2.textContent = compA[i];

        let cell3 = row.insertCell(2);
        cell3.textContent = area[i];

        let cell4 = row.insertCell(3);
        cell4.textContent = xvalA[i];

        let cell5 = row.insertCell(4);
        cell5.textContent = yvalA[i];

        let cell6 = row.insertCell(5);
        cell6.textContent = ax[i];

        let cell7 = row.insertCell(6);
        cell7.textContent = ay[i];
    }

    let footerRow = table.insertRow(n+1);

    var footercell1 = footerRow.insertCell(0);
    footercell1.textContent = " ";

    var footercell2 = footerRow.insertCell(1);
    footercell2.textContent = "Sum =";

    var footercell3 = footerRow.insertCell(2);
    footercell3.textContent = sarea;

    var footercell4 = footerRow.insertCell(3);
    footercell4.textContent = " ";

    var footercell5 = footerRow.insertCell(4);
    footercell5.textContent = " ";

    var footercell6 = footerRow.insertCell(5);
    footercell6.textContent = sax;

    var footercell7 = footerRow.insertCell(6);
    footercell7.textContent = say;

    let tableContainer = document.getElementById("centroid");
    tableContainer.appendChild(table);

    let para1 = document.createElement("p");
    para1.textContent = "The Centrodial Distance of the given figure is :";
    let paraxbar = document.createElement("p");
    let paraybar = document.createElement("p");
    paraxbar.textContent = "X Bar = "+xbar;
    paraybar.textContent = "Y Bar = "+ybar;

    let paracontainer = document.getElementById("cenans");
    paracontainer.appendChild(para1);
    paracontainer.appendChild(paraxbar);
    paracontainer.appendChild(paraybar);

    moisub();
}

/////////////////////////////////////////////////////////

let moisub = () => {
    for ( let i=0 ; i<n ; i++ ) {
        axx[i] = round(ax[i] * xvalA[i]);
        ayy[i] = round(ay[i] * yvalA[i]);
    }
    console.log(axx);
    console.log(ayy);
    
    for ( let i=0 ; i<n ; i++ ) {
        saxx += axx[i];
        sayy += ayy[i];
    }
    saxx = round(saxx);
    sayy = round(sayy);
    console.log(saxx);
    console.log(sayy);

    let table = document.createElement("table");

    let headerRow = table.insertRow(0);

    let headerCell1 = headerRow.insertCell(0);
    headerCell1.textContent = "Component";

    let headerCell2 = headerRow.insertCell(1);
    headerCell2.textContent = "AXX";

    let headerCell3 = headerRow.insertCell(2);
    headerCell3.textContent = "AYY";

    for (let i = 0; i <n; i++) {
        let row = table.insertRow(i+1);
        
        let cell1 = row.insertCell(0);
        cell1.textContent = compA[i];

        let cell2 = row.insertCell(1);
        cell2.textContent = axx[i];

        let cell3 = row.insertCell(2);
        cell3.textContent = ayy[i];
    }

    let footerRow = table.insertRow(n+1);

    var footercell1 = footerRow.insertCell(0);
    footercell1.textContent = "Sum =";

    var footercell2 = footerRow.insertCell(1);
    footercell2.textContent = saxx;

    var footercell3 = footerRow.insertCell(2);
    footercell3.textContent = sayy;

    let tableContainer = document.getElementById("miosub");
    tableContainer.appendChild(table);

    moiCalc();
}

////////////////////////////////////////////////////////////

let moiCalc = () => {
    for ( let i=0 ; i<n ; i++ ) {             // ig__ calculation
        if(compA[i] == 'R') {
            igxx[i] = round((baseA[i]*heightA[i]*heightA[i]*heightA[i])/12);
            igyy[i] = round((baseA[i]*baseA[i]*baseA[i]*heightA[i])/12);
        }
        else if(compA[i] == 'T') {
            igxx[i] = round((baseA[i]*heightA[i]*heightA[i]*heightA[i])/36);
            igyy[i] = round((baseA[i]*baseA[i]*baseA[i]*heightA[i])/36);
        }
        else if(compA[i] == 'C') {
            igxx[i] = round((pi*baseA[i]*baseA[i]*baseA[i]*baseA[i])/4);
            igyy[i] = round((pi*baseA[i]*baseA[i]*baseA[i]*baseA[i])/4);
        }
        else if(compA[i] == 'SC') {
            let ori = prompt("Is SC top oriented?(Y/N)");
            if(ori=='y' || ori =='Y') {
                igxx[i] = round(0.11*baseA[i]*baseA[i]*baseA[i]*baseA[i]);
                igyy[i] = round((pi*baseA[i]*baseA[i]*baseA[i]*baseA[i])/8);
            }
            else {
                igxx[i] = round((pi*baseA[i]*baseA[i]*baseA[i]*baseA[i])/8);
                igyy[i] = round(0.11*baseA[i]*baseA[i]*baseA[i]*baseA[i]);
            }
        }
        else if(compA[i] == 'QC') {
            igxx[i] = round(0.055*baseA[i]*baseA[i]*baseA[i]*baseA[i]);
            igyy[i] = round(0.055*baseA[i]*baseA[i]*baseA[i]*baseA[i]);
        }
        else if(compA[i] == 'NR') {
            igxx[i] = round(((baseA[i]*heightA[i]*heightA[i]*heightA[i])/12)*(-1));
            igyy[i] = round(((baseA[i]*baseA[i]*baseA[i]*heightA[i])/12)*(-1));
        }
        else if(compA[i] == 'NT') {
            igxx[i] = round(((baseA[i]*heightA[i]*heightA[i]*heightA[i])/36)*(-1));
            igyy[i] = round(((baseA[i]*baseA[i]*baseA[i]*heightA[i])/36)*(-1));
        }
        else if(compA[i] == 'NC') {
            igxx[i] = round(((pi*baseA[i]*baseA[i]*baseA[i]*baseA[i])/4)*(-1));
            igyy[i] = round(((pi*baseA[i]*baseA[i]*baseA[i]*baseA[i])/4)*(-1));
        }
        else if(compA[i] == 'NSC') {
            let ori = prompt("Is SC top oriented?(Y/N)");
            if(ori=='y' || ori =='Y') {
                igxx[i] = round((0.11*baseA[i]*baseA[i]*baseA[i]*baseA[i])*(-1));
                igyy[i] = round(((pi*baseA[i]*baseA[i]*baseA[i]*baseA[i])/8)*(-1));
            }
            else {
                igxx[i] = round(((pi*baseA[i]*baseA[i]*baseA[i]*baseA[i])/8)*(-1));
                igyy[i] = round((0.11*baseA[i]*baseA[i]*baseA[i]*baseA[i])*(-1));
            }
        }
        else if(compA[i] == 'NQC') {
            igxx[i] = round((0.055*baseA[i]*baseA[i]*baseA[i]*baseA[i])*(-1));
            igyy[i] = round((0.055*baseA[i]*baseA[i]*baseA[i]*baseA[i])*(-1));
        }
    }

    for ( let i=0 ; i<n ; i++ ) {
        sigxx += igxx[i];
        sigyy += igyy[i];
    }
    sigxx = round(sigxx);
    sigyy = round(sigyy);
    console.log(sigxx);
    console.log(sigyy);

    let table = document.createElement("table");

    let headerRow = table.insertRow(0);

    let headerCell1 = headerRow.insertCell(0);
    headerCell1.textContent = "Component";

    let headerCell2 = headerRow.insertCell(1);
    headerCell2.textContent = "IG(X-X)";

    let headerCell3 = headerRow.insertCell(2);
    headerCell3.textContent = "IG(Y-Y)";

    for (let i = 0; i <n; i++) {
        let row = table.insertRow(i+1);
        
        let cell1 = row.insertCell(0);
        cell1.textContent = compA[i];

        let cell2 = row.insertCell(1);
        cell2.textContent = igxx[i];

        let cell3 = row.insertCell(2);
        cell3.textContent = igyy[i];
    }

    let footerRow = table.insertRow(n+1);

    var footercell1 = footerRow.insertCell(0);
    footercell1.textContent = "Sum =";

    var footercell2 = footerRow.insertCell(1);
    footercell2.textContent = sigxx;

    var footercell3 = footerRow.insertCell(2);
    footercell3.textContent = sigyy;

    let tableContainer = document.getElementById("moitable");
    tableContainer.appendChild(table);

    finalans();
}

/////////////////////////////////////////////

let finalans = () => {

    iab = round(sigxx + sayy);
    ipq = round(sigyy + saxx);

    let para1 = document.createElement("p");
    para1.textContent = "The Moment of Inertia w.r.t to reference axes is :";
    let paraiab = document.createElement("p");
    let paraipq = document.createElement("p");
    paraiab.textContent = "IAB = "+ iab;
    paraipq.textContent = "IPQ = "+ ipq;

    moix = round(iab - (sarea*ybar*ybar));
    moiy = round(ipq - (sarea*xbar*xbar));

    let para2 = document.createElement("p");
    para2.textContent = "The Moment of Inertia w.r.t to centrodial axes is :";
    let paramoix= document.createElement("p");
    let paramoiy = document.createElement("p");
    paramoix.textContent = "IG(X-X) = "+ moix;
    paramoiy.textContent = "IG(Y-Y) = "+ moiy;

    kgxx = round(Math.sqrt(moix/sarea));
    kgyy = round(Math.sqrt(moiy/sarea));

    let para3 = document.createElement("p");
    para3.textContent = "Radius of gyration is :";
    let parakgxx= document.createElement("p");
    let parakgyy = document.createElement("p");
    parakgxx.textContent = "KG(X-X) = "+ kgxx;
    parakgyy.textContent = "KG(Y-Y) = "+ kgyy;

    let paracontainer = document.getElementById("moi");
    paracontainer.appendChild(para1);
    paracontainer.appendChild(paraiab);
    paracontainer.appendChild(paraipq);
    paracontainer.appendChild(para2);
    paracontainer.appendChild(paramoix);
    paracontainer.appendChild(paramoiy);
    paracontainer.appendChild(para3);
    paracontainer.appendChild(parakgxx);
    paracontainer.appendChild(parakgyy);
}