/* eslint-env mocha */

'use strict';

const fs = require('fs');
const path = require('path');

const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-yag-git:app', () => {
  before(done => {
    helpers
      .run(path.join(__dirname, 'app'))
      .inTmpDir(dir => {
        const pkg = {
          name: 'example',
          version: '0.0.0',
          repository: 'alefteris/generator-yag-git',
        };
        const pkgJson = JSON.stringify(pkg);
        const destPath = path.join(dir, 'package.json');
        fs.writeFileSync(destPath, pkgJson);
      })
      .on('end', done);
  });

  it('creates a .gitattributes file', () => {
    assert.file('.gitattributes');
  });

  it('creates a .gitignore file', () => {
    assert.file('.gitignore');
  });

  it('initializes a git repository', () => {
    assert.file('.git/HEAD');
  });

  it('adds a git remote', () => {
    assert.fileContent('.git/config', /\[remote "origin"\]/);
  });
});
