/**
 * Created by ICOP
 */
window.EnvConfig = window.EnvConfig || {}; // 配置外部化

var ROOT_PATH = window.EnvConfig.ROOT_PATH; // 后端工程名
var URL_HOME = window.EnvConfig.URL_HOME; // 首页的链接
var ADDR = window.EnvConfig.ADDR; // 后端服务地址
var SHARE_URl = window.EnvConfig.SHARE_URl; // 共享中心服务地址
var REF_SERVER_URL = window.EnvConfig.REF_SERVER_URL; // 参照注册服务地址
var ATTACT_SERVER_URL = window.EnvConfig.ATTACT_SERVER_URL; // 附件管理服务的URL
var URL_WORKBENCH = window.EnvConfig.URL_WORKBENCH; // 获取上下文的URL

module.exports = {
    ADDR,
    URL_HOME,
    SHARE_URl,
    ROOT_PATH,
    REF_SERVER_URL,
    ATTACT_SERVER_URL,
    URL_WORKBENCH
};