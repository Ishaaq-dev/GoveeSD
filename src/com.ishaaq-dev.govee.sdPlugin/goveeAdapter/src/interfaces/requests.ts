interface Capability {
    type: String,
    instance: String,
    value: number
}

export interface Payload {
    sku: String,
    device: String,
    capability: Capability
}

export interface ControlDevice {
    requestId: String,
    payload: Payload
}