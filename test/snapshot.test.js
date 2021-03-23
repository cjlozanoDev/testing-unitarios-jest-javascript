import { snapShotObject, href } from '../snapshot';
import geoObject from '../datos.db.json';
import enlace from '../enlace.json';

describe('Snapshot', () => {
  test('Prueba de snapshot', () => {
    expect(snapShotObject(geoObject)).toMatchSnapshot();
  });
  test('Simular UI', () => {
    expect(href(enlace)).toMatchSnapshot();
  });
});