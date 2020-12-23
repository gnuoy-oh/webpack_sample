
/**************************
JS
**************************/
const serviceName = "cluster!!!";

const testConsole = () => {
  console.log(serviceName);
}

testConsole();

/**************************
SCSS
**************************/

import '../scss/service/cluster.scss';


// **************************** //
// svg icon
// **************************** //
// const requireSvgAll = (r) => {
//   r.keys().forEach(r);
// }

// requireSvgAll(require.context('../images/icon/', true, /\.svg$/));
// requireSvgAll(require.context('../images/icon/', true, /\.svg$/));

// **************************** //
// png img
// **************************** //

// 모든 png를 번들링 한다.
const requirePngAll = (r) => {
  r.keys().forEach(r);
}

requirePngAll(require.context('../images/', true, /\.png$/));
// requirePngAll(require.context('../images-projects/cluster/images', true, /\.png$/));

// **************************** //
// ico img
// **************************** //

// 모든 ico를 번들링 한다.
const requireIcoAll = (r) => {
  r.keys().forEach(r);
}

requireIcoAll(require.context('../images/', true, /\.ico$/));
