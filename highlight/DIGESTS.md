## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"
  integrity="sha384-KnPvYPx1poT554tHDV1nuYV9sOkh4cZPBvLZQlXgJmoRQZPdgQNwL50/xq9kynp9"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/languages/go.min.js"
  integrity="sha384-orYKHAs3chK3oDMQLy5ywrzoY8z9zvzfmNIjmVxKXioAUtwDhP+xf6THWYSI/43Y"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-Vqe1AEoiNcLtV2DfIX2ddu9YnDvXbzuMi4hx542iG7/t9WlE1sobqt9DHidv8/23 /es/languages/bash.js
sha384-8FqiBkFvhBoCq7xHJ8pB0H0/hBH2FJ0IHl2CcZWpINYY6uyw38RJgZNe5fddwEaa /es/languages/bash.min.js
sha384-amdMjFrQeV1IlGyVyYRGeUBxPp1NVz7WG5xs0heAwCiAZLj0ISxeJwiOTeom9RfS /es/languages/css.js
sha384-rLeEizUP6J+98gF7EZ4ngav3h+slU5SqCVDahqOoYBEdjzhWQ3g6XldnqR9BSlBR /es/languages/css.min.js
sha384-z9bZmXQ6WniHUvySgc0/iokrwX54kIx/ZDvUIHIwAjgHRFjLZgNKiTX3UBi5aY/4 /es/languages/java.js
sha384-WmZNtzcna3shPin4x0B8fSeXgtW14zoyha+gmtNTU53pa/ZImw0O8FmX0x06ETq+ /es/languages/java.min.js
sha384-mxaIAuwA1l6te9LMbWwt9PNtaoRiwRk1/345TMC2UQtNTi1kjbhizCrSxaHAegHF /es/languages/javascript.js
sha384-r8C5XKdITWu1xHcHMIfmqgbWZTa0w/MPyAykL+WctwUoeTsEHBo5+jSSoHQ+qFy6 /es/languages/javascript.min.js
sha384-a7CJHRB29/7Hhj+fm2T+rVAfyTTsDBmFA7Jyb8gWyA/IX71UDkK0TBanG+K4T75i /es/languages/php.js
sha384-HmKbGhJX2Y98LBeAFLqI79rljxMw9FbDEbbWQfYo3vTeMjCLncFCwSrdgegOv9go /es/languages/php.min.js
sha384-ApNDxgmZnH1HTziUAgsU7UkaKsn+3e5HyrIbzOalWXhB5lN926Km2GrfrJmJOq5o /es/languages/ruby.js
sha384-AUyGIa32efsNJIJnJtL4/+5aHud13BPHq88Q1QqvIhXYcnCMgJTmvq64W4LuD1Dv /es/languages/ruby.min.js
sha384-1x+arn/A8CSZOUs83+Fa6bwOOwxzz9Fqc+OZ3YVh+yVOvF5H6uvqHDx6Bh4UNAp2 /es/languages/sql.js
sha384-e1St/oZyx5GxD71Zry3asHLIZmg/b20NgNJLUwvput4g+SZj8Rjuq+aP7pdWC2qh /es/languages/sql.min.js
sha384-5DAFEjB/sJxmunBVtQT5pIOWPcB8/sbocTrB4vhqxJ3G38RVlxXiUInHwkdik75C /languages/bash.js
sha384-3LwgJG25r+ir+HS3WNVBMDCbzxie+2TxFfg/kMUMmtWF9mxd0dEDwFS2LGd8akPz /languages/bash.min.js
sha384-+G97Y66qjmfAEeNK5AYrOqbLn/hBNX41qhtyiVW7z3Zq/1llyjGJr3gHmNi+AVKN /languages/css.js
sha384-FvHR2wIZNmDX0TgSuoOhAZRl6R5yRi26wu2/MVXDm1ZFCGJUvotj2RrvVLGC4y88 /languages/css.min.js
sha384-Qj/fL9z0ymYPbd/2AWbWGyDfM3jjtdV4Vs4KdUS6OoIbA4AahIb3PpkR8nociDdi /languages/java.js
sha384-1OHpuM8WHOF2rIMbr6F9TXndkg39R1UtQGGfiifSXWlIthYEjIVkx94n05/gy931 /languages/java.min.js
sha384-5vRFHgNazcqNV/wYjVV73vv/mmcguTGfUhutWTMzUdixVclmxoe32uu3C1i5U+b3 /languages/javascript.js
sha384-luOC72UPK+5vw8AmdAZNVaFIY8IN7MayLzqcVcnUdCCVug/rAyhze5dpWklUZW8b /languages/javascript.min.js
sha384-KHE4nh2fKFHXTz70wPh2Q72wGbHIhBIXxhb0BhVPkWtlwAbUMFS3pSLw1c6P1THK /languages/php.js
sha384-67UUzIXiBnxtse2TXo+O7wMnXvIhxA+tqtSUpHiWsRJG3S7R+ORDGARRpw0xCcND /languages/php.min.js
sha384-CNV85a+dSa4H9zFI9SB+/dBrwpbTiaUyTVrh1qnu3wnXCZJ9jk2lZqbLRugCpxeY /languages/ruby.js
sha384-3b0Nk4klTVUY3IaRgtyiENGDrNeXFvaKu5PUKyO6++pRcuFJpvwO4aZsvTycLi8D /languages/ruby.min.js
sha384-a+Iw5odyfpVyqnZLhXgjgfrTGL83SYa8BG2NpF/DmbvRloJefgDUZEDQ4j2662cz /languages/sql.js
sha384-xmw+Wgf/U9GjB60m9/I4SBh8zETMwAFC8GqSL7kCfkfgoKHDffjcnkQrNpQLc/96 /languages/sql.min.js
sha384-CbKpbgnedX1mc1MRt7B04XDV5fWxDjkX564NdX1ZYXI0RPng2r5Y2S54vAlZA4qO /highlight.js
sha384-E/ryaY86MFR0cxb0JggaKxHKRavdCIGR/2uLamB4sWcS0pvsTvmgxDfWOeWMG8hC /highlight.min.js
```

