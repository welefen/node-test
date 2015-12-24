function strToArray( str ) {
  var i = 0,
    len = str.length,
    arr = new Uint16Array( str.length );
  for ( ; i < len; ++i ) {
    arr[ i ] = str.charCodeAt( i );
  }
  return arr;
}

var i = 0, str = 'V8 is the coolest', arr = [];

while ( i++ < 1e6 ) {
  strToArray( str );
  if ( i % 100000 === 0 ) {
    // save a long-term reference to a random, huge object
    arr.push( new Uint16Array( 100000000 ) );
    // release references about 5% of the time
    Math.random() > 0.95 && ( arr.length = 0 );
  }
}