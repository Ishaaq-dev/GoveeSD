import axiosClient from "./axios";
import { URLS } from "../constants";

export async function getDevices() {
    return await axiosClient.get(URLS.GET.DEVICES);
}