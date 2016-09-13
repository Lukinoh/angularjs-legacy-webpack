import gulp from 'gulp';
import gutil from 'gulp-util';
import gitGuppy from 'git-guppy';
import fs from 'fs';

const guppy = gitGuppy(gulp);


function preCommit() {
    return gulp.task('test:run');
}

function commitMsg() {
    const regexp = /MY-[0-9]+/;

    return guppy.src('commit-msg', (file, done) => {
        fs.readFile(file, 'utf8', function (err, data) {
            if (err) {
                done('Error ' + err);
            }

            let message = data.trim();

            if (regexp.test(message) || message.startsWith('Merge')) {
                gutil.log('commit-msg: ' + message);
                done();
            } else {
                done('commit-msg must contain the ticket reference (' + message + ')');
            }
        });
    });
}

export default {
    preCommit: preCommit,
    commitMsg: commitMsg
};
