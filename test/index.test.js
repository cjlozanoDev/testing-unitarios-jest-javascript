import { sumar, restar, multiplicar, dividir, isFalse, isNull, isTrue, isUndefined , arrDias, arrProvincias, objExpReg, callback, ajaxGet} from '../index.js'

describe('Operaciones matemáticas', () => {
  test('Realizamos la suma', () => {
     expect(sumar(1, 1)).toBe(2)
  })
  test('Realizamos la resta', () => {
     expect(restar(1, 1)).toBe(0)
  })
  test('Realizamos la multiplicación', () => {
     expect(multiplicar(1, 1)).toBe(1)
  })
  test('Realizamos la división', () => {
     expect(dividir(1, 1)).toBe(1)
  })
})

describe('Common matchers', () => {
  const datos = {
    nombre: 'Persona 1',
    edad: 10
  }
  const datos2 = {
    nombre: 'Persona 1',
    edad: 10
  }
  test('Comprobamos que los objetos son iguales', () => {
    expect(datos).toEqual(datos2)   
  })
})

describe('Matchers numéricos', () => {
  test('Resultado menor que...', () => {
    expect(restar(5, 3)).toBeLessThan(3)
  })
  test('Resultado menor o igual que...', () => {
    expect(restar(5, 3)).toBeLessThanOrEqual(2)
  })
  test('Resultado mayor o igual que...', () => {
    expect(multiplicar(5, 2)).toBeGreaterThanOrEqual(10)
  })
  test('Resultado mayor que...', () => {
    expect(sumar(5, 5)).toBeGreaterThan(9)
  })
})

describe('Matchers Boolean, Undefined o Null', () => {
  test('Resultado true', () => {
    expect(isTrue()).toBeTruthy()
  })
  test('Resultado false', () => {
    expect(isFalse()).toBeFalsy()
  })
  test('Resultado undefined', () => {
    expect(isUndefined()).toBeUndefined()
  })
  test('Resultado null', () =>{
    expect(isNull()).toBeNull()
  })
})

describe('Matchers Arrays', () => {
  test('Madrid existe en el array provincias', () => {
    expect(arrProvincias()).toContain('Madrid')
  })
  test('Guadalajara no existe en el array provincias', () => {
    expect(arrProvincias()).not.toContain('Guadalajara')
  })
  test('El array provincias tiene 10 elementos', () => {
    expect(arrProvincias()).toHaveLength(10)
  })
})

describe('Matchers Strings', () => {
  const exp = objExpReg()
  test('Comprobamos si al respuesta es correcta', () => {
    expect(exp.responseOK).toMatch(/OK/)
  })
  test('Comprobamos si la respuesta es incorrecta', () => {
    expect(exp.responseFAIL).toMatch(/FAIL/)
  })
  test('Comprobamos si la respuesta tiene una longitud', () => {
    expect(exp.responseFAIL).toHaveLength(13)
  })
  test('Comprobamos dirección de email', () => {
    expect(exp.email).toMatch(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/)
  })
  test('Comprobamos número de teléfono',() => {
    expect(exp.telefono).toMatch(/^[9|6|7][0-9]{8}$/)
  })
})

// afterEach(() => console.log('Despues de cada prueba'));
// afterAll(() => console.log("Despues de todas las pruebas"));
// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));

describe('Asincrono - Callback', () => {
  test('Callback', done => {
    let callbackInterno = datos => {
      expect(datos).toBe('Hola mundo callback')
      done()
    }
    callback(callbackInterno)
  })
})

// describe('Asíncrono - Promise(resolve, reject', () => {
//   test('Promise- Promise(resolve, reject)', done => {
//     let url = 'http://localhost:3000/posts'
//     ajaxGet(url).then(datos => {
//       const data = [{ "id": 1, "title": "json-server", "author": "typicode" }];
//       expect(datos.length).toBeGreaterThanOrEqual(1);
//       expect(datos[0].id).toBeGreaterThanOrEqual(1);
//       expect(datos).toEqual(data);
//       done();
//     })
//   })
// })

// describe('Asíncrono usando async / await', () => {
//   test('Probando asynx / await - OK', async () => {
//     const postAPI = 'http://localhost:3000/posts'
//     const commentsAPI = 'http://localhost:3000/comments'

//     const post = await ajaxGet(postAPI)
//     const comments = await ajaxGet(commentsAPI)

//     expect(post.length).toBeGreaterThanOrEqual(1);
//     expect(post[0].id).toBe(1);
//     expect(comments.length).toBeGreaterThanOrEqual(1);
//     expect(comments[0].body).toBe("some comment");
//   })
//   test('Probando async / await - FAIL', async () => {
//     const failAPI = 'http://localhost:3000/fail';
//     await expect(ajaxGet(failAPI)).rejects.toEqual('Not Found');
//   });
//   test('async / await - rejects & resolves', async () => {
//     await expect(Promise.resolve({ response: 'Correcto' })).resolves.toEqual({ response: 'Correcto' });
//     await expect(Promise.reject({ errorCode: 500, errorText: 'Not ready' })).rejects.toEqual({ errorCode: 500, errorText: 'Not ready' });
//   });
// })