// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Check if assetExts exists and create an array if necessary
if (!defaultConfig.resolver.assetExts) {
    defaultConfig.resolver.assetExts = [];
}

defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
