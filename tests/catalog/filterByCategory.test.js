const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", ()=>{
    expect(filterByCategory(products,'all').map((p)=>p.id)).toEqual([1, 2, 3, 4, 5, 6])
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
    expect(filterByCategory(products, undefined).map((p)=>p.id)).toEqual([1, 2, 3, 4, 5, 6])
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
    expect(filterByCategory(products, '').map((p)=>p.id)).toEqual([1, 2, 3, 4, 5, 6])
  });

  test("'electronics' возвращает товары с ID [1, 2]", ()=>{
    expect(filterByCategory(products, 'electronics').map((p)=>p.id)).toEqual([1, 2])
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(filterByCategory(products, "books").map((p) => p.id)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const catalog = [...products];
    expect(filterByCategory(catalog, "home").map((p) => p.id)).toEqual([4, 5]);
  }); 

  test("'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, "clothes")).toHaveLength(0);
  });

  test("'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, "toys")).toHaveLength(0);
  });

  test("'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, "sports")).toHaveLength(0);
  });
});