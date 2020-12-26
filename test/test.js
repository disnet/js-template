import test from 'ava';
import main from '../src/index';

test('it begins', t => {
  t.deepEqual(main(), {
    status: 'ready',
  });
});
