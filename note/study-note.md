# String

## Immutable or Mutable

Immutable String may cause performance issue

> Immutable means that you can't change the content of the string once it's initialized.
>
> - In some languages (like C++), the string is mutable. That is to say, you can modify the string just like what you did in an array.
> - In some other languages (like Java), the string is immutable. This feature will bring several problems. We will illustrate the problems and solutions in the next article.

https://leetcode.com/explore/learn/card/array-and-string/203/introduction-to-string/1184/

**Javascript Case**  
[High-performance String Concatenation in JavaScript](https://www.sitepoint.com/javascript-fast-string-concatenation/)

Older Browser (Engine) may not be optimized,  
But newer Browser (Engine) may be optimized for direct string operation.

So, we should tend to use `string way` in the future. But remember it varies between different languages.

```javascript
{
  let loop = 3000000,
    s,
    str;

  // * ----------------

  s = Date.now();
  str = '';
  for (let i = loop; i > 0; i--) {
    str += 'String concatenation. ';
  }
  console.warn('string way', Date.now() - s);

  // * ----------------

  s = Date.now();
  const sArr = [];
  str = '';
  for (let i = loop; i > 0; i--) {
    sArr[i] = 'String concatenation. ';
  }
  str = sArr.join('');
  console.warn('array way', Date.now() - s);
}
```
