const GOVEE_URL = "https://openapi.api.govee.com";
const V1 = `${GOVEE_URL}/router/api/v1`;

export const URLS = {
  GOVEE_URL,
  GET: {
    DEVICES: `${V1}/user/devices`,
    DEVICE_STATE: `${V1}/device/state`,
  },
  POST: {
    DEVICE_CONTROL: `${V1}/device/scenes`,
  },
};
