/**
 * Visualization - Klasse für die Darstellung von Tankdaten
 */

class Visualization {
    constructor() {
        this.charts = {};
        this.currentData = null;
    }

    /**
     * Initialisiert die Visualisierung
     * @param {Object} data - Daten für die Visualisierung
     */
    init(data) {
        this.currentData = data;
        console.log('Visualisierung initialisiert mit Daten:', data);
    }

    /**
     * Erstellt ein Liniendiagramm für Tankfüllstände
     * @param {string} canvasId - ID des Canvas-Elements
     * @param {Array} data - Daten für das Diagramm
     */
    createTankLevelChart(canvasId, data) {
        const canvas = document.getElementById(canvasId);
        
        if (!canvas) {
            console.error(`Canvas mit ID ${canvasId} nicht gefunden`);
            return;
        }

        const ctx = canvas.getContext('2d');
        
        // Beispiel für einfaches Diagramm (kann später mit Chart.js ersetzt werden)
        this.drawSimpleChart(ctx, data, 'Tankfüllstand');
        
        console.log(`Tankfüllstand-Diagramm auf ${canvasId} erstellt`);
    }

    /**
     * Erstellt ein Diagramm für Verbrauchsstatistiken
     * @param {string} canvasId - ID des Canvas-Elements
     * @param {Array} data - Daten für das Diagramm
     */
    createConsumptionChart(canvasId, data) {
        const canvas = document.getElementById(canvasId);
        
        if (!canvas) {
            console.error(`Canvas mit ID ${canvasId} nicht gefunden`);
            return;
        }

        const ctx = canvas.getContext('2d');
        
        // Beispiel für einfaches Diagramm
        this.drawSimpleChart(ctx, data, 'Verbrauch');
        
        console.log(`Verbrauchsdiagramm auf ${canvasId} erstellt`);
    }

    /**
     * Zeichnet ein einfaches Diagramm (Platzhalter)
     * @param {CanvasRenderingContext2D} ctx - Canvas Context
     * @param {Array} data - Daten
     * @param {string} label - Label für das Diagramm
     */
    drawSimpleChart(ctx, data, label) {
        const canvas = ctx.canvas;
        const width = canvas.width;
        const height = canvas.height;

        // Canvas leeren
        ctx.clearRect(0, 0, width, height);

        // Hintergrund
        ctx.fillStyle = '#f8f9fa';
        ctx.fillRect(0, 0, width, height);

        // Platzhalter-Text
        ctx.fillStyle = '#333';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${label} - Diagramm`, width / 2, height / 2);
        
        ctx.font = '14px Arial';
        ctx.fillStyle = '#666';
        ctx.fillText('(Integrieren Sie hier Ihre Visualisierungsbibliothek)', width / 2, height / 2 + 30);
    }

    /**
     * Aktualisiert alle Diagramme mit neuen Daten
     * @param {Object} data - Neue Daten
     */
    updateCharts(data) {
        this.currentData = data;
        
        // Aktualisieren Sie hier alle Diagramme
        console.log('Diagramme werden aktualisiert...');
    }

    /**
     * Exportiert die aktuelle Visualisierung
     * @param {string} format - Exportformat (png, svg, etc.)
     */
    exportVisualization(format = 'png') {
        console.log(`Exportiere Visualisierung als ${format}`);
        
        // Implementieren Sie hier die Export-Logik
    }

    /**
     * Setzt alle Visualisierungen zurück
     */
    reset() {
        this.charts = {};
        this.currentData = null;
        console.log('Visualisierung zurückgesetzt');
    }
}

// Visualization als global verfügbar machen
if (typeof window !== 'undefined') {
    window.Visualization = Visualization;
}
