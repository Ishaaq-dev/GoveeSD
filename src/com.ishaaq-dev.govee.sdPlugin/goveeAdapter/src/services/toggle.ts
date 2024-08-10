import { CAPABILITY, URLS } from "../../constants";
import axiosClient from "../axios/axios";
import { generate } from "../capabilityFactory";
import { Device } from "../interfaces/responses";

export async function toggleDevice(value: number, device: Device) {
    const requestObject = generate(device, value, CAPABILITY.TOGGLE_ON_OFF);
    const response = await axiosClient.post(URLS.POST.DEVICE_CONTROL, requestObject);
}