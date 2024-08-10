import { CAPABILITY } from "../../constants";
import { generate } from "../capabilityFactory";
import { Device } from "../interfaces/responses";

export function toggleDevice(value: number, device: Device) {
    const requestObject = generate(device, value, CAPABILITY.TOGGLE_ON_OFF);
}