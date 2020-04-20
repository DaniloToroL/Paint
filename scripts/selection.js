const selection = new Selection({

    // Class for the selection-area-element
    class: 'selection-area',

    // document object - if you want to use it within an embed document (or iframe)
    frame: document,

    // px, how many pixels the point should move before starting the selection (combined distance).
    // Or specifiy the threshold for each axis by passing an object like {x: <number>, y: <number>}.
    startThreshold: 10,

    // Disable the selection functionality for touch devices
    disableTouch: false,

    // On which point an element should be selected.
    // Available modes are cover (cover the entire element), center (touch the center) or
    // the default mode is touch (just touching it).
    mode: 'touch',

    // Behaviour on single-click
    // Available modes are 'native' (element was mouse-event target) or 
    // 'touch' (element got touched)
    tapMode: 'native',

    // Enable single-click selection (Also disables range-selection via shift + ctrl)
    singleClick: true,

    // Query selectors from elements which can be selected
    selectables: [],

    // Query selectors for elements from where a selection can be start
    startareas: ['html'],

    // Query selectors for elements which will be used as boundaries for the selection
    boundaries: ['html'],

    // Query selector or dom node to set up container for selection-area-element
    selectionAreaContainer: 'body',

    // On scrollable areas the number on px per frame is devided by this amount.
    // Default is 10 to provide a enjoyable scroll experience.
    scrollSpeedDivider: 10,

    // Browsers handle mouse-wheel events differently, this number will be used as 
    // numerator to calculate the mount of px while scrolling manually: manualScrollSpeed / scrollSpeedDivider
    manualScrollSpeed: 750
});
