import { getDevices } from "./src/services/devices";

getDevices().then((result) => console.log(result));
