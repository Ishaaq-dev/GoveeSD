// instance can be an enum
interface Capability {
  type: string;
  instance: string;
  parameters?: {};
}

export interface Device {
  sku: string;
  device: string;
  deviceName: string;
  type: string;
  capabilities: Capability[];
}

export interface GoveeDevices {
  code: Number;
  message: string;
  data: Device[];
}
