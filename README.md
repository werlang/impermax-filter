# impermax-filter

This repo provide a simple filter function for those using the [Impermax](https://www.impermax.finance/) dapp.

## Motivation

As of today, Impermax still needs to implement a filter feature for their markets. There is no easy way to select only a single token or token list, nor order the markets by supply, borrow or farm APR.

## How-to Guide

There is no installation for this. You need to use your browser's Dev Tools console (F12).

* Open Impermax dapp.
* Once on markets page, after all markets are loaded, open Dev Tools console (F12).
* Paste impermaxFilter function from ```filter.js``` or ```filter.min.js``` into the console.
* Call the function using the ```tokenList``` and ```order``` (and optionally ```rearrangeDOM```) arguments.
* Done.

### Arguments

```
impermaxFilter(tokenList, order, rearrangeDOM);
```

```tokenList```: Array containing strings for each token you want to filter in the search.

```order```: String for desired ordering mode. Allowed values: ```supply```, ```borrow```, ```farm```. When informing ```supply``` or ```farm``` the order will be descending (as in higher is better) and if ```borrow``` the order will be ascending (as lower is better).

```rearrangeDOM```: If set to true, The function will filter and rearrange the DOM elements in the page itself. _Default to false_.

### Sample call

```
impermaxFilter(['USDC', 'USDT', 'MAI', 'DAI'], 'supply');
```

### Response

The response will be an Array containing the ordered and filtered list of market pairs.

```
[
    {
        "token": The token for this entry,
        "pair": The pair of token from the liquidity pool,
        "source": Where the liquidity pool is hosted,
        "supply": Supply APR,
        "borrow": Borrow APR,
        "farm": Farm APR,
        "href": URL at Impermax for the market,
        "row": Row element in the DOM
    },
    ...
]
```

If you set ```rearrangeDOM``` to true, the page itself will be changed. Check sample below, filtered by stablecoins only (USDC, USDT, DAI, MAI) and ordered by Supply APR.

![Rearrange sample](https://user-images.githubusercontent.com/19828711/139942443-59d394ef-ba92-4cc1-85fd-cfb50aadaea9.png)


### Sample response

```
[
    {
        "token": "MAI",
        "pair": "DAI/MAI",
        "source": "QuickSwap",
        "supply": 0.5291,
        "borrow": 0.7104,
        "farm": 0.8690000000000001,
        "href": "https://polygon.impermax.finance/lending-pool/0x6d59c06a7f96a508310a76da84db397819e29c62",
        "row": [DOM Element Object]
    },
    {
        "token": "MAI",
        "pair": "MAI/USDT",
        "source": "QuickSwap",
        "supply": 0.5052,
        "borrow": 0.6797,
        "farm": 1.3846,
        "href": "https://polygon.impermax.finance/lending-pool/0xc3a4c0677b033bf6e9a4e22f930f1d60c5cd2c86",
        "row": [DOM Element Object]
    },
    {
        "token": "USDT",
        "pair": "USDC/USDT",
        "source": "SushiSwap",
        "supply": 0.4672,
        "borrow": 0.5722999999999999,
        "farm": 0.6775,
        "href": "https://polygon.impermax.finance/lending-pool/0x9b2f10eae09fad574b3f76b977c06634a4ec3a46"
        "row": [DOM Element Object]
    },
    ...
]
```


## Tips are appreciated: ```0xA6E126a5bA7aE209A92b16fcf464E502f27fb658```
