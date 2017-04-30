//
//  LineMusic.js
//  BeardedSpice
//
//  Created by Toshiki Tsuchiya on 17/04/30.
//  Released under the MIT license
//  http://opensource.org/licenses/mit-license.php
//

BSStrategy = {
  version: 1,
  displayName: "LINE MUSIC",
  accepts: {
    method: "predicateOnTab",
    format: "%K LIKE[c] '*music.line.me*'",
    args: ["URL"]
  },
  isPlaying: function () { return document.querySelector('button.play').getAttribute('data-gae') == 'play'; },
  toggle: function () { document.querySelector('button.play').click(); },
  previous: function () { document.querySelector('button.prev').click(); },
  next: function () { document.querySelector('button.next').click(); },
  pause: function () {
    var pauseButton = document.querySelector('button.pause').click();
    if (pauseButton != null) {
      pauseButton.click();
    }
  },
  trackInfo: function () {
    return {
      'track': document.querySelector('[data-view=title]').innerText,
      'artist': document.querySelector('[data-view=artist]').innerText,
      'image': document.querySelector('[data-view=thumbnail]').getAttribute('src')
    };
  }
}
