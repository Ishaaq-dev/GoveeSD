import { CAPABILITY, URLS } from "../../constants";
import axiosClient from "../axios/axios";
import { generate } from "../capabilityFactory";
import { Device } from "../interfaces/responses";

export async function setTemperature(value: number, device: Device) {
    const requestObject = generate(device, value, CAPABILITY.SET_TEMPERATURE);
    return await axiosClient.post(URLS.POST.DEVICE_CONTROL, requestObject);
}