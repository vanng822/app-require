app-require
===========

customized require for app. For sharing libs and easier to require with long relative path, ie ../.., easier to restructure code.

## methods

### setup(root)
* `root` Default path, should be absolute path, if not set this will assume the current working directory


### requireLib(path)
* `path` path to lib folder, that is {path}/lib, default to root above.

### requireConfig(path)
* `path` path to config folder, that is {path}/config, default to root above.

### require(id, path)
* `id` module id/name or relative path
* `path` path to load the id above, default to root above.


## usage
Idea for application with structure as bellow

-approot/
----server.js
----/config/
----/lib/
....

