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
```

#### GSAP Plugin

```js
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugins";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
```

### TO DO
JQuery and Velocity Plugins