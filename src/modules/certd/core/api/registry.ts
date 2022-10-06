import { Plugin } from './d';

export class Registry {
  collection;
  constructor() {
    this.collection = {};
  }

  install(plugin: Plugin) {
    if (plugin == null) {
      return;
    }
    if (this.collection == null) {
      this.collection = {};
    }
    const define = plugin.define();
    const defineName = define.name;

    this.register(defineName, {
      plugin,
      define,
      type: defineName,
    });
  }

  register(key, value) {
    if (!key || value == null) {
      return;
    }
    this.collection[key] = value;
  }

  get(name) {
    if (!name) {
      throw new Error('插件名称不能为空');
    }

    if (!this.collection) {
      this.collection = {};
    }
    const plugin = this.collection[name];
    if (!plugin) {
      throw new Error(`插件${name}还未注册`);
    }
    return plugin;
  }

  getCollection() {
    return this.collection;
  }
}
