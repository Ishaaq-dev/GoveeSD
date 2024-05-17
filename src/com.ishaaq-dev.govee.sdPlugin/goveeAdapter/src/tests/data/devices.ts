import { Device } from "../../interfaces/responses";

enum DEVICE_NAMES {
  BOOKSHELF_LAMP = "Saaqy’s bookshelf lamp",
  DESK_LIGHTS = "Saaqy’s desk lights",
  HEATER = "Blobby’s heater",
}

export enum DEVICE_ADDRESSES {
  BOOKSHELF_LAMP = "XX:XX:XX:XX:XX:XX:XX:01",
  DESK_LIGHTS = "XX:XX:XX:XX:XX:XX:XX:02",
  HEATER = "XX:XX:XX:XX:XX:XX:XX:03",
}

enum DEVICE_SKUs {
  BOOKSHELF_LAMP = "H6072",
  DESK_LIGHTS = "H6046",
  HEATER = "H713C",
}

enum DEVICE_TYPES {
  BOOKSHELF_LAMP = "devices.types.light",
  DESK_LIGHTS = "devices.types.light",
  HEATER = "devices.types.heater",
}

function getDeviceDetails() {
  const devices: {
    [key: string]: { name: string; address: string; sku: string; type: string };
  } = {};
  Object.keys(DEVICE_NAMES).forEach((deviceName) => {
    const enumKey = deviceName as keyof typeof DEVICE_NAMES;
    devices[deviceName] = {
      name: DEVICE_NAMES[enumKey],
      address: DEVICE_ADDRESSES[enumKey],
      sku: DEVICE_SKUs[enumKey],
      type: DEVICE_TYPES[enumKey],
    };
  });
  return devices;
}

export const DEVICES = getDeviceDetails();

