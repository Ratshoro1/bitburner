var serversSeen = 0;

function spider() {
  // Return an array of all identifiable servers

  // Create a serversSeen array, containing only 'home' for now
  serversSeen = ['home'];

  // For every server we've seen so far, do a scan
  for (i = 0; i < serversSeen.length; i++) {
    thisScan = scan(serversSeen[i]);
    // Loop through results of the scan, and add any new servers
    for (j = 0; j < thisScan.length; j++) {
      // If this server isn't in serversSeen, add it
      if (thisScan[j].indexOf('auto') == -1) {
        if (serversSeen.indexOf(thisScan[j]) === -1) {
          serversSeen.push(thisScan[j]);
        }
      }
    }
  }
  tprint(serversSeen);
  return serversSeen;
}

var serversSeen = spider();
write('servers.txt', serversSeen.join(), 'w'); //Default: Writes the array with commas as separators. e.g. "1,2,3"
