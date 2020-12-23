
/**************************
JS
**************************/
const varText = "styleguide!!!";

const testConsole = () => {
  console.log(varText);
}

testConsole();

/**************************
SCSS
**************************/

import '../scss/service/styleguide.scss';


/**************************
svg
**************************/

// **************************** //
// ico img
// **************************** //

// 모든 ico를 번들링 한다.
const requireIcoAll = (r) => {
  r.keys().forEach(r);
}

requireIcoAll(require.context('../images/', true, /\.ico$/));
