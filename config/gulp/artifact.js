import gulp from 'gulp';
import awspublish from 'gulp-awspublish';
import yargs from 'yargs';
import moment from 'moment';
import rename from 'gulp-rename';
import path from 'path';
import _ from 'lodash';

const argv = yargs.argv;


// gulp push:artifact --project-name myProjectName --bucket myBucket --build-number 210
let publisher;
gulp.task('push:artifact',
    gulp.series(
        done => {
            if (!argv.projectName) {
                return done('Project name unspecified!');
            }

            if (!argv.bucket) {
                return done('Bucket unspecified!');
            }

            // Specify publisher
            publisher = awspublish.create({
                region: argv.region || 'eu-central-1',
                params: {
                    Bucket: argv.bucket
                }
            });

            return done();
        },
        gulp.parallel(
            () => {
                return gulp.src('./build/assets/**/*')
                           .pipe(saveTo('assets'))
                           .pipe(publisher.publish())
                           .pipe(awspublish.reporter());
            },
            () => {
                return gulp.src(['./build/index.html', './build/*.css', './build/*.js', '!./build/*Style*.bundle.js'])
                           .pipe(saveTo(''))
                           .pipe(publisher.publish())
                           .pipe(awspublish.reporter());
            })
    ));


function saveTo(awsPath) {
    return rename(filePath => {
        filePath.dirname = path.join(argv.projectName, getBuildName(), awsPath, filePath.dirname);
    });
}


function getBuildName() {
    const hoursInSeconds = moment.duration(moment().hours(), 'hours').asSeconds();
    const minutesInSeconds = moment.duration(moment().minutes(), 'minutes').asSeconds();
    const seconds = moment().seconds();
    const buildNumber = hoursInSeconds + minutesInSeconds + seconds;

    return moment().format('YYYY.MM.DD') + '-b' + buildNumber;
}