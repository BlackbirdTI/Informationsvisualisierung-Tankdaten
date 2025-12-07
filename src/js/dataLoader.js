/**
 * DataLoader - Klasse zum Laden und Verarbeiten von Tankdaten
 */

class DataLoader {
    constructor() {
        this.data = null;
        this.isLoading = false;
    }

    /**
     * Lädt Daten aus einer JSON-Datei
     * @param {string} url - URL zur Datendatei
     * @returns {Promise<Object>} - Geladene Daten
     */
    async loadData(url) {
        this.isLoading = true;
        
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            this.data = await response.json();
            this.isLoading = false;
            
            console.log('Daten erfolgreich geladen:', this.data);
            return this.data;
            
        } catch (error) {
            this.isLoading = false;
            console.error('Fehler beim Laden der Daten:', error);
            throw error;
        }
    }

    /**
     * Validiert die geladenen Daten
     * @param {Object} data - Zu validierende Daten
     * @returns {boolean} - True wenn Daten valid sind
     */
    validateData(data) {
        if (!data) {
            console.error('Keine Daten vorhanden');
            return false;
        }

        // Fügen Sie hier Ihre Validierungslogik hinzu
        return true;
    }

    /**
     * Filtert Daten nach bestimmten Kriterien
     * @param {Object} filters - Filter-Objekt
     * @returns {Array} - Gefilterte Daten
     */
    filterData(filters) {
        if (!this.data) {
            console.warn('Keine Daten zum Filtern vorhanden');
            return [];
        }

        // Implementieren Sie hier Ihre Filter-Logik
        return this.data;
    }

    /**
     * Gibt die aktuell geladenen Daten zurück
     * @returns {Object|null} - Aktuelle Daten
     */
    getData() {
        return this.data;
    }

    /**
     * Setzt die Daten zurück
     */
    clearData() {
        this.data = null;
    }
}

// DataLoader als global verfügbar machen
if (typeof window !== 'undefined') {
    window.DataLoader = DataLoader;
}
