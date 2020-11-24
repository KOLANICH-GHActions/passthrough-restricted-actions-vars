A simple GitHub Action passing through the vars restrictred to be used from node.js-based actions
==================================================================================================

Though now GitHub supports so called "composite" actions, that declare intention to use shell scripts explicitly, they are not exposed to certain environment variables, strictly required to do some actions, like uploading artifacts: `ACTIONS_RUNTIME_URL`, `ACTIONS_RUNTIME_TOKEN` `GITHUB_RUN_ID` and maybe some other.

More info:

* https://github.com/DavidGOrtega/gh-runner/blob/48b040fa804be4a2f43abee064b365838f94055b/src/Runner.Worker/Handlers/ContainerActionHandler.cs#L178-L185
* https://github.com/actions/toolkit/blob/4f7fb6513a355689f69f0849edeb369a4dc81729/packages/artifact/__tests__/ci-test-action/index.js


So you have 2 options:
	* either to use this action or anything like this;
	* or use a simple `node` wrapper to start the bash script. There is a template  (https://github.com/KOLANICH-GHActions/node_based_cmd_action_template) of an "Action" doing this.

The code of this action was derived from https://github.com/actions/toolkit/blob/4f7fb6513a355689f69f0849edeb369a4dc81729/packages/artifact/__tests__/ci-test-action/index.js
