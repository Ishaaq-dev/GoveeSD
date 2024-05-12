/// <reference path="../../libs/js/action.js" />
/// <reference path="../../libs/js/stream-deck.js" />

const temperatureAction = new Action('com.ishaaq-dev.govee.temperature');

const PREFIX = 'SAAQY :: Temperature ::';

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