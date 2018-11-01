const mmdb = require('maxmind');
jest.genMockFromModule('maxmind');

const reader = {
  get() {
    return true;
  }
};

mmdb.open = (file, opts, cb) => {
  if (file === 'success.test') {
    console.log('hello');
    return cb(null, reader)
  }

  return cb(new Error('some mocked error'));
};

module.exports = mmdb;
