/**
 * Main - Hauptdatei für die Tankdaten-Visualisierung
 */

// Globale Instanzen
let dataLoader;
let visualization;

/**
 * Initialisiert die Anwendung
 */
function initApp() {
    console.log('Initialisiere Anwendung...');
    
    // Instanzen erstellen
    dataLoader = new DataLoader();
    visualization = new Visualization();
    
    // Event Listeners registrieren
    registerEventListeners();
    
    // Initiale Visualisierung
    initializeVisualizations();
    
    console.log('Anwendung erfolgreich initialisiert');
}

/**
 * Registriert alle Event Listeners
 */
function registerEventListeners() {
    // Daten laden Button
    const loadDataBtn = document.getElementById('load-data-btn');
    if (loadDataBtn) {
        loadDataBtn.addEventListener('click', handleLoadData);
    }
    
    // Export Button
    const exportBtn = document.getElementById('export-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', handleExport);
    }
    
    // Aktualisieren Button
    const refreshBtn = document.getElementById('refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', handleRefresh);
    }
}

/**
 * Initialisiert die Visualisierungen mit Beispieldaten
 */
function initializeVisualizations() {
    // Erstelle Beispiel-Visualisierungen
    const sampleData = generateSampleData();
    
    visualization.init(sampleData);
    visualization.createTankLevelChart('tank-level-chart', sampleData);
    visualization.createConsumptionChart('consumption-chart', sampleData);
}

/**
 * Handler für Daten laden
 */
async function handleLoadData() {
    console.log('Lade Daten...');
    
    try {
        const data = await dataLoader.loadData(CONFIG.api.dataEndpoint);
        
        if (dataLoader.validateData(data)) {
            visualization.updateCharts(data);
            showNotification('Daten erfolgreich geladen', 'success');
        } else {
            showNotification('Datenvalidierung fehlgeschlagen', 'error');
        }
    } catch (error) {
        console.error('Fehler beim Laden:', error);
        showNotification('Fehler beim Laden der Daten', 'error');
    }
}

/**
 * Handler für Export
 */
function handleExport() {
    console.log('Exportiere Daten...');
    
    if (!CONFIG.features.enableExport) {
        showNotification('Export-Funktion ist deaktiviert', 'warning');
        return;
    }
    
    visualization.exportVisualization('png');
    showNotification('Export gestartet', 'info');
}

/**
 * Handler für Aktualisieren
 */
function handleRefresh() {
    console.log('Aktualisiere Visualisierung...');
    
    visualization.reset();
    initializeVisualizations();
    
    showNotification('Visualisierung aktualisiert', 'success');
}

/**
 * Generiert Beispieldaten für die Entwicklung
 * @returns {Object} Beispieldaten
 */
function generateSampleData() {
    return {
        tankLevels: [
            { date: '2024-01-01', level: 85 },
            { date: '2024-01-02', level: 80 },
            { date: '2024-01-03', level: 75 },
            { date: '2024-01-04', level: 70 },
            { date: '2024-01-05', level: 90 }
        ],
        consumption: [
            { date: '2024-01-01', value: 45 },
            { date: '2024-01-02', value: 50 },
            { date: '2024-01-03', value: 48 },
            { date: '2024-01-04', value: 52 },
            { date: '2024-01-05', value: 47 }
        ]
    };
}

/**
 * Zeigt eine Benachrichtigung an
 * @param {string} message - Nachricht
 * @param {string} type - Typ (success, error, warning, info)
 */
function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
    
    // Einfaches Toast-Benachrichtigungssystem
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : type === 'warning' ? '#f39c12' : '#3498db'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Automatisch nach 3 Sekunden entfernen
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Anwendung beim Laden der Seite initialisieren
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
