const math = require("./math");
const stringUtils = require("./stringUtils");

describe("Math functions", () => {
  test("soma funciona", () => {
    expect(math.soma(2, 3)).toBe(5);
  });

  test("subtrai funciona", () => {
    expect(math.subtrai(5, 2)).toBe(3);
  });

  test("multiplica funciona", () => {
    expect(math.multiplica(3, 4)).toBe(12);
  });

  test("divide funciona", () => {
    expect(math.divide(10, 2)).toBe(5);
  });

  test("divide por zero lança erro", () => {
    expect(() => math.divide(5, 0)).toThrow("Divisão por zero");
  });

  test("media calcula corretamente", () => {
    expect(math.media([2, 4, 6])).toBe(4);
  });

  test("media de array vazio retorna 0", () => {
    expect(math.media([])).toBe(0);
  });
});

describe("String utils", () => {
  test("capitalize funciona", () => {
    expect(stringUtils.capitalize("hello")).toBe("Hello");
  });

  test("capitalize vazio retorna vazio", () => {
    expect(stringUtils.capitalize("")).toBe("");
  });

  test("reverse funciona", () => {
    expect(stringUtils.reverse("abc")).toBe("cba");
  });

  test("isPalindrome reconhece palíndromo", () => {
    expect(stringUtils.isPalindrome("Ana")).toBe(true);
  });

  test("isPalindrome detecta não-palíndromo", () => {
    expect(stringUtils.isPalindrome("ChatGPT")).toBe(false);
  });
});
