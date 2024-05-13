import { getDevices } from "./src/devices";

getDevices().then((result) => console.log(result.data.data));