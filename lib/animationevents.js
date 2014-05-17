/*
 * AnimationEvents
 * https://github.com/HarrisSidiropoulos/animationevents
 *
 * Copyright (c) 2014 
 * Licensed under the MIT license.
 */

'use strict';

var modernizr = require("modernizrify");

var animationEndNames = {
  'WebkitAnimation': 'webkitAnimationEnd',
  'OAnimation': 'oAnimationEnd',
  'msAnimation': 'MSAnimationEnd',
  'animation': 'animationend'
};

var transitionEndNames = {
  'WebkitTransition': 'webkitTransitionEnd',
  'OTransition': 'oTransitionEnd',
  'msTransition': 'MSTransitionEnd',
  'transition': 'transitionend'
};

var animationStartNames = {
  'WebkitAnimation': 'webkitAnimationStart',
  'OAnimation': 'oAnimationStart',
  'msAnimation': 'MSAnimationStart',
  'animation': 'animationstart'
};

var transitionStartNames = {
  'WebkitTransition': 'webkitTransitionStart',
  'OTransition': 'oTransitionStart',
  'msTransition': 'MSTransitionStart',
  'transition': 'transitionstart'
};

var AnimationEvents = {
  animationEventEnd: animationEndNames[ modernizr.prefixed('animation') ],
  transitionEventEnd: transitionEndNames[ modernizr.prefixed('transition') ],
  animationEventStart: animationStartNames[ modernizr.prefixed('animation') ],
  transitionEventStart: transitionStartNames[ modernizr.prefixed('transition') ]
};

// Support commonjs wrapper, amd define and plain window.
if (typeof exports == 'object' && typeof module == 'object') {
  module.exports = AnimationEvents;
} else if (typeof define == 'function' && define.amd) {
  define(function() { return AnimationEvents; })
} else {
  window.AnimationEvents = AnimationEvents;
}