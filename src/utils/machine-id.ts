const { machineIdSync } = require('node-machine-id');
/**
 * 设备唯一id
 */
export const device_id = machineIdSync({ original: true });
