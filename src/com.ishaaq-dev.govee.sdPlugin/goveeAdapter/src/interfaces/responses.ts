
// instance can be an enum
interface Capability {
    type: String,
    instance: String,
    parameters: {}
}

export interface Device {
    sku: String,
    device: String,
    deviceName: String,
    type: String,
    capabilities: Capability[]
}

export interface GoveeDevices {
    code: Number,
    message: String,
    data: Device[]
}