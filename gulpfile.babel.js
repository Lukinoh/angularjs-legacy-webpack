import gulp from 'gulp';
import HubRegistry from 'gulp-hub';
import gitHooks from './config/gulp/git-hooks';

///* load some files into the registry */
const hub = new HubRegistry(['config/gulp/artifact.js', 'config/gulp/build.js', 'config/gulp/serve.js', 'config/gulp/test.js']);

// Cannot update these commits from a file like the other because otherwise a commit-msg or pre-commit happend


/* tell gulp to use the tasks just loaded */
gulp.registry(hub);

hub.set('pre-commit', gitHooks.preCommit());
hub.set('commit-msg', gitHooks.commitMsg());