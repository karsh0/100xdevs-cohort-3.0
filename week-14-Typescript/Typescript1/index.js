"use strict";
function delayedCall(fn) {
    setTimeout(fn, 2000);
}
delayedCall(() => {
    console.log("hello");
});
