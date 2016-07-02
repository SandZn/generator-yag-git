'use strict';

const generator = require('yeoman-generator');
const pkgJsonGitRepo = require('pkg-json-git-repo');
const gitRemote = require('git-remote-protocol');

/** Yeoman generator */
module.exports = generator.Base.extend({
  constructor: function() {
    generator.Base.apply(this, arguments);
    this.desc('Yeoman generator for Git init and config.');
  },
  configuring() {
    const done = this.async();
    const spawnOpts = {
      stdio: 'pipe',
      encoding: 'utf8',
    };

    // Write .gitattributes file.
    this.copy(
      this.templatePath('gitattributes'),
      this.destinationPath('.gitattributes')
    );

    // Write .gitignore file.
    this.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );

    // Initialize empty Git repository.
    const initResult = this.spawnCommandSync('git', ['init'], spawnOpts);

    if (initResult.error) {
      this.log('Failed to init a Git repository:', initResult.error.message);
    } else if (initResult.stderr) {
      this.log('Failed to init a Git repository:', initResult.stderr.trim());
    } else {
      this.log(initResult.stdout.trim());
    }

    // Add Git remote.
    pkgJsonGitRepo(this.destinationPath('package.json'))
      .then(repoUrl => {
        const remoteUrl = gitRemote.toSSH(repoUrl);
        const spawnArgs = [
          'remote',
          'add',
          'origin',
          remoteUrl,
        ];

        const addResult = this.spawnCommandSync('git', spawnArgs, spawnOpts);

        if (addResult.error) {
          throw addResult.error;
        } else if (addResult.stderr) {
          throw Error(addResult.stderr.trim());
        }

        this.log('Added Git remote', remoteUrl);
        return done();
      })
      .catch(err => {
        this.log('Failed to add Git remote.');
        this.log(err.message);
        return done();
      });
  },
});
