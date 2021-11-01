const impermaxFilter = (tokenList, mode) => {
    const rows = [];
    document.querySelectorAll('.pairs-table-row').forEach(e => rows.push(e));
    
    const supply = rows.map(e => e.querySelectorAll('.col')[2]).filter(e => e).map(e => [e.querySelectorAll('div')[0].innerHTML, e.querySelectorAll('div')[1].innerHTML].map(e => parseFloat(e.split('%')[0]) / 100 ));
    const borrow = rows.map(e => e.querySelectorAll('.col')[3]).filter(e => e).map(e => [e.querySelectorAll('div')[0].innerHTML, e.querySelectorAll('div')[1].innerHTML].map(e => parseFloat(e.split('%')[0]) / 100 ));
    const farm = rows.map(e => e.querySelectorAll('.col-5 .percentage')).filter(e => e).map(e => parseFloat(e[0].innerHTML.split('%')[0]) / 100 );

    const pairs = rows.map(e => e.querySelector('.col-7 .symbols').innerHTML);
    const amm = rows.map(e => e.querySelector('.col-7 .amm-label').innerHTML);
    const href = rows.map(e => e.href);
    
    const info = pairs.map((e,i) => e.split('/').map((e,j) => {return { 
        token: e, 
        pair: pairs[i], 
        source: amm[i], 
        supply: supply[i][j], 
        borrow: borrow[i][j], 
        farm: farm[i], 
        href: href[i]
    }} )).reduce((p,c) => [...p, ...c], []).filter(e => tokenList.includes(e.token));
    
    return info.sort((a,b) => {
        if (mode == 'borrow'){
            return a[mode] - b[mode];
        }
        return b[mode] - a[mode];
    });
};
