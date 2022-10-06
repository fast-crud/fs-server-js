import { Registry } from './registry';
import { Plugin } from './d';
export class CertdPluginContextImpl {
  registerMap = new Map<string, Registry>();

  getPlugin(type, name) {
    const register = this.registerMap[type];
    if (register == null) {
      return null;
    }
    return register.get(name);
  }

  register(pluginType: string, plugin: Plugin) {
    let register = this.registerMap[pluginType];
    if (register == null) {
      this.registerMap[pluginType] = register = new Registry();
    }
    register.install(plugin);
  }

  getRegistry(pluginType: string) {
    return this.registerMap[pluginType];
  }
}

export const CertdPluginContext = new CertdPluginContextImpl();
