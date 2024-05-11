/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('com.ishaaq-dev.govee.action');

const PREFIX = 'SAAQY :: app.js ::';

/**
 * The first event fired when Stream Deck starts
 */
$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Stream Deck connected!');
	console.log(myAction);
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	console.log(`${PREFIX} Key Press UP Detected`);
	console.log({ action, context, device, event, payload })
});

myAction.onKeyDown(({ action, context, device, event, payload }) => {
	console.log(`${PREFIX} Key Press DOWN Detected`);
	console.log({ action, context, device, event, payload })
});

myAction.onDialRotate(({ action, context, device, event, payload }) => {
	console.log(`${PREFIX} Dial Rotation Detected`);
	console.log({ action, context, device, event, payload });
});

myAction.onDialDown(({ action, context, device, event, payload }) => {
	console.log(`${PREFIX} Dial Press DOWN Detected`);
	console.log({ action, context, device, event, payload });
});

myAction.onDialUp(({ action, context, device, event, payload }) => {
	console.log(`${PREFIX} Dial Press UP Detected`);
	console.log({ action, context, device, event, payload });
});

myAction.onTouchTap(({ action, context, device, event, payload }) => {
	console.log(`${PREFIX} Touch Tap Detected`);
	console.log({ action, context, device, event, payload });
});