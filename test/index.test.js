//example.test.js
import myFun from "./../myFun.js"

describe('Ok', () => {
    test('Target in Array', () => {
      // Given
      const myArr = [1,2,3,7]
      const target = 3
  
      // When
      const result = myFun(myArr, target);
  
      // Then
      expect(result).toEqual(2);
    });
  });


  describe('Nok', () => {
    test('Target Not in Array', () => {
      // Given
      const myArr = [0,2,3,7]
      const target = 1
  
      // When
      const result = myFun(myArr, target);
  
      // Then
      expect(result).toEqual(-1);
    });
  });

  describe('Nok', () => {
    test('Array Empty', () => {
      // Given
      const myArr = []
      const target = 1
  
      // When
      const result = myFun(myArr, target);
  
      // Then
      expect(result).toEqual(-1);
    });
  });