// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  test('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    test('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    test('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid("4083952015263")).toBe(true);
    });
    test('debería retornar false para "4083952015268"', () => {
      expect(validator.isValid("4083952015268")).toBe(false);
    });

  });

  describe('validator.maskify', () => {
    test('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });
    test('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe("############5616");
    });
    test('Debería retornar "616" para "616"', () => {
      expect(validator.maskify("616")).toBe("616");
    });
    test('Debería retornar "1" para "1"', () => {
      expect(validator.maskify("1")).toBe("1");
    });

  });
});
