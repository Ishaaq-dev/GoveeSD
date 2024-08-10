import { Device } from "../../interfaces/responses";
import { CAPABILITIES, createRequest } from "./constants";

export function createSetBrightnessRequest(device: Device, value: number) {
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    const capability = CAPABILITIES.SET_BRIGHTNESS;
    capability.value = value;
    return createRequest(device.sku, device.device, capability);
}