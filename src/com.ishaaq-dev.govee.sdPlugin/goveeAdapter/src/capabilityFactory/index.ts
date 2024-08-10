import { CAPABILITY } from "../../constants";
import { Device } from "../interfaces/responses";
import { createSetBrightnessRequest } from "./methods/brightness";
import { createToggleDeviceRequest } from "./methods/toggle";

export function generate(device: Device, value: string | number, capability: string) {
    switch (capability) {
        case CAPABILITY.TOGGLE_ON_OFF:
            return createToggleDeviceRequest(device, Number(value));
        case CAPABILITY.SET_BRIGHTNESS:
            return createSetBrightnessRequest(device, Number(value));
        default:
            throw new Error(`Capability: ${capability} not supported`);
    }
}