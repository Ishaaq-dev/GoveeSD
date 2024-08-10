import { CAPABILITY, URLS } from "../../constants";
import axiosClient from "../axios/axios";
import { generate } from "../capabilityFactory";
import { Device } from "../interfaces/responses";

export async function setBrightness(value: number, device: Device) {
    const requestObj = generate(device, value, CAPABILITY.SET_BRIGHTNESS);
    return await axiosClient.post(URLS.POST.DEVICE_CONTROL, requestObj);
}
