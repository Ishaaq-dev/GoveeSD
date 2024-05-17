import { getDeviceDetails } from "../devices";
import * as devices from '../devices';
import { getDevicesResponse } from "./data/devices";

const getDevicesRes = getDevicesResponse();

jest.mock('../devices', () => ({
    ...jest.requireActual('../devices'),
    getDevices: jest.fn().mockReturnValue(getDevicesRes)
}));

describe('getDeviceDetails()', () => {
    it('returns devices in the correct format', () => {

    });
});