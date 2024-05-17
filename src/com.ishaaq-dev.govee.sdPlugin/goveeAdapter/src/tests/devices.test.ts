import { getDeviceDetails } from "../services/devices";
import { getDevices } from "./data/devices";
import { getDevice, DEVICE_ADDRESSES } from "./data/devices";

describe("getDeviceDetails()", () => {
  it("returns devices in the correct format", async () => {
    const input = `xx:xx:xx:xx:XX:XX:XX:01`;
    const deviceList = getDevices();
    const expectedResponse = getDevice(DEVICE_ADDRESSES.BOOKSHELF_LAMP);
    const response = await getDeviceDetails(input, deviceList);

    if (!response) throw new Error("response is null when is should not be");

    expect(response.sku).toEqual(expectedResponse.sku);
    expect(response.deviceName).toEqual(expectedResponse.deviceName);
    expect(response.device).toEqual(expectedResponse.device);
  });
});
