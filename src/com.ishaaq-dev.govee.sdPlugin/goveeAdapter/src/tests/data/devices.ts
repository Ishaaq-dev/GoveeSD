export function getDevicesResponse() {
    return {
        "code": 200,
    "message": "success",
    "data": [
        {
            "sku": "H6072",
            "device": "47:A6:CC:32:37:36:4D:25",
            "deviceName": "Saaqy’s bookshelf lamp",
            "type": "devices.types.light",
            "capabilities": [
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
                    "type": "devices.capabilities.toggle",
                    "instance": "gradientToggle",
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
                    "type": "devices.capabilities.range",
                    "instance": "brightness",
                    "parameters": {
                        "unit": "unit.percent",
                        "dataType": "INTEGER",
                        "range": {
                            "min": 1,
                            "max": 100,
                            "precision": 1
                        }
                    }
                },
                {
                    "type": "devices.capabilities.segment_color_setting",
                    "instance": "segmentedBrightness",
                    "parameters": {
                        "dataType": "STRUCT",
                        "fields": [
                            {
                                "fieldName": "segment",
                                "size": {
                                    "min": 1,
                                    "max": 8
                                },
                                "dataType": "Array",
                                "elementRange": {
                                    "min": 0,
                                    "max": 14
                                },
                                "elementType": "INTEGER",
                                "required": true
                            },
                            {
                                "fieldName": "brightness",
                                "dataType": "INTEGER",
                                "range": {
                                    "min": 0,
                                    "max": 100,
                                    "precision": 1
                                },
                                "required": true
                            }
                        ]
                    }
                },
                {
                    "type": "devices.capabilities.segment_color_setting",
                    "instance": "segmentedColorRgb",
                    "parameters": {
                        "dataType": "STRUCT",
                        "fields": [
                            {
                                "fieldName": "segment",
                                "size": {
                                    "min": 1,
                                    "max": 8
                                },
                                "dataType": "Array",
                                "elementRange": {
                                    "min": 0,
                                    "max": 14
                                },
                                "elementType": "INTEGER",
                                "required": true
                            },
                            {
                                "fieldName": "rgb",
                                "dataType": "INTEGER",
                                "range": {
                                    "min": 0,
                                    "max": 16777215,
                                    "precision": 1
                                },
                                "required": true
                            }
                        ]
                    }
                },
                {
                    "type": "devices.capabilities.color_setting",
                    "instance": "colorRgb",
                    "parameters": {
                        "dataType": "INTEGER",
                        "range": {
                            "min": 0,
                            "max": 16777215,
                            "precision": 1
                        }
                    }
                },
                {
                    "type": "devices.capabilities.color_setting",
                    "instance": "colorTemperatureK",
                    "parameters": {
                        "dataType": "INTEGER",
                        "range": {
                            "min": 2000,
                            "max": 9000,
                            "precision": 1
                        }
                    }
                },
                {
                    "type": "devices.capabilities.dynamic_scene",
                    "instance": "lightScene",
                    "parameters": {
                        "dataType": "ENUM",
                        "options": []
                    }
                },
                {
                    "type": "devices.capabilities.music_setting",
                    "instance": "musicMode",
                    "parameters": {
                        "dataType": "STRUCT",
                        "fields": [
                            {
                                "fieldName": "musicMode",
                                "dataType": "ENUM",
                                "options": [
                                    {
                                        "name": "Energic",
                                        "value": 0
                                    },
                                    {
                                        "name": "Dynamic",
                                        "value": 1
                                    },
                                    {
                                        "name": "Calm",
                                        "value": 2
                                    },
                                    {
                                        "name": "Bounce",
                                        "value": 3
                                    },
                                    {
                                        "name": "Hopping",
                                        "value": 4
                                    },
                                    {
                                        "name": "Strike",
                                        "value": 5
                                    },
                                    {
                                        "name": "Vibrate",
                                        "value": 6
                                    },
                                    {
                                        "name": "Skittles",
                                        "value": 7
                                    },
                                    {
                                        "name": "Torch",
                                        "value": 8
                                    },
                                    {
                                        "name": "CandyCrush",
                                        "value": 9
                                    },
                                    {
                                        "name": "Fusion",
                                        "value": 10
                                    },
                                    {
                                        "name": "Luminous",
                                        "value": 11
                                    },
                                    {
                                        "name": "Separation",
                                        "value": 12
                                    }
                                ],
                                "required": true
                            },
                            {
                                "unit": "unit.percent",
                                "fieldName": "sensitivity",
                                "dataType": "INTEGER",
                                "range": {
                                    "min": 0,
                                    "max": 100,
                                    "precision": 1
                                },
                                "required": true
                            },
                            {
                                "fieldName": "autoColor",
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
                                ],
                                "required": false
                            },
                            {
                                "fieldName": "rgb",
                                "dataType": "INTEGER",
                                "range": {
                                    "min": 0,
                                    "max": 16777215,
                                    "precision": 1
                                },
                                "required": false
                            }
                        ]
                    }
                },
                {
                    "type": "devices.capabilities.dynamic_scene",
                    "instance": "diyScene",
                    "parameters": {
                        "dataType": "ENUM",
                        "options": []
                    }
                },
                {
                    "type": "devices.capabilities.dynamic_scene",
                    "instance": "snapshot",
                    "parameters": {
                        "dataType": "ENUM",
                        "options": []
                    }
                },
                {
                    "type": "devices.capabilities.toggle",
                    "instance": "dreamViewToggle",
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
                }
            ]
        },
        {
            "sku": "H6046",
            "device": "C0:19:CC:37:36:39:2F:13",
            "deviceName": "Saaqy’s desk lights",
            "type": "devices.types.light",
            "capabilities": [
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
                    "type": "devices.capabilities.toggle",
                    "instance": "gradientToggle",
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
                    "type": "devices.capabilities.range",
                    "instance": "brightness",
                    "parameters": {
                        "unit": "unit.percent",
                        "dataType": "INTEGER",
                        "range": {
                            "min": 1,
                            "max": 100,
                            "precision": 1
                        }
                    }
                },
                {
                    "type": "devices.capabilities.segment_color_setting",
                    "instance": "segmentedBrightness",
                    "parameters": {
                        "dataType": "STRUCT",
                        "fields": [
                            {
                                "fieldName": "segment",
                                "size": {
                                    "min": 1,
                                    "max": 15
                                },
                                "dataType": "Array",
                                "elementRange": {
                                    "min": 0,
                                    "max": 14
                                },
                                "elementType": "INTEGER",
                                "required": true
                            },
                            {
                                "fieldName": "brightness",
                                "dataType": "INTEGER",
                                "range": {
                                    "min": 0,
                                    "max": 100,
                                    "precision": 1
                                },
                                "required": true
                            }
                        ]
                    }
                },
                {
                    "type": "devices.capabilities.segment_color_setting",
                    "instance": "segmentedColorRgb",
                    "parameters": {
                        "dataType": "STRUCT",
                        "fields": [
                            {
                                "fieldName": "segment",
                                "size": {
                                    "min": 1,
                                    "max": 15
                                },
                                "dataType": "Array",
                                "elementRange": {
                                    "min": 0,
                                    "max": 14
                                },
                                "elementType": "INTEGER",
                                "required": true
                            },
                            {
                                "fieldName": "rgb",
                                "dataType": "INTEGER",
                                "range": {
                                    "min": 0,
                                    "max": 16777215,
                                    "precision": 1
                                },
                                "required": true
                            }
                        ]
                    }
                },
                {
                    "type": "devices.capabilities.color_setting",
                    "instance": "colorRgb",
                    "parameters": {
                        "dataType": "INTEGER",
                        "range": {
                            "min": 0,
                            "max": 16777215,
                            "precision": 1
                        }
                    }
                },
                {
                    "type": "devices.capabilities.color_setting",
                    "instance": "colorTemperatureK",
                    "parameters": {
                        "dataType": "INTEGER",
                        "range": {
                            "min": 2000,
                            "max": 9000,
                            "precision": 1
                        }
                    }
                },
                {
                    "type": "devices.capabilities.dynamic_scene",
                    "instance": "lightScene",
                    "parameters": {
                        "dataType": "ENUM",
                        "options": []
                    }
                },
                {
                    "type": "devices.capabilities.music_setting",
                    "instance": "musicMode",
                    "parameters": {
                        "dataType": "STRUCT",
                        "fields": [
                            {
                                "fieldName": "musicMode",
                                "dataType": "ENUM",
                                "options": [
                                    {
                                        "name": "Vivid",
                                        "value": 1
                                    },
                                    {
                                        "name": "Rhythm",
                                        "value": 2
                                    },
                                    {
                                        "name": "Strike",
                                        "value": 3
                                    },
                                    {
                                        "name": "Vibrate",
                                        "value": 4
                                    },
                                    {
                                        "name": "Beat",
                                        "value": 5
                                    },
                                    {
                                        "name": "Torch",
                                        "value": 6
                                    },
                                    {
                                        "name": "RainbowCircle",
                                        "value": 7
                                    },
                                    {
                                        "name": "Shiny",
                                        "value": 8
                                    }
                                ],
                                "required": true
                            },
                            {
                                "unit": "unit.percent",
                                "fieldName": "sensitivity",
                                "dataType": "INTEGER",
                                "range": {
                                    "min": 0,
                                    "max": 100,
                                    "precision": 1
                                },
                                "required": true
                            },
                            {
                                "fieldName": "autoColor",
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
                                ],
                                "required": false
                            },
                            {
                                "fieldName": "rgb",
                                "dataType": "INTEGER",
                                "range": {
                                    "min": 0,
                                    "max": 16777215,
                                    "precision": 1
                                },
                                "required": false
                            }
                        ]
                    }
                },
                {
                    "type": "devices.capabilities.dynamic_scene",
                    "instance": "diyScene",
                    "parameters": {
                        "dataType": "ENUM",
                        "options": []
                    }
                },
                {
                    "type": "devices.capabilities.dynamic_scene",
                    "instance": "snapshot",
                    "parameters": {
                        "dataType": "ENUM",
                        "options": []
                    }
                }
            ]
        },
        {
            "sku": "H713C",
            "device": "23:14:D4:AD:FC:82:05:02",
            "deviceName": "Blobby’s heater",
            "type": "devices.types.heater",
            "capabilities": [
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
            ]
        }
    ]
    }
}