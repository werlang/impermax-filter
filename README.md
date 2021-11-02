# impermax-filter

This repo provide a simple filter function for those using the [Impermax](https://www.impermax.finance/) dapp.

## Motivation

As of today, Impermax still needs to implement a filter feature for their markets. There is no easy way to select only a single token or token list, nor order the markets by supply, borrow or farm APR.

## How-to Guide

There is no installation for this. You need to use your browser's Dev Tools console (F12).

* Open Impermax dapp.
* Once on markets page, after all markets are loaded, open Dev Tools console (F12).
* Paste impermaxFilter function from ```filter.js``` or ```filter.min.js``` into the console.
* Call the function using the ```tokenList``` and ```order``` arguments.
* Done.

### Arguments

```
impermaxFilter(tokenList, order);
```

```tokenList```: Array containing strings for each token you want to filter in the search.

```order```: String for desired ordering mode. Allowed values: ```supply```, ```borrow```, ```farm```. When informing ```supply``` or ```farm``` the order will be descending (as in higher is better) and if ```borrow``` the order will be ascending (as lower is better).


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
        "href": URL at Impermax for the market
    },
    ...
]
```

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
        "href": "https://polygon.impermax.finance/lending-pool/0x6d59c06a7f96a508310a76da84db397819e29c62"
    },
    {
        "token": "MAI",
        "pair": "MAI/USDT",
        "source": "QuickSwap",
        "supply": 0.5052,
        "borrow": 0.6797,
        "farm": 1.3846,
        "href": "https://polygon.impermax.finance/lending-pool/0xc3a4c0677b033bf6e9a4e22f930f1d60c5cd2c86"
    },
    {
        "token": "USDT",
        "pair": "USDC/USDT",
        "source": "SushiSwap",
        "supply": 0.4672,
        "borrow": 0.5722999999999999,
        "farm": 0.6775,
        "href": "https://polygon.impermax.finance/lending-pool/0x9b2f10eae09fad574b3f76b977c06634a4ec3a46"
    },
    {
        "token": "USDT",
        "pair": "MAI/USDT",
        "source": "QuickSwap",
        "supply": 0.3757,
        "borrow": 0.5171,
        "farm": 1.3846,
        "href": "https://polygon.impermax.finance/lending-pool/0xc3a4c0677b033bf6e9a4e22f930f1d60c5cd2c86"
    },
    {
        "token": "USDT",
        "pair": "USDC/USDT",
        "source": "QuickSwap",
        "supply": 0.3685,
        "borrow": 0.5061,
        "farm": 0.1675,
        "href": "https://polygon.impermax.finance/lending-pool/0x3e115a3af5a58c73571586468b0f5d08bfe9dab1"
    },
    {
        "token": "DAI",
        "pair": "DAI/MAI",
        "source": "QuickSwap",
        "supply": 0.3504,
        "borrow": 0.4794,
        "farm": 0.8690000000000001,
        "href": "https://polygon.impermax.finance/lending-pool/0x6d59c06a7f96a508310a76da84db397819e29c62"
    },
    {
        "token": "USDC",
        "pair": "USDC/JPYC",
        "source": "QuickSwap",
        "supply": 0.2952,
        "borrow": 0.3638,
        "farm": 2.2500999999999998,
        "href": "https://polygon.impermax.finance/lending-pool/0x205995421c72dc223f36bbfad78b66eea72d2677"
    },
    {
        "token": "DAI",
        "pair": "USDC/DAI",
        "source": "SushiSwap",
        "supply": 0.2938,
        "borrow": 0.3754,
        "farm": 1.6743999999999999,
        "href": "https://polygon.impermax.finance/lending-pool/0x542ccc962097b184ca12a46030d967a735342cf8"
    },
    {
        "token": "USDT",
        "pair": "WETH/USDT",
        "source": "QuickSwap",
        "supply": 0.2834,
        "borrow": 0.43060000000000004,
        "farm": 4.4584,
        "href": "https://polygon.impermax.finance/lending-pool/0x2912a338df9877905e54c557e4d826f84365602e"
    },
    {
        "token": "USDC",
        "pair": "USDC/WETH",
        "source": "SushiSwap",
        "supply": 0.2786,
        "borrow": 0.36979999999999996,
        "farm": 3.5025999999999997,
        "href": "https://polygon.impermax.finance/lending-pool/0xbb7ccc9c0f72fb91dee7053c652e961117db4368"
    },
    {
        "token": "USDC",
        "pair": "USDC/WETH",
        "source": "QuickSwap",
        "supply": 0.2626,
        "borrow": 0.4096,
        "farm": 4.7283,
        "href": "https://polygon.impermax.finance/lending-pool/0xc380e7fa325e1708e9e6ef4d9bed2cd806fcb328"
    },
    {
        "token": "USDC",
        "pair": "USDC/USDT",
        "source": "QuickSwap",
        "supply": 0.2495,
        "borrow": 0.3682,
        "farm": 0.1675,
        "href": "https://polygon.impermax.finance/lending-pool/0x3e115a3af5a58c73571586468b0f5d08bfe9dab1"
    },
    {
        "token": "USDC",
        "pair": "USDC/USDT",
        "source": "SushiSwap",
        "supply": 0.23879999999999998,
        "borrow": 0.3102,
        "farm": 0.6775,
        "href": "https://polygon.impermax.finance/lending-pool/0x9b2f10eae09fad574b3f76b977c06634a4ec3a46"
    },
    {
        "token": "USDC",
        "pair": "USDC/DAI",
        "source": "SushiSwap",
        "supply": 0.2275,
        "borrow": 0.2981,
        "farm": 1.6743999999999999,
        "href": "https://polygon.impermax.finance/lending-pool/0x542ccc962097b184ca12a46030d967a735342cf8"
    },
    {
        "token": "DAI",
        "pair": "WETH/DAI",
        "source": "QuickSwap",
        "supply": 0.1765,
        "borrow": 0.3212,
        "farm": 4.1132,
        "href": "https://polygon.impermax.finance/lending-pool/0x16aed35d0c1f5500b73063b10c0dad42b772ac23"
    }
]
```


## Tips are appreciated: ```0xA6E126a5bA7aE209A92b16fcf464E502f27fb658```
