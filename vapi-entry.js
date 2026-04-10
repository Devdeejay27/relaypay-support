import * as VapiModule from '@vapi-ai/web';
const VapiClass = VapiModule.default || VapiModule.Vapi || VapiModule;
window.VapiClass = VapiClass;
console.log('VapiModule keys:', Object.keys(VapiModule));
console.log('VapiClass set to:', VapiClass);