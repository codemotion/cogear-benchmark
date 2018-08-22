# Cogear.JS benchmark

Benchmarking pages generation time.

# How to use

100 pages are pregenerated.

Simply run **Cogear.JS** in production to check built time.

```shell
> cogear prod
```

To increase pages num use `./faker.js` as following:
```shell
> yarn fake [n]
# Where [n] is a num
> yarn fake 10000
```

Then you can go to the `./src/pages/index.pug` and fix number of links at the index page.

Run **Cogear.JS** again.

# Benchmarks

On my iMac 2013 (Core i5, 2.9Ghz).

Pages count|Time (est.)
|------|------|
100|500ms
10000|6.5s

# Performance

Of course it depends on webpack entries complexity, pages complexity and pages count.

This benchmark provide only basic pages and scripts for testing.

