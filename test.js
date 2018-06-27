

const Gitlab = require('./sinopia-gitlab');

const settings = {
  gitlab_server: 'https://gitlab.io-labs.de',
  gitlab_use_scope_as_group: true
};
const params = {};

const gl = Gitlab(settings, params);

gl.authenticate('Herbert', '<TOKEN>', (...params) => {
  console.log(params);

  const package = {
    gitlab: true,
    name: '@essentim/essentim_api_client'
    // name: '@cospired/react-base'
  };

  const user = {
    name: 'Herbert'
  }

  gl.allow_access(user, package, (...params) => console.log(params))
});

