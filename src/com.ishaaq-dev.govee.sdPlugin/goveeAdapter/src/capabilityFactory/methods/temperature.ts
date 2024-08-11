import { Device } from "../../interfaces/responses";
import { CAPABILITIES, createRequest } from "./constants";

export function createSetTemperatureRequest(device: Device, value: number) {
    if (value < 2000) value = 2000;
    if (value > 9000) value = 9000;
    const capability = CAPABILITIES.SET_TEMPERATURE;
    capability.value = value;
    return createRequest(device.sku, device.device, capability);
}