export function getDevice(deviceAddress: DEVICE_ADDRESSES): Device {
  switch (deviceAddress) {
    case DEVICE_ADDRESSES.BOOKSHELF_LAMP:
      return {
        sku: DEVICES.BOOKSHELF_LAMP.sku,
        device: DEVICES.BOOKSHELF_LAMP.address,
        deviceName: DEVICES.BOOKSHELF_LAMP.name,
        type: DEVICES.BOOKSHELF_LAMP.type,
        capabilities: [
          {
            type: "devices.capabilities.on_off",
            instance: "powerSwitch",
            parameters: {
              dataType: "ENUM",
              options: [
                {
                  name: "on",
                  value: 1,
                },
                {
                  name: "off",
                  value: 0,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.toggle",
            instance: "gradientToggle",
            parameters: {
              dataType: "ENUM",
              options: [
                {
                  name: "on",
                  value: 1,
                },
                {
                  name: "off",
                  value: 0,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.range",
            instance: "brightness",
            parameters: {
              unit: "unit.percent",
              dataType: "INTEGER",
              range: {
                min: 1,
                max: 100,
                precision: 1,
              },
            },
          },
          {
            type: "devices.capabilities.segment_color_setting",
            instance: "segmentedBrightness",
            parameters: {
              dataType: "STRUCT",
              fields: [
                {
                  fieldName: "segment",
                  size: {
                    min: 1,
                    max: 8,
                  },
                  dataType: "Array",
                  elementRange: {
                    min: 0,
                    max: 14,
                  },
                  elementType: "INTEGER",
                  required: true,
                },
                {
                  fieldName: "brightness",
                  dataType: "INTEGER",
                  range: {
                    min: 0,
                    max: 100,
                    precision: 1,
                  },
                  required: true,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.segment_color_setting",
            instance: "segmentedColorRgb",
            parameters: {
              dataType: "STRUCT",
              fields: [
                {
                  fieldName: "segment",
                  size: {
                    min: 1,
                    max: 8,
                  },
                  dataType: "Array",
                  elementRange: {
                    min: 0,
                    max: 14,
                  },
                  elementType: "INTEGER",
                  required: true,
                },
                {
                  fieldName: "rgb",
                  dataType: "INTEGER",
                  range: {
                    min: 0,
                    max: 16777215,
                    precision: 1,
                  },
                  required: true,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.color_setting",
            instance: "colorRgb",
            parameters: {
              dataType: "INTEGER",
              range: {
                min: 0,
                max: 16777215,
                precision: 1,
              },
            },
          },
          {
            type: "devices.capabilities.color_setting",
            instance: "colorTemperatureK",
            parameters: {
              dataType: "INTEGER",
              range: {
                min: 2000,
                max: 9000,
                precision: 1,
              },
            },
          },
          {
            type: "devices.capabilities.dynamic_scene",
            instance: "lightScene",
            parameters: {
              dataType: "ENUM",
              options: [],
            },
          },
          {
            type: "devices.capabilities.music_setting",
            instance: "musicMode",
            parameters: {
              dataType: "STRUCT",
              fields: [
                {
                  fieldName: "musicMode",
                  dataType: "ENUM",
                  options: [
                    {
                      name: "Energic",
                      value: 0,
                    },
                    {
                      name: "Dynamic",
                      value: 1,
                    },
                    {
                      name: "Calm",
                      value: 2,
                    },
                    {
                      name: "Bounce",
                      value: 3,
                    },
                    {
                      name: "Hopping",
                      value: 4,
                    },
                    {
                      name: "Strike",
                      value: 5,
                    },
                    {
                      name: "Vibrate",
                      value: 6,
                    },
                    {
                      name: "Skittles",
                      value: 7,
                    },
                    {
                      name: "Torch",
                      value: 8,
                    },
                    {
                      name: "CandyCrush",
                      value: 9,
                    },
                    {
                      name: "Fusion",
                      value: 10,
                    },
                    {
                      name: "Luminous",
                      value: 11,
                    },
                    {
                      name: "Separation",
                      value: 12,
                    },
                  ],
                  required: true,
                },
                {
                  unit: "unit.percent",
                  fieldName: "sensitivity",
                  dataType: "INTEGER",
                  range: {
                    min: 0,
                    max: 100,
                    precision: 1,
                  },
                  required: true,
                },
                {
                  fieldName: "autoColor",
                  dataType: "ENUM",
                  options: [
                    {
                      name: "on",
                      value: 1,
                    },
                    {
                      name: "off",
                      value: 0,
                    },
                  ],
                  required: false,
                },
                {
                  fieldName: "rgb",
                  dataType: "INTEGER",
                  range: {
                    min: 0,
                    max: 16777215,
                    precision: 1,
                  },
                  required: false,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.dynamic_scene",
            instance: "diyScene",
            parameters: {
              dataType: "ENUM",
              options: [],
            },
          },
          {
            type: "devices.capabilities.dynamic_scene",
            instance: "snapshot",
            parameters: {
              dataType: "ENUM",
              options: [],
            },
          },
          {
            type: "devices.capabilities.toggle",
            instance: "dreamViewToggle",
            parameters: {
              dataType: "ENUM",
              options: [
                {
                  name: "on",
                  value: 1,
                },
                {
                  name: "off",
                  value: 0,
                },
              ],
            },
          },
        ],
      };
    case DEVICE_ADDRESSES.DESK_LIGHTS:
      return {
        sku: DEVICES.DESK_LIGHTS.sku,
        device: DEVICES.DESK_LIGHTS.address,
        deviceName: DEVICES.DESK_LIGHTS.name,
        type: DEVICES.DESK_LIGHTS.type,
        capabilities: [
          {
            type: "devices.capabilities.on_off",
            instance: "powerSwitch",
            parameters: {
              dataType: "ENUM",
              options: [
                {
                  name: "on",
                  value: 1,
                },
                {
                  name: "off",
                  value: 0,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.toggle",
            instance: "gradientToggle",
            parameters: {
              dataType: "ENUM",
              options: [
                {
                  name: "on",
                  value: 1,
                },
                {
                  name: "off",
                  value: 0,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.range",
            instance: "brightness",
            parameters: {
              unit: "unit.percent",
              dataType: "INTEGER",
              range: {
                min: 1,
                max: 100,
                precision: 1,
              },
            },
          },
          {
            type: "devices.capabilities.segment_color_setting",
            instance: "segmentedBrightness",
            parameters: {
              dataType: "STRUCT",
              fields: [
                {
                  fieldName: "segment",
                  size: {
                    min: 1,
                    max: 15,
                  },
                  dataType: "Array",
                  elementRange: {
                    min: 0,
                    max: 14,
                  },
                  elementType: "INTEGER",
                  required: true,
                },
                {
                  fieldName: "brightness",
                  dataType: "INTEGER",
                  range: {
                    min: 0,
                    max: 100,
                    precision: 1,
                  },
                  required: true,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.segment_color_setting",
            instance: "segmentedColorRgb",
            parameters: {
              dataType: "STRUCT",
              fields: [
                {
                  fieldName: "segment",
                  size: {
                    min: 1,
                    max: 15,
                  },
                  dataType: "Array",
                  elementRange: {
                    min: 0,
                    max: 14,
                  },
                  elementType: "INTEGER",
                  required: true,
                },
                {
                  fieldName: "rgb",
                  dataType: "INTEGER",
                  range: {
                    min: 0,
                    max: 16777215,
                    precision: 1,
                  },
                  required: true,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.color_setting",
            instance: "colorRgb",
            parameters: {
              dataType: "INTEGER",
              range: {
                min: 0,
                max: 16777215,
                precision: 1,
              },
            },
          },
          {
            type: "devices.capabilities.color_setting",
            instance: "colorTemperatureK",
            parameters: {
              dataType: "INTEGER",
              range: {
                min: 2000,
                max: 9000,
                precision: 1,
              },
            },
          },
          {
            type: "devices.capabilities.dynamic_scene",
            instance: "lightScene",
            parameters: {
              dataType: "ENUM",
              options: [],
            },
          },
          {
            type: "devices.capabilities.music_setting",
            instance: "musicMode",
            parameters: {
              dataType: "STRUCT",
              fields: [
                {
                  fieldName: "musicMode",
                  dataType: "ENUM",
                  options: [
                    {
                      name: "Vivid",
                      value: 1,
                    },
                    {
                      name: "Rhythm",
                      value: 2,
                    },
                    {
                      name: "Strike",
                      value: 3,
                    },
                    {
                      name: "Vibrate",
                      value: 4,
                    },
                    {
                      name: "Beat",
                      value: 5,
                    },
                    {
                      name: "Torch",
                      value: 6,
                    },
                    {
                      name: "RainbowCircle",
                      value: 7,
                    },
                    {
                      name: "Shiny",
                      value: 8,
                    },
                  ],
                  required: true,
                },
                {
                  unit: "unit.percent",
                  fieldName: "sensitivity",
                  dataType: "INTEGER",
                  range: {
                    min: 0,
                    max: 100,
                    precision: 1,
                  },
                  required: true,
                },
                {
                  fieldName: "autoColor",
                  dataType: "ENUM",
                  options: [
                    {
                      name: "on",
                      value: 1,
                    },
                    {
                      name: "off",
                      value: 0,
                    },
                  ],
                  required: false,
                },
                {
                  fieldName: "rgb",
                  dataType: "INTEGER",
                  range: {
                    min: 0,
                    max: 16777215,
                    precision: 1,
                  },
                  required: false,
                },
              ],
            },
          },
          {
            type: "devices.capabilities.dynamic_scene",
            instance: "diyScene",
            parameters: {
              dataType: "ENUM",
              options: [],
            },
          },
          {
            type: "devices.capabilities.dynamic_scene",
            instance: "snapshot",
            parameters: {
              dataType: "ENUM",
              options: [],
            },
          },
        ],
      };
    case DEVICE_ADDRESSES.HEATER:
      return {
        sku: DEVICES.HEATER.sku,
        device: DEVICES.HEATER.address,
        deviceName: DEVICES.HEATER.name,
        type: DEVICES.HEATER.type,
        capabilities: [
            {
                "type": "devices.capabilities.on_off",
                "instance": "powerSwitch",
                "parameters": {
                    "dataType": "ENUM",
                    "options": [
                        {
                            "name": "on",
                            "value": 1
                        },
                        {
                            "name": "off",
                            "value": 0
                        }
                    ]
                }
            },
            {
                "type": "devices.capabilities.temperature_setting",
                "instance": "targetTemperature",
                "parameters": {
                    "dataType": "STRUCT",
                    "fields": [
                        {
                            "fieldName": "autoStop",
                            "defaultValue": 0,
                            "dataType": "ENUM",
                            "options": [
                                {
                                    "name": "Auto Stop",
                                    "value": 1
                                },
                                {
                                    "name": "Maintain",
                                    "value": 0
                                }
                            ],
                            "required": false
                        },
                        {
                            "fieldName": "temperature",
                            "dataType": "INTEGER",
                            "range": {
                                "min": 5,
                                "max": 30,
                                "precision": 1
                            },
                            "required": true
                        },
                        {
                            "fieldName": "unit",
                            "defaultValue": "Celsius",
                            "dataType": "ENUM",
                            "options": [
                                {
                                    "name": "Celsius",
                                    "value": "Celsius"
                                },
                                {
                                    "name": "Fahrenheit",
                                    "value": "Fahrenheit"
                                }
                            ],
                            "required": true
                        }
                    ]
                }
            },
            {
                "type": "devices.capabilities.property",
                "instance": "sensorTemperature"
            },
            {
                "type": "devices.capabilities.work_mode",
                "instance": "workMode",
                "parameters": {
                    "dataType": "STRUCT",
                    "fields": [
                        {
                            "fieldName": "workMode",
                            "dataType": "ENUM",
                            "options": [
                                {
                                    "name": "gearMode",
                                    "value": 1
                                },
                                {
                                    "name": "Fan",
                                    "value": 9
                                },
                                {
                                    "name": "Auto",
                                    "value": 3
                                }
                            ],
                            "required": true
                        },
                        {
                            "fieldName": "modeValue",
                            "dataType": "ENUM",
                            "options": [
                                {
                                    "name": "gearMode",
                                    "options": [
                                        {
                                            "name": "Low",
                                            "value": 1
                                        },
                                        {
                                            "name": "Medium",
                                            "value": 2
                                        },
                                        {
                                            "name": "High",
                                            "value": 3
                                        }
                                    ]
                                },
                                {
                                    "defaultValue": 0,
                                    "name": "Fan"
                                },
                                {
                                    "defaultValue": 22,
                                    "name": "Auto"
                                }
                            ],
                            "required": true
                        }
                    ]
                }
            }
        ],
      };
    default:
      throw new Error(`Incorrect deviceAddress passed: ${deviceAddress}`);
  }
}

export function getDevicesResponse() {
  return {
    code: 200,
    message: "success",
    data: [
      getDevice(DEVICE_ADDRESSES.BOOKSHELF_LAMP),
      getDevice(DEVICE_ADDRESSES.DESK_LIGHTS),
      getDevice(DEVICE_ADDRESSES.HEATER),
    ],
  };
}

export function getDevices() {
    return getDevicesResponse().data;
}
