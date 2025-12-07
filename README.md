# Informationsvisualisierung-Tankdaten

Ein modernes Web-Framework zur Visualisierung von Tankdaten und Verbrauchsstatistiken.

## 📋 Projektstruktur

```
├── index.html              # Haupt-HTML-Datei
├── src/
│   ├── css/
│   │   └── style.css      # Stylesheet für die Anwendung
│   └── js/
│       ├── config.js      # Konfigurationsdatei
│       ├── dataLoader.js  # Datenlade-Modul
│       ├── visualization.js # Visualisierungsmodul
│       └── main.js        # Hauptanwendungslogik
├── data/
│   └── tankdaten.json     # Beispiel-Tankdaten
└── assets/
    └── images/            # Bilder und Icons
```

## 🚀 Schnellstart

1. **Projekt öffnen**
   - Öffnen Sie die `index.html` Datei in einem modernen Webbrowser
   - Oder nutzen Sie einen lokalen Webserver:
     ```bash
     python -m http.server 8000
     # oder
     npx serve
     ```

2. **Daten anpassen**
   - Bearbeiten Sie `data/tankdaten.json` für Ihre eigenen Tankdaten
   - Passen Sie die Konfiguration in `src/js/config.js` an

## 📊 Features

- **Dashboard**: Übersicht über alle Tankdaten
- **Visualisierung**: Interaktive Diagramme für Füllstände und Verbrauch
- **Datenanalyse**: Werkzeuge zur Analyse von Tankdaten
- **Responsive Design**: Optimiert für Desktop und Mobile

## 🔧 Konfiguration

Passen Sie die Einstellungen in `src/js/config.js` an:

```javascript
const CONFIG = {
    api: {
        dataEndpoint: '/data/tankdaten.json',
        refreshInterval: 60000
    },
    visualization: {
        chartColors: { /* ... */ }
    }
};
```

## 📦 Module

### DataLoader (`src/js/dataLoader.js`)
Verantwortlich für das Laden und Validieren von Daten aus JSON-Dateien.

**Hauptmethoden:**
- `loadData(url)` - Lädt Daten von einer URL
- `validateData(data)` - Validiert geladene Daten
- `filterData(filters)` - Filtert Daten nach Kriterien

### Visualization (`src/js/visualization.js`)
Erstellt und verwaltet alle Visualisierungen.

**Hauptmethoden:**
- `createTankLevelChart(canvasId, data)` - Erstellt Füllstandsdiagramm
- `createConsumptionChart(canvasId, data)` - Erstellt Verbrauchsdiagramm
- `updateCharts(data)` - Aktualisiert alle Diagramme
- `exportVisualization(format)` - Exportiert Visualisierungen

## 🎨 Anpassung

### CSS-Variablen
Passen Sie das Design über CSS-Variablen in `src/css/style.css` an:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
}
```

### Visualisierungsbibliotheken
Integrieren Sie beliebte Bibliotheken wie:
- [Chart.js](https://www.chartjs.org/) für Diagramme
- [D3.js](https://d3js.org/) für erweiterte Visualisierungen
- [Plotly](https://plotly.com/javascript/) für interaktive Grafiken

## 📝 Datenformat

Die Tankdaten sollten folgendes JSON-Format haben:

```json
{
  "metadata": {
    "version": "1.0",
    "lastUpdated": "2024-01-01T00:00:00Z"
  },
  "tanks": [
    {
      "id": "tank-001",
      "name": "Haupttank",
      "capacity": 1000,
      "unit": "Liter",
      "measurements": [
        {
          "timestamp": "2024-01-01T08:00:00Z",
          "level": 850,
          "temperature": 20.5,
          "pressure": 1.2
        }
      ]
    }
  ]
}
```

## 🛠️ Entwicklung

### Empfohlene Erweiterungen
1. Backend-Integration (REST API)
2. Echtzeit-Datenaktualisierung (WebSockets)
3. Erweiterte Filteroptionen
4. Export-Funktionen (PDF, CSV, Excel)
5. Benachrichtigungssystem
6. Benutzerauthentifizierung

### Browser-Kompatibilität
- Chrome/Edge (neueste Versionen)
- Firefox (neueste Versionen)
- Safari (neueste Versionen)

## 📄 Lizenz

Dieses Projekt ist ein Code-Gerüst zur freien Verwendung.

## 🤝 Beiträge

Beiträge sind willkommen! Erstellen Sie Issues oder Pull Requests für Verbesserungen.