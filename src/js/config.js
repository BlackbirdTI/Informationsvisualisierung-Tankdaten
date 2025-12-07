/**
 * Konfigurationsdatei für die Tankdaten-Visualisierung
 */

const CONFIG = {
    // API Einstellungen
    api: {
        baseUrl: '/api',
        dataEndpoint: '/data/tankdaten.json',
        refreshInterval: 60000 // 60 Sekunden
    },

    // Visualisierungs-Einstellungen
    visualization: {
        chartColors: {
            primary: '#3498db',
            secondary: '#2ecc71',
            accent: '#e74c3c',
            warning: '#f39c12',
            info: '#9b59b6'
        },
        animationDuration: 1000,
        responsive: true
    },

    // Datenformat-Einstellungen
    dataFormat: {
        dateFormat: 'DD.MM.YYYY',
        timeFormat: 'HH:mm:ss',
        decimalPlaces: 2
    },

    // Feature-Flags
    features: {
        enableExport: true,
        enableRealTimeUpdate: false,
        enableNotifications: false
    }
};

// Konfiguration als global verfügbar machen
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
