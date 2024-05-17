import axiosClient from "../axios/axios";
import { URLS } from "../../constants";
import { GoveeDevices, Device } from "../interfaces/responses";

const LOG_PREFIX = "GoveeAdapter :: services :: devices ::";

export async function getDevices(): Promise<Device[]> {
  const response = await axiosClient.get<GoveeDevices>(URLS.GET.DEVICES);
  if (response.status === 200) return response.data.data;
  else {
    console.error(`Failure in getDevices() :: ${response.status}`, response);
    throw new Error(`Failure in ${LOG_PREFIX} getDevices()`);
  }
}

export async function getDeviceDetails(
  deviceAddress: string,
  deviceList: Device[] = [],
): Promise<Device | null> {
  const devices = deviceList ?? (await getDevices());
  const deviceDetail = devices.find(
    (deviceObj) =>
      deviceObj.device.toUpperCase() === deviceAddress.toUpperCase(),
  );
  return deviceDetail ?? null;
}
