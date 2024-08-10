export const CAPABILITIES = {
    TOGGLE_ON_OFF: createCapability('devices.capabilities.on_off', 'powerSwitch'),
    SET_BRIGHTNESS: createCapability('devices.capabilities.range', 'brightness')
}

function createCapability(type: string, instance: string) {
    return {
        type,
        instance,
        value: 0
    }
}

export function createRequest(sku: string, device: string, capability: {type: string, instance: string, value: string | number}) {
    if (!sku || !device || !capability)
        throw new Error(`createRequest method must have all arguments`);
    return {
        requestId: "uuid",
        payload: {
            sku,
            device,
            capability
        }
    }
}
