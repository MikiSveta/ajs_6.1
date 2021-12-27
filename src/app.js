export default function orderByProps(obj, order) {
  const arr = [];
  const firstPart = [];
  const secondPart = [];

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      arr.push({
        key: prop,
        value: obj[prop],
      });
    }
  }

  arr.forEach((item) => {
    if (order.includes(item.key)) {
      firstPart.push(item);
    } else {
      secondPart.push(item);
    }
  });

  secondPart.sort((a, b) => (a.key > b.key ? 1 : -1));

  const result = [...firstPart, ...secondPart];

  return result;
}
