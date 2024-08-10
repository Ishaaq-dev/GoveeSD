import { Device } from "../../interfaces/responses";
import { CAPABILITIES, createRequest } from "./constants";

export function createToggleDeviceRequest(device: Device, value: number) {
    const capability = CAPABILITIES.TOGGLE_ON_OFF;
    capability.value = value;
    return createRequest(device.sku, device.device, capability);
}
