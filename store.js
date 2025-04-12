const fs = require('fs');
const path = require('path');

const configDir = path.join(__dirname, 'config');
const configPath = path.join(configDir, 'config.json');

function ensureConfigFile() {
    try {
        // Make sure the config directory exists
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }

        // If the config file doesn't exist, create it with default content
        if (!fs.existsSync(configPath)) {
            const defaultConfig = { serverURL: "" };
            fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2), 'utf-8');
            console.log("✅ Created config.json with default values.");
        }
    } catch (err) {
        console.error("❌ Failed to ensure config file:", err);
    }
}

function getConfig() {
    ensureConfigFile();
    try {
        const data = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(data || '{}');
    } catch (err) {
        console.error("❌ Error reading config.json:", err);
        return { serverURL: "" };
    }
}

function setConfig(newConfig) {
    ensureConfigFile();
    try {
        const current = getConfig();
        const updated = { ...current, ...newConfig };
        fs.writeFileSync(configPath, JSON.stringify(updated, null, 2), 'utf-8');
    } catch (err) {
        console.error("❌ Error writing to config.json:", err);
    }
}

module.exports = {
    getConfig,
    setConfig,
    configPath
};
