# ScrollMagic Plugins
### An ES6 module to use native scrollmagic plugins

```
npm install --save scrollmagic-plugins
```

or

```
yarn add scrollmagic-plugins
```

### Usage 
#### Indicator Plugin

```js
import * as ScrollMagic from "scrollmagic";
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";

ScrollMagicPluginIndicator(ScrollMagic);

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: "#my-trigger" })
  .addIndicators({ name: "My Indicator" })
  .setClassToggle("#my-trigger", "hidden")
  .addTo(controller);
```

#### GSAP Plugin

```js
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugins";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: "#my-trigger" })
  .setTween("#my-trigger", 0.5, { opacity: 0 })
  .addTo(controller);
```

#### Velocity Plugin

```js
import * as ScrollMagic from "scrollmagic";
import Velocity from "velocity-animate";
import { ScrollMagicPluginVelocity } from "scrollmagic-plugins";

ScrollMagicPluginGsap(ScrollMagic, Velocity);

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: "#my-trigger" })
  .setVelocity("#my-trigger", { opacity: 0 }, { duration: 500 })
  .addTo(controller);
```

#### jQuery Plugin

```js
import * as ScrollMagic from "scrollmagic";
import $ from "jquery";
import { ScrollMagicPluginJQuery} from "scrollmagic-plugins";

ScrollMagicPluginJQuery(ScrollMagic, $);

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({ triggerElement: $("#my-trigger") })
  .setClassToggle($("#my-trigger"), "hidden")
  .addTo(controller);
```