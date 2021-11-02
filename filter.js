const impermaxFilter = (tokenList, order, rearrangeDOM=false) => {
    // get all rows into an array
    let rows = [];
    if (window.originalRows){
        rows = window.originalRows;
    }
    else {
        document.querySelectorAll('.pairs-table-row').forEach(e => rows.push(e));
        window.originalRows = rows;
    }
    
    // extract from rows information about supply, borrow and farms
    const supply = rows.map(e => e.querySelectorAll('.col')[2]).filter(e => e).map(e => [e.querySelectorAll('div')[0].innerHTML, e.querySelectorAll('div')[1].innerHTML].map(e => parseFloat(e.split('%')[0]) / 100 ));
    const borrow = rows.map(e => e.querySelectorAll('.col')[3]).filter(e => e).map(e => [e.querySelectorAll('div')[0].innerHTML, e.querySelectorAll('div')[1].innerHTML].map(e => parseFloat(e.split('%')[0]) / 100 ));
    const farm = rows.map(e => e.querySelectorAll('.col-5 .percentage')).filter(e => e).map(e => parseFloat(e[0].innerHTML.split('%')[0]) / 100 );
    
    const pairs = rows.map(e => e.querySelector('.col-7 .symbols').innerHTML);
    const amm = rows.map(e => e.querySelector('.col-7 .amm-label').innerHTML);
    const href = rows.map(e => e.href);
    
    // get all information in an object
    let info = pairs.map((e,i) => e.split('/').map((e,j) => { return { 
        token: e, 
        pair: pairs[i], 
        source: amm[i], 
        supply: supply[i][j], 
        borrow: borrow[i][j], 
        farm: farm[i], 
        href: href[i],
        row: rows[i],
    // flatten array and filter only those from wanted token list
    }} )).reduce((p,c) => [...p, ...c], []).filter(e => tokenList.includes(e.token));
    // sort info for given criteria. borrow and ascending, the rest descending
    info = info.sort((a,b) => order == 'borrow' ? a[order] - b[order] : b[order] - a[order]);
    
    // if you want to change original page rows
    if (rearrangeDOM){
        // remove original rows
        document.querySelectorAll('.pairs-table-row').forEach(e => e.remove());
        const table = document.querySelector('.pairs-table');
        // insert order and filtered info array rows into the table
        info.forEach(e => {
            // clone row so we can add it two times if needed (when 2 token in a pair are in the tokenlist)
            const newRow = e.row.cloneNode(true);
            // highlight token in the pair
            newRow.innerHTML = newRow.innerHTML.replace(e.token, `<b>${e.token}</b>`);
            // remove subrow (inside row) for the non desired token
            const subrow = e.pair.split('/').indexOf(e.token);
            newRow.querySelectorAll('.col, .currencies-rows-icon').forEach(e => e.querySelectorAll('div')[ (subrow + 1) % 2 ].remove());
            // insert changed row in the table
            table.insertAdjacentElement('beforeend', newRow);
        });
    }
    
    return info;
};
