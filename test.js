const t = require('brittle')

t('passing test', t => {
  t.pass('okay')
})

t.skip('failing test', t => {
  t.is(1, 1, 'ok')
  t.is(1, 2, 'oops')
  t.is(2, 2, 'yes')
})

t('passing test 2', t => {
  t.pass('okay')
})

t.skip('error test', t => {
  t.pass('okay so far')
  throw new Error('I break stuff')
})
