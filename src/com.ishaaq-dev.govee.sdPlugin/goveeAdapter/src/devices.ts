import axiosClient from "./axios/axios";
import { URLS } from "../constants";
import { GoveeDevices } from "./interfaces/receiving";

export async function getDevices() {
    const response = await axiosClient.get<GoveeDevices>(URLS.GET.DEVICES);
    if (response.status === 200) return response.data;
    else throw new Error('Failure in getDevices');
}

export async function getDeviceDetails(deviceName: string) {
    const devices = (await getDevices()).data;
    
}