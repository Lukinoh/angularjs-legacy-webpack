export default class ImageSelectorRequireController {
  constructor(logger) {
    'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.
    this.logger = logger;
    this.letter = 'S'; // default

    this.activate();
  }

  activate() {
    this.logger.info('Image Selector Controller Activated !', {}, 'Status');
  }

  // Solution 1
  // With this solution you do not have to import all images before runtime.
  loadImage(letter) {
    return require('assets/images/' + letter + '.png');
  }
}

