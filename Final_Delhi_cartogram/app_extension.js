
// ═══════════════════════════════════════════════════════════════
// EXTENSION: Rent · Jobs · Accessibility Layers
// Append this entire block to the END of your existing app.js
// DO NOT modify anything above — this only extends the existing code
// ═══════════════════════════════════════════════════════════════

// ── EMBEDDED ANALYTICAL DATA ──────────────────────────────────
// Job density: 379 grid cells (0.01° ~1km), w=1–10 intensity
const JOB_DATA = [{"x":77.11,"y":28.72,"w":8},{"x":77.15,"y":28.54,"w":4},{"x":77.03,"y":28.46,"w":2},{"x":77.3,"y":28.41,"w":8},{"x":77.09,"y":28.48,"w":10},{"x":77.05,"y":28.46,"w":2},{"x":77.22,"y":28.61,"w":4},{"x":77.21,"y":28.62,"w":9},{"x":77.33,"y":28.57,"w":2},{"x":77.04,"y":28.63,"w":2},{"x":77.34,"y":28.59,"w":4},{"x":77.33,"y":28.59,"w":1},{"x":77.32,"y":28.58,"w":2},{"x":77.37,"y":28.63,"w":2},{"x":77.36,"y":28.59,"w":1},{"x":77.33,"y":28.63,"w":3},{"x":77.3,"y":28.62,"w":1},{"x":77.16,"y":28.7,"w":3},{"x":77.11,"y":28.73,"w":4},{"x":77.23,"y":28.64,"w":4},{"x":77.22,"y":28.39,"w":1},{"x":77.2,"y":28.57,"w":1},{"x":77.07,"y":28.49,"w":1},{"x":77.32,"y":28.36,"w":2},{"x":77.17,"y":28.41,"w":2},{"x":77.08,"y":28.48,"w":4},{"x":77.28,"y":28.41,"w":2},{"x":77.05,"y":28.6,"w":2},{"x":77.05,"y":28.5,"w":2},{"x":77.15,"y":28.42,"w":2},{"x":77.31,"y":28.38,"w":2},{"x":77.32,"y":28.39,"w":2},{"x":77.31,"y":28.39,"w":3},{"x":77.33,"y":28.68,"w":1},{"x":77.03,"y":28.6,"w":6},{"x":77.08,"y":28.63,"w":3},{"x":77.02,"y":28.59,"w":2},{"x":77.07,"y":28.58,"w":4},{"x":77.07,"y":28.59,"w":2},{"x":77.26,"y":28.56,"w":2},{"x":77.29,"y":28.52,"w":4},{"x":77.27,"y":28.55,"w":4},{"x":77.54,"y":28.45,"w":1},{"x":77.13,"y":28.69,"w":3},{"x":77.16,"y":28.69,"w":1},{"x":77.31,"y":28.36,"w":1},{"x":77.38,"y":28.68,"w":6},{"x":77.12,"y":28.82,"w":1},{"x":77.02,"y":28.44,"w":1},{"x":77.16,"y":28.54,"w":3},{"x":77.34,"y":28.65,"w":3},{"x":77.0,"y":28.61,"w":1},{"x":77.23,"y":28.58,"w":1},{"x":77.36,"y":28.57,"w":2},{"x":77.18,"y":28.7,"w":2},{"x":76.99,"y":28.6,"w":3},{"x":76.97,"y":28.62,"w":1},{"x":77.22,"y":28.59,"w":8},{"x":77.21,"y":28.52,"w":2},{"x":77.18,"y":28.59,"w":10},{"x":76.93,"y":28.62,"w":1},{"x":77.18,"y":28.6,"w":4},{"x":77.19,"y":28.59,"w":10},{"x":77.19,"y":28.6,"w":10},{"x":77.07,"y":28.63,"w":2},{"x":77.09,"y":28.65,"w":1},{"x":77.05,"y":28.53,"w":1},{"x":77.06,"y":28.54,"w":1},{"x":77.04,"y":28.6,"w":1},{"x":77.11,"y":28.64,"w":10},{"x":77.21,"y":28.57,"w":4},{"x":77.08,"y":28.45,"w":4},{"x":77.1,"y":28.5,"w":2},{"x":76.94,"y":28.37,"w":1},{"x":77.08,"y":28.44,"w":3},{"x":77.08,"y":28.42,"w":2},{"x":77.06,"y":28.39,"w":2},{"x":77.03,"y":28.4,"w":2},{"x":77.2,"y":28.54,"w":10},{"x":77.32,"y":28.62,"w":2},{"x":77.05,"y":28.48,"w":1},{"x":77.23,"y":28.63,"w":3},{"x":77.22,"y":28.69,"w":6},{"x":77.2,"y":28.71,"w":1},{"x":77.13,"y":28.64,"w":1},{"x":77.16,"y":28.65,"w":1},{"x":77.23,"y":28.61,"w":4},{"x":77.25,"y":28.58,"w":1},{"x":77.2,"y":28.65,"w":2},{"x":77.13,"y":28.75,"w":1},{"x":77.13,"y":28.76,"w":1},{"x":77.1,"y":28.61,"w":2},{"x":77.12,"y":28.73,"w":2},{"x":77.12,"y":28.72,"w":3},{"x":77.11,"y":28.74,"w":2},{"x":77.29,"y":28.64,"w":10},{"x":77.21,"y":28.61,"w":1},{"x":77.36,"y":28.6,"w":2},{"x":77.17,"y":28.55,"w":4},{"x":77.36,"y":28.53,"w":1},{"x":77.23,"y":28.6,"w":4},{"x":77.22,"y":28.6,"w":3},{"x":77.23,"y":28.59,"w":4},{"x":77.35,"y":28.57,"w":3},{"x":77.19,"y":28.65,"w":2},{"x":77.47,"y":28.53,"w":2},{"x":77.1,"y":28.43,"w":2},{"x":77.17,"y":28.63,"w":2},{"x":77.17,"y":28.58,"w":2},{"x":77.16,"y":28.56,"w":5},{"x":77.14,"y":28.71,"w":2},{"x":77.05,"y":28.56,"w":3},{"x":77.13,"y":28.71,"w":3},{"x":77.16,"y":28.57,"w":6},{"x":77.14,"y":28.7,"w":1},{"x":77.17,"y":28.64,"w":2},{"x":77.06,"y":28.42,"w":2},{"x":77.11,"y":28.54,"w":1},{"x":77.12,"y":28.74,"w":4},{"x":77.39,"y":28.62,"w":1},{"x":77.14,"y":28.62,"w":1},{"x":77.18,"y":28.5,"w":1},{"x":77.12,"y":28.7,"w":4},{"x":77.32,"y":28.57,"w":3},{"x":77.07,"y":28.61,"w":4},{"x":77.35,"y":28.61,"w":1},{"x":77.2,"y":28.51,"w":4},{"x":77.35,"y":28.65,"w":10},{"x":77.34,"y":28.69,"w":10},{"x":77.37,"y":28.61,"w":1},{"x":77.38,"y":28.6,"w":1},{"x":77.35,"y":28.69,"w":3},{"x":77.29,"y":28.48,"w":1},{"x":77.12,"y":28.64,"w":1},{"x":77.07,"y":28.7,"w":3},{"x":77.28,"y":28.53,"w":1},{"x":77.3,"y":28.64,"w":2},{"x":77.3,"y":28.51,"w":2},{"x":77.28,"y":28.52,"w":2},{"x":77.21,"y":28.69,"w":5},{"x":77.22,"y":28.67,"w":6},{"x":77.35,"y":28.68,"w":3},{"x":77.23,"y":28.62,"w":7},{"x":77.22,"y":28.62,"w":2},{"x":77.27,"y":28.69,"w":3},{"x":77.29,"y":28.53,"w":1},{"x":77.11,"y":28.63,"w":2},{"x":77.29,"y":28.63,"w":2},{"x":77.37,"y":28.62,"w":1},{"x":77.35,"y":28.59,"w":1},{"x":77.33,"y":28.66,"w":2},{"x":77.09,"y":28.49,"w":2},{"x":77.05,"y":28.41,"w":3},{"x":77.38,"y":28.67,"w":2},{"x":77.0,"y":28.47,"w":3},{"x":77.33,"y":28.54,"w":4},{"x":77.51,"y":28.45,"w":4},{"x":77.32,"y":28.6,"w":2},{"x":77.32,"y":28.59,"w":2},{"x":77.52,"y":28.44,"w":1},{"x":77.19,"y":28.56,"w":2},{"x":77.51,"y":28.47,"w":2},{"x":77.51,"y":28.46,"w":2},{"x":77.18,"y":28.54,"w":1},{"x":77.29,"y":28.5,"w":3},{"x":77.43,"y":28.67,"w":10},{"x":77.32,"y":28.66,"w":4},{"x":77.38,"y":28.62,"w":1},{"x":77.3,"y":28.66,"w":4},{"x":77.33,"y":28.58,"w":1},{"x":77.3,"y":28.65,"w":1},{"x":77.31,"y":28.47,"w":2},{"x":77.22,"y":28.57,"w":10},{"x":77.45,"y":28.7,"w":2},{"x":77.07,"y":28.6,"w":2},{"x":77.34,"y":28.41,"w":1},{"x":77.21,"y":28.54,"w":2},{"x":77.43,"y":28.68,"w":2},{"x":77.21,"y":28.55,"w":2},{"x":77.22,"y":28.54,"w":1},{"x":77.43,"y":28.63,"w":2},{"x":77.07,"y":28.69,"w":10},{"x":77.44,"y":28.65,"w":8},{"x":77.44,"y":28.66,"w":10},{"x":77.19,"y":28.57,"w":2},{"x":77.28,"y":28.49,"w":1},{"x":77.29,"y":28.65,"w":4},{"x":77.2,"y":28.6,"w":1},{"x":77.22,"y":28.63,"w":10},{"x":77.21,"y":28.63,"w":4},{"x":77.38,"y":28.51,"w":2},{"x":77.28,"y":28.63,"w":9},{"x":77.21,"y":28.7,"w":2},{"x":77.13,"y":28.72,"w":2},{"x":77.04,"y":28.42,"w":2},{"x":76.96,"y":28.34,"w":1},{"x":76.94,"y":28.34,"w":2},{"x":77.24,"y":28.59,"w":2},{"x":77.34,"y":28.57,"w":4},{"x":77.34,"y":28.56,"w":2},{"x":77.05,"y":28.42,"w":1},{"x":77.31,"y":28.64,"w":2},{"x":77.12,"y":28.6,"w":2},{"x":77.06,"y":28.59,"w":3},{"x":77.07,"y":28.42,"w":2},{"x":76.99,"y":28.46,"w":1},{"x":77.13,"y":28.68,"w":2},{"x":77.25,"y":28.64,"w":1},{"x":77.23,"y":28.66,"w":2},{"x":77.33,"y":28.64,"w":3},{"x":77.34,"y":28.64,"w":2},{"x":77.19,"y":28.58,"w":2},{"x":77.2,"y":28.68,"w":6},{"x":77.36,"y":28.62,"w":1},{"x":77.14,"y":28.6,"w":1},{"x":77.12,"y":28.58,"w":2},{"x":77.15,"y":28.58,"w":2},{"x":77.09,"y":28.58,"w":3},{"x":77.1,"y":28.58,"w":2},{"x":77.09,"y":28.57,"w":2},{"x":77.37,"y":28.64,"w":2},{"x":77.32,"y":28.69,"w":10},{"x":77.24,"y":28.57,"w":4},{"x":77.24,"y":28.54,"w":2},{"x":77.35,"y":28.37,"w":2},{"x":77.37,"y":28.39,"w":1},{"x":77.37,"y":28.38,"w":2},{"x":77.31,"y":28.7,"w":1},{"x":77.55,"y":28.49,"w":1},{"x":77.12,"y":28.65,"w":3},{"x":77.1,"y":28.45,"w":2},{"x":77.07,"y":28.43,"w":4},{"x":77.03,"y":28.45,"w":1},{"x":77.25,"y":28.57,"w":1},{"x":77.2,"y":28.63,"w":2},{"x":77.15,"y":28.7,"w":10},{"x":77.29,"y":28.68,"w":2},{"x":77.29,"y":28.69,"w":2},{"x":76.94,"y":28.33,"w":1},{"x":77.29,"y":28.41,"w":1},{"x":77.24,"y":28.63,"w":5},{"x":77.14,"y":28.77,"w":1},{"x":77.18,"y":28.61,"w":1},{"x":77.24,"y":28.6,"w":2},{"x":77.28,"y":28.68,"w":1},{"x":77.07,"y":28.41,"w":2},{"x":77.39,"y":28.56,"w":2},{"x":77.21,"y":28.49,"w":4},{"x":77.58,"y":28.53,"w":2},{"x":77.41,"y":28.65,"w":3},{"x":77.5,"y":28.45,"w":1},{"x":77.24,"y":28.61,"w":1},{"x":77.07,"y":28.46,"w":1},{"x":77.25,"y":28.53,"w":4},{"x":77.1,"y":28.63,"w":2},{"x":77.46,"y":28.56,"w":2},{"x":77.06,"y":28.61,"w":2},{"x":77.3,"y":28.59,"w":2},{"x":77.28,"y":28.67,"w":2},{"x":77.17,"y":28.51,"w":3},{"x":77.14,"y":28.42,"w":10},{"x":77.27,"y":28.63,"w":3},{"x":77.18,"y":28.69,"w":2},{"x":77.16,"y":28.68,"w":2},{"x":77.19,"y":28.67,"w":1},{"x":77.27,"y":28.54,"w":2},{"x":77.4,"y":28.55,"w":2},{"x":76.99,"y":28.61,"w":10},{"x":77.16,"y":28.71,"w":2},{"x":77.04,"y":28.8,"w":1},{"x":77.11,"y":28.55,"w":1},{"x":77.18,"y":28.52,"w":1},{"x":77.26,"y":28.58,"w":2},{"x":77.22,"y":28.53,"w":10},{"x":77.51,"y":28.44,"w":6},{"x":77.03,"y":28.51,"w":2},{"x":77.29,"y":28.61,"w":1},{"x":77.18,"y":28.55,"w":4},{"x":77.19,"y":28.55,"w":10},{"x":77.19,"y":28.54,"w":3},{"x":77.07,"y":28.72,"w":1},{"x":77.45,"y":28.6,"w":2},{"x":77.17,"y":28.73,"w":4},{"x":77.16,"y":28.73,"w":2},{"x":77.17,"y":28.74,"w":1},{"x":77.18,"y":28.72,"w":6},{"x":77.05,"y":28.55,"w":1},{"x":77.25,"y":28.4,"w":1},{"x":77.23,"y":28.4,"w":1},{"x":77.33,"y":28.69,"w":4},{"x":77.33,"y":28.7,"w":2},{"x":77.22,"y":28.71,"w":2},{"x":77.05,"y":28.75,"w":1},{"x":77.16,"y":28.72,"w":8},{"x":77.46,"y":28.75,"w":1},{"x":77.16,"y":28.64,"w":1},{"x":77.15,"y":28.75,"w":2},{"x":77.16,"y":28.75,"w":1},{"x":77.15,"y":28.74,"w":1},{"x":77.17,"y":28.75,"w":1},{"x":77.22,"y":28.66,"w":2},{"x":77.15,"y":28.77,"w":2},{"x":77.14,"y":28.78,"w":2},{"x":77.1,"y":28.71,"w":1},{"x":77.1,"y":28.64,"w":1},{"x":77.44,"y":28.67,"w":2},{"x":77.55,"y":28.59,"w":1},{"x":77.15,"y":28.69,"w":2},{"x":77.39,"y":28.54,"w":2},{"x":77.23,"y":28.7,"w":4},{"x":77.43,"y":28.61,"w":3},{"x":77.43,"y":28.66,"w":2},{"x":77.45,"y":28.67,"w":1},{"x":76.99,"y":28.45,"w":2},{"x":77.38,"y":28.61,"w":10},{"x":77.58,"y":28.84,"w":2},{"x":77.36,"y":28.64,"w":10},{"x":77.35,"y":28.41,"w":2},{"x":77.17,"y":28.59,"w":3},{"x":77.13,"y":28.61,"w":3},{"x":77.31,"y":28.67,"w":2},{"x":77.41,"y":28.51,"w":1},{"x":77.09,"y":28.46,"w":2},{"x":77.09,"y":28.73,"w":1},{"x":77.24,"y":28.53,"w":4},{"x":77.08,"y":28.7,"w":2},{"x":77.16,"y":28.58,"w":1},{"x":77.3,"y":28.42,"w":2},{"x":77.19,"y":28.73,"w":1},{"x":77.19,"y":28.61,"w":1},{"x":77.13,"y":28.6,"w":2},{"x":77.57,"y":28.53,"w":2},{"x":77.09,"y":28.51,"w":1},{"x":77.2,"y":28.64,"w":1},{"x":77.42,"y":28.67,"w":4},{"x":77.03,"y":28.61,"w":2},{"x":77.02,"y":28.62,"w":1},{"x":77.08,"y":28.6,"w":2},{"x":77.4,"y":28.59,"w":2},{"x":77.29,"y":28.67,"w":2},{"x":77.09,"y":28.56,"w":2},{"x":77.47,"y":28.45,"w":2},{"x":77.48,"y":28.43,"w":1},{"x":77.53,"y":28.53,"w":1},{"x":77.24,"y":28.62,"w":2},{"x":77.14,"y":28.61,"w":1},{"x":77.01,"y":28.62,"w":2},{"x":77.02,"y":28.43,"w":5},{"x":77.26,"y":28.54,"w":1},{"x":77.2,"y":28.53,"w":1},{"x":77.25,"y":28.59,"w":1},{"x":77.09,"y":28.5,"w":1},{"x":77.13,"y":28.63,"w":2},{"x":77.49,"y":28.46,"w":2},{"x":77.28,"y":28.54,"w":1},{"x":77.23,"y":28.53,"w":1},{"x":77.43,"y":28.62,"w":2},{"x":77.03,"y":28.39,"w":2},{"x":77.22,"y":28.56,"w":1},{"x":77.13,"y":28.7,"w":2},{"x":77.3,"y":28.61,"w":2},{"x":77.29,"y":28.6,"w":2},{"x":77.13,"y":28.57,"w":1},{"x":77.13,"y":28.55,"w":3},{"x":77.15,"y":28.66,"w":2},{"x":77.28,"y":28.56,"w":1},{"x":77.11,"y":28.62,"w":1},{"x":77.52,"y":28.51,"w":1},{"x":77.1,"y":28.68,"w":1},{"x":77.2,"y":28.52,"w":2},{"x":77.33,"y":28.71,"w":2},{"x":77.05,"y":28.4,"w":2},{"x":77.52,"y":28.46,"w":2},{"x":77.25,"y":28.5,"w":6},{"x":77.44,"y":28.61,"w":3},{"x":77.17,"y":28.72,"w":2},{"x":77.14,"y":28.66,"w":2},{"x":77.59,"y":28.53,"w":2},{"x":77.17,"y":28.57,"w":1}];

// Rent data: 265 cells, r=median monthly rent INR, p10/p90 for normalisation
const RENT_DATA = {"pts":[{"x":77.25,"y":28.55,"r":115000,"n":20},{"x":77.13,"y":28.64,"r":45000,"n":10},{"x":77.05,"y":28.62,"r":13500,"n":16},{"x":77.18,"y":28.71,"r":48000,"n":1},{"x":77.13,"y":28.72,"r":21500,"n":4},{"x":77.16,"y":28.49,"r":708000,"n":4},{"x":77.27,"y":28.64,"r":20000,"n":18},{"x":77.28,"y":28.64,"r":11500,"n":4},{"x":77.09,"y":28.62,"r":32000,"n":48},{"x":77.13,"y":28.7,"r":55000,"n":11},{"x":77.33,"y":28.71,"r":11500,"n":2},{"x":77.09,"y":28.61,"r":15000,"n":69},{"x":77.26,"y":28.53,"r":12750,"n":24},{"x":77.09,"y":28.66,"r":32000,"n":11},{"x":77.2,"y":28.69,"r":34000,"n":3},{"x":77.15,"y":28.54,"r":99500,"n":2},{"x":77.19,"y":28.56,"r":300000,"n":113},{"x":77.15,"y":28.52,"r":43500,"n":12},{"x":77.08,"y":28.62,"r":20000,"n":32},{"x":77.21,"y":28.55,"r":18000,"n":5},{"x":77.13,"y":28.65,"r":25000,"n":26},{"x":77.12,"y":28.64,"r":43500,"n":84},{"x":77.16,"y":28.7,"r":48000,"n":2},{"x":77.2,"y":28.56,"r":301010,"n":149},{"x":77.15,"y":28.53,"r":40000,"n":17},{"x":77.21,"y":28.7,"r":60000,"n":1},{"x":77.11,"y":28.64,"r":25000,"n":47},{"x":77.11,"y":28.46,"r":42000,"n":4},{"x":77.17,"y":28.65,"r":18000,"n":35},{"x":77.3,"y":28.54,"r":43000,"n":1},{"x":77.04,"y":28.63,"r":15000,"n":14},{"x":77.32,"y":28.64,"r":29500,"n":2},{"x":77.3,"y":28.66,"r":61000,"n":3},{"x":77.05,"y":28.6,"r":35000,"n":17},{"x":77.07,"y":28.59,"r":33300,"n":16},{"x":77.2,"y":28.54,"r":301012,"n":53},{"x":77.1,"y":28.67,"r":30000,"n":33},{"x":77.18,"y":28.5,"r":17000,"n":16},{"x":77.06,"y":28.62,"r":11000,"n":69},{"x":77.3,"y":28.62,"r":23000,"n":10},{"x":77.14,"y":28.63,"r":45000,"n":34},{"x":77.24,"y":28.53,"r":150000,"n":38},{"x":77.25,"y":28.54,"r":100000,"n":27},{"x":77.05,"y":28.58,"r":30000,"n":30},{"x":77.05,"y":28.56,"r":38250,"n":8},{"x":77.06,"y":28.59,"r":38500,"n":18},{"x":77.24,"y":28.57,"r":29000,"n":14},{"x":77.23,"y":28.57,"r":190000,"n":181},{"x":77.04,"y":28.59,"r":35000,"n":44},{"x":77.18,"y":28.49,"r":15000,"n":30},{"x":77.04,"y":28.62,"r":15500,"n":28},{"x":77.09,"y":28.67,"r":42500,"n":6},{"x":77.06,"y":28.56,"r":35000,"n":24},{"x":77.04,"y":28.58,"r":28500,"n":8},{"x":77.21,"y":28.56,"r":301022,"n":173},{"x":77.22,"y":28.53,"r":18500,"n":35},{"x":77.26,"y":28.54,"r":12150,"n":16},{"x":77.04,"y":28.6,"r":24000,"n":25},{"x":77.17,"y":28.58,"r":322282,"n":160},{"x":77.14,"y":28.7,"r":36000,"n":27},{"x":77.21,"y":28.53,"r":35000,"n":56},{"x":77.16,"y":28.71,"r":30000,"n":27},{"x":77.08,"y":28.72,"r":15000,"n":1},{"x":77.14,"y":28.66,"r":17500,"n":4},{"x":77.31,"y":28.49,"r":8000,"n":1},{"x":77.12,"y":28.71,"r":18000,"n":7},{"x":77.04,"y":28.56,"r":11900,"n":2},{"x":77.07,"y":28.64,"r":53000,"n":2},{"x":77.16,"y":28.5,"r":14000,"n":2},{"x":77.05,"y":28.59,"r":32000,"n":35},{"x":77.19,"y":28.72,"r":16000,"n":7},{"x":77.15,"y":28.67,"r":22000,"n":58},{"x":77.17,"y":28.55,"r":25250,"n":8},{"x":77.08,"y":28.6,"r":13000,"n":7},{"x":77.24,"y":28.55,"r":125000,"n":105},{"x":77.21,"y":28.54,"r":235744,"n":108},{"x":77.03,"y":28.6,"r":17500,"n":8},{"x":77.1,"y":28.61,"r":16000,"n":21},{"x":77.08,"y":28.63,"r":32000,"n":7},{"x":77.25,"y":28.53,"r":301012,"n":90},{"x":77.08,"y":28.61,"r":13000,"n":10},{"x":77.09,"y":28.6,"r":9000,"n":5},{"x":77.07,"y":28.62,"r":9500,"n":4},{"x":77.07,"y":28.57,"r":22000,"n":5},{"x":77.06,"y":28.6,"r":35000,"n":33},{"x":77.19,"y":28.69,"r":39000,"n":3},{"x":77.16,"y":28.52,"r":80000,"n":3},{"x":77.16,"y":28.53,"r":60000,"n":7},{"x":77.2,"y":28.55,"r":105000,"n":44},{"x":77.23,"y":28.54,"r":301012,"n":74},{"x":77.14,"y":28.69,"r":50000,"n":15},{"x":77.11,"y":28.69,"r":62500,"n":2},{"x":77.23,"y":28.58,"r":160000,"n":23},{"x":77.22,"y":28.54,"r":301022,"n":99},{"x":77.18,"y":28.68,"r":18250,"n":2},{"x":77.22,"y":28.59,"r":450000,"n":23},{"x":77.23,"y":28.6,"r":401012,"n":105},{"x":77.16,"y":28.56,"r":321222,"n":142},{"x":77.22,"y":28.57,"r":95000,"n":10},{"x":77.16,"y":28.58,"r":125000,"n":17},{"x":77.22,"y":28.56,"r":301062,"n":104},{"x":77.26,"y":28.56,"r":90000,"n":2},{"x":77.18,"y":28.67,"r":20000,"n":6},{"x":77.14,"y":28.65,"r":47500,"n":10},{"x":77.11,"y":28.65,"r":26000,"n":25},{"x":77.14,"y":28.71,"r":45000,"n":13},{"x":77.2,"y":28.53,"r":301022,"n":103},{"x":77.07,"y":28.6,"r":40000,"n":22},{"x":77.07,"y":28.58,"r":31000,"n":12},{"x":77.08,"y":28.66,"r":42000,"n":1},{"x":77.12,"y":28.66,"r":27250,"n":4},{"x":77.27,"y":28.65,"r":15000,"n":1},{"x":77.31,"y":28.65,"r":41000,"n":4},{"x":77.08,"y":28.64,"r":17000,"n":9},{"x":77.12,"y":28.65,"r":60000,"n":3},{"x":77.33,"y":28.69,"r":20000,"n":1},{"x":77.19,"y":28.71,"r":18000,"n":1},{"x":77.19,"y":28.7,"r":37000,"n":1},{"x":77.02,"y":28.61,"r":23750,"n":2},{"x":77.14,"y":28.53,"r":401012,"n":57},{"x":77.03,"y":28.62,"r":12500,"n":46},{"x":77.17,"y":28.67,"r":20000,"n":1},{"x":77.19,"y":28.5,"r":20000,"n":41},{"x":77.11,"y":28.67,"r":35000,"n":19},{"x":77.1,"y":28.68,"r":32000,"n":7},{"x":77.11,"y":28.68,"r":41000,"n":1},{"x":77.21,"y":28.68,"r":10000,"n":1},{"x":77.09,"y":28.63,"r":45000,"n":3},{"x":77.1,"y":28.6,"r":10500,"n":4},{"x":77.11,"y":28.6,"r":11000,"n":1},{"x":77.19,"y":28.49,"r":14500,"n":8},{"x":77.24,"y":28.54,"r":150000,"n":31},{"x":77.24,"y":28.58,"r":31500,"n":18},{"x":77.25,"y":28.56,"r":15500,"n":50},{"x":77.21,"y":28.52,"r":30000,"n":30},{"x":77.25,"y":28.59,"r":150000,"n":1},{"x":77.16,"y":28.57,"r":301102,"n":54},{"x":77.24,"y":28.56,"r":40000,"n":9},{"x":77.23,"y":28.55,"r":301012,"n":74},{"x":77.1,"y":28.64,"r":20000,"n":5},{"x":77.21,"y":28.57,"r":170000,"n":1},{"x":77.19,"y":28.48,"r":600000,"n":1},{"x":77.18,"y":28.61,"r":2000000,"n":1},{"x":77.23,"y":28.56,"r":157500,"n":2},{"x":77.28,"y":28.58,"r":175000,"n":5},{"x":77.06,"y":28.58,"r":26000,"n":3},{"x":77.05,"y":28.57,"r":30000,"n":3},{"x":77.26,"y":28.55,"r":107500,"n":6},{"x":77.22,"y":28.52,"r":150000,"n":1},{"x":77.04,"y":28.57,"r":38000,"n":7},{"x":77.19,"y":28.65,"r":31000,"n":2},{"x":77.21,"y":28.71,"r":23500,"n":2},{"x":77.15,"y":28.56,"r":190000,"n":1},{"x":77.04,"y":28.61,"r":23000,"n":5},{"x":77.05,"y":28.61,"r":10999,"n":3},{"x":77.11,"y":28.73,"r":35000,"n":7},{"x":77.18,"y":28.7,"r":13000,"n":1},{"x":77.03,"y":28.59,"r":22000,"n":6},{"x":77.02,"y":28.6,"r":48000,"n":2},{"x":77.29,"y":28.64,"r":43500,"n":8},{"x":77.18,"y":28.55,"r":37000,"n":1},{"x":77.2,"y":28.51,"r":23750,"n":2},{"x":77.15,"y":28.63,"r":29000,"n":12},{"x":77.16,"y":28.65,"r":19700,"n":1},{"x":77.1,"y":28.66,"r":18000,"n":3},{"x":77.28,"y":28.7,"r":8500,"n":1},{"x":77.29,"y":28.53,"r":18500,"n":4},{"x":77.31,"y":28.63,"r":22000,"n":35},{"x":77.3,"y":28.64,"r":21500,"n":2},{"x":77.3,"y":28.63,"r":23500,"n":4},{"x":77.3,"y":28.65,"r":62500,"n":4},{"x":77.29,"y":28.62,"r":31000,"n":3},{"x":77.13,"y":28.67,"r":89500,"n":6},{"x":77.29,"y":28.63,"r":41000,"n":2},{"x":77.18,"y":28.63,"r":55000,"n":18},{"x":77.19,"y":28.64,"r":20000,"n":11},{"x":77.29,"y":28.66,"r":25500,"n":2},{"x":77.25,"y":28.6,"r":125000,"n":1},{"x":77.02,"y":28.62,"r":15000,"n":1},{"x":77.22,"y":28.64,"r":52000,"n":15},{"x":77.21,"y":28.6,"r":1210147,"n":14},{"x":77.2,"y":28.52,"r":301012,"n":73},{"x":77.26,"y":28.57,"r":381012,"n":35},{"x":77.27,"y":28.57,"r":301022,"n":138},{"x":77.11,"y":28.63,"r":28500,"n":1},{"x":77.24,"y":28.59,"r":120000,"n":4},{"x":77.19,"y":28.53,"r":11000,"n":2},{"x":77.15,"y":28.72,"r":6500,"n":7},{"x":77.31,"y":28.6,"r":12500,"n":4},{"x":77.21,"y":28.5,"r":7000,"n":3},{"x":76.96,"y":28.62,"r":401012,"n":60},{"x":77.16,"y":28.68,"r":401010,"n":113},{"x":77.29,"y":28.61,"r":40000,"n":4},{"x":77.21,"y":28.51,"r":401015,"n":75},{"x":77.14,"y":28.5,"r":401012,"n":47},{"x":77.2,"y":28.5,"r":401012,"n":57},{"x":77.22,"y":28.6,"r":1218132,"n":40},{"x":77.19,"y":28.6,"r":1401101,"n":13},{"x":77.23,"y":28.59,"r":1213165,"n":8},{"x":77.24,"y":28.62,"r":1210992,"n":10},{"x":77.08,"y":28.59,"r":5500,"n":2},{"x":77.11,"y":28.71,"r":15000,"n":1},{"x":77.23,"y":28.63,"r":1418182,"n":6},{"x":77.19,"y":28.57,"r":80000,"n":1},{"x":77.17,"y":28.63,"r":49500,"n":2},{"x":77.31,"y":28.59,"r":11000,"n":1},{"x":77.18,"y":28.64,"r":19100,"n":3},{"x":77.11,"y":28.66,"r":18000,"n":1},{"x":77.16,"y":28.64,"r":12000,"n":1},{"x":77.29,"y":28.6,"r":24000,"n":5},{"x":77.2,"y":28.66,"r":11000,"n":1},{"x":77.13,"y":28.71,"r":23000,"n":3},{"x":77.3,"y":28.55,"r":23000,"n":7},{"x":77.09,"y":28.68,"r":25000,"n":7},{"x":77.08,"y":28.68,"r":25000,"n":1},{"x":77.08,"y":28.67,"r":26000,"n":3},{"x":77.12,"y":28.67,"r":16000,"n":1},{"x":77.25,"y":28.57,"r":37500,"n":2},{"x":77.24,"y":28.6,"r":250000,"n":5},{"x":77.17,"y":28.71,"r":12500,"n":2},{"x":77.16,"y":28.72,"r":25000,"n":1},{"x":77.13,"y":28.69,"r":20750,"n":2},{"x":77.15,"y":28.7,"r":40000,"n":54},{"x":77.12,"y":28.72,"r":24000,"n":6},{"x":77.17,"y":28.51,"r":40000,"n":1},{"x":77.16,"y":28.66,"r":10500,"n":4},{"x":77.14,"y":28.72,"r":33000,"n":11},{"x":77.29,"y":28.56,"r":15000,"n":3},{"x":77.19,"y":28.58,"r":38000,"n":1},{"x":77.12,"y":28.63,"r":15250,"n":2},{"x":77.1,"y":28.63,"r":18000,"n":1},{"x":77.12,"y":28.69,"r":100000,"n":1},{"x":77.15,"y":28.71,"r":16000,"n":1},{"x":77.09,"y":28.76,"r":24000,"n":1},{"x":77.12,"y":28.74,"r":13000,"n":1},{"x":77.13,"y":28.55,"r":14000,"n":4},{"x":77.03,"y":28.64,"r":7000,"n":1},{"x":77.16,"y":28.69,"r":30000,"n":1},{"x":77.3,"y":28.67,"r":25000,"n":2},{"x":77.32,"y":28.66,"r":19000,"n":1},{"x":77.23,"y":28.5,"r":17000,"n":1},{"x":77.08,"y":28.58,"r":10000,"n":1},{"x":77.13,"y":28.47,"r":12000,"n":1},{"x":77.2,"y":28.57,"r":300000,"n":1},{"x":77.05,"y":28.81,"r":18000,"n":1},{"x":77.19,"y":28.76,"r":6000,"n":3},{"x":77.2,"y":28.68,"r":10000,"n":2},{"x":77.11,"y":28.7,"r":35000,"n":2},{"x":77.31,"y":28.62,"r":15000,"n":1},{"x":77.06,"y":28.72,"r":10000,"n":1},{"x":77.15,"y":28.69,"r":5000,"n":1},{"x":77.06,"y":28.68,"r":6000,"n":1},{"x":77.34,"y":28.61,"r":22500,"n":2},{"x":77.28,"y":28.65,"r":20500,"n":1},{"x":77.03,"y":28.63,"r":9000,"n":3},{"x":77.24,"y":28.5,"r":7000,"n":4},{"x":77.22,"y":28.5,"r":7000,"n":1},{"x":77.01,"y":28.62,"r":15000,"n":1},{"x":77.1,"y":28.65,"r":16000,"n":1},{"x":77.08,"y":28.77,"r":3600,"n":1},{"x":77.23,"y":28.51,"r":7000,"n":1},{"x":77.2,"y":28.74,"r":4999,"n":1},{"x":77.23,"y":28.62,"r":1334603,"n":4},{"x":77.33,"y":28.61,"r":19000,"n":1},{"x":77.31,"y":28.66,"r":4500,"n":1}],"p10":11000,"p90":301022};

// ── EXTEND STATE with new layer flags + opacity ───────────────
// These piggyback on the existing state object from above
Object.assign(state, {
  showRent:          false,
  showJobs:          false,
  showAccessibility: false,
  rentOpacity:       0.65,
  jobsOpacity:       0.65,
  accessOpacity:     0.70,
  // Per-station accessibility score (jobs reachable ≤ commute threshold)
  // Recomputed each time origin changes
  _accessScores:     null,
  _accessMax:        1,
});

// ── ACCESSIBILITY SCORE COMPUTATION ──────────────────────────
// Score per station = sum of JOB_DATA weights within 1.5km
// Weighted by commute-time proximity (stations within 60 min of origin)
function computeAccessibilityScores() {
  const scores = new Array(DELHI_DATA.s.length).fill(0);
  const MAX_DIST_DEG = 0.015; // ~1.5km

  DELHI_DATA.s.forEach((station, si) => {
    let score = 0;
    for (const job of JOB_DATA) {
      const dx = station.x - job.x;
      const dy = station.y - job.y;
      // Use squared distance for speed (no sqrt needed)
      const d2 = dx*dx + dy*dy;
      if (d2 < MAX_DIST_DEG * MAX_DIST_DEG) {
        // Weight by proximity (Gaussian-ish falloff)
        const w = job.w * Math.max(0, 1 - Math.sqrt(d2) / MAX_DIST_DEG);
        score += w;
      }
    }
    // Discount if station is far from origin (> 60 min)
    const travelFactor = station.t <= 60 ? 1 : Math.max(0, 1 - (station.t - 60) / 120);
    scores[si] = score * travelFactor;
  });

  state._accessScores = scores;
  state._accessMax    = Math.max(1, ...scores);
}

// Run once on load, again when origin changes
computeAccessibilityScores();

// ── RENT COLOUR PALETTE (blue=cheap → red=expensive) ─────────
function rentColor(normalised, alpha) {
  // 0=cheap(blue) → 0.5=mid(yellow) → 1=expensive(red)
  const stops = [
    [0,   [92, 160, 210]],
    [0.35,[155, 200, 170]],
    [0.6, [240, 210, 100]],
    [0.8, [230, 130,  50]],
    [1.0, [210,  40,  40]],
  ];
  let lo = stops[0], hi = stops[stops.length-1];
  for (let i=0; i<stops.length-1; i++) {
    if (normalised >= stops[i][0] && normalised <= stops[i+1][0]) {
      lo = stops[i]; hi = stops[i+1]; break;
    }
  }
  const f = lo[0]===hi[0] ? 0 : (normalised-lo[0])/(hi[0]-lo[0]);
  return `rgba(${Math.round(lo[1][0]+(hi[1][0]-lo[1][0])*f)},${
    Math.round(lo[1][1]+(hi[1][1]-lo[1][1])*f)},${
    Math.round(lo[1][2]+(hi[1][2]-lo[1][2])*f)},${alpha})`;
}

// ── JOB DENSITY COLOUR (white=low → deep-purple=high) ────────
function jobColor(normalised, alpha) {
  const stops = [
    [0,   [220, 230, 240]],
    [0.3, [160, 180, 220]],
    [0.6, [ 90, 100, 190]],
    [1.0, [ 40,  20, 120]],
  ];
  let lo = stops[0], hi = stops[stops.length-1];
  for (let i=0; i<stops.length-1; i++) {
    if (normalised >= stops[i][0] && normalised <= stops[i+1][0]) {
      lo = stops[i]; hi = stops[i+1]; break;
    }
  }
  const f = lo[0]===hi[0] ? 0 : (normalised-lo[0])/(hi[0]-lo[0]);
  return `rgba(${Math.round(lo[1][0]+(hi[1][0]-lo[1][0])*f)},${
    Math.round(lo[1][1]+(hi[1][1]-lo[1][1])*f)},${
    Math.round(lo[1][2]+(hi[1][2]-lo[1][2])*f)},${alpha})`;
}

// ── ACCESSIBILITY COLOUR (grey=low → green=high) ─────────────
function accessColor(normalised, alpha) {
  const stops = [
    [0,   [180, 200, 190]],
    [0.3, [100, 190, 140]],
    [0.65,[ 20, 160,  80]],
    [1.0, [  0, 100,  40]],
  ];
  let lo = stops[0], hi = stops[stops.length-1];
  for (let i=0; i<stops.length-1; i++) {
    if (normalised >= stops[i][0] && normalised <= stops[i+1][0]) {
      lo = stops[i]; hi = stops[i+1]; break;
    }
  }
  const f = lo[0]===hi[0] ? 0 : (normalised-lo[0])/(hi[0]-lo[0]);
  return `rgba(${Math.round(lo[1][0]+(hi[1][0]-lo[1][0])*f)},${
    Math.round(lo[1][1]+(hi[1][1]-lo[1][1])*f)},${
    Math.round(lo[1][2]+(hi[1][2]-lo[1][2])*f)},${alpha})`;
}

// ── LAYER DRAW FUNCTIONS ──────────────────────────────────────
// Each is called from the draw() INJECTION POINT below

function drawRentLayer() {
  if (!state.showRent) return;
  const R      = Math.max(28, mapCanvas.width/(devicePixelRatio*10));
  const p10    = RENT_DATA.p10;
  const p90    = RENT_DATA.p90;
  const alpha  = state.rentOpacity;

  ctx.save();
  ctx.globalCompositeOperation = 'source-over';

  for (const cell of RENT_DATA.pts) {
    // Cap at p90 to reduce outlier skew; floor at p10
    const clamped = Math.max(p10, Math.min(p90, cell.r));
    const t       = (clamped - p10) / (p90 - p10);
    const pt      = geoToCanvas(cell.x, cell.y);
    // Larger blob for cells with more samples (more confidence)
    const bR = R * (0.7 + 0.3 * Math.min(1, cell.n / 30));
    const grad = ctx.createRadialGradient(pt.x,pt.y,0, pt.x,pt.y,bR);
    grad.addColorStop(0, rentColor(t, alpha));
    grad.addColorStop(0.55, rentColor(t, alpha*0.5));
    grad.addColorStop(1, rentColor(t, 0));
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, bR, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.restore();
}

function drawJobsLayer() {
  if (!state.showJobs) return;
  const R     = Math.max(22, mapCanvas.width/(devicePixelRatio*12));
  const alpha = state.jobsOpacity;

  ctx.save();
  ctx.globalCompositeOperation = 'source-over';

  for (const cell of JOB_DATA) {
    const t  = (cell.w - 1) / 9; // w is 1–10
    const pt = geoToCanvas(cell.x, cell.y);
    const bR = R * (0.5 + 0.5 * t);
    const grad = ctx.createRadialGradient(pt.x,pt.y,0, pt.x,pt.y,bR);
    grad.addColorStop(0, jobColor(t, alpha));
    grad.addColorStop(0.6, jobColor(t, alpha*0.45));
    grad.addColorStop(1, jobColor(t, 0));
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, bR, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.restore();
}

function drawAccessibilityLayer() {
  if (!state.showAccessibility || !state._accessScores) return;
  const R     = Math.max(28, mapCanvas.width/(devicePixelRatio*9));
  const alpha = state.accessOpacity;
  const max   = state._accessMax;

  ctx.save();
  ctx.globalCompositeOperation = 'source-over';

  DELHI_DATA.s.forEach((s, si) => {
    const t  = state._accessScores[si] / max;
    const pt = geoToCanvas(s.x, s.y);
    const bR = R * (0.4 + 0.6 * t);
    const grad = ctx.createRadialGradient(pt.x,pt.y,0, pt.x,pt.y,bR);
    grad.addColorStop(0, accessColor(t, alpha));
    grad.addColorStop(0.6, accessColor(t, alpha*0.4));
    grad.addColorStop(1, accessColor(t, 0));
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, bR, 0, Math.PI*2);
    ctx.fill();
  });
  ctx.restore();
}

// ── INJECT INTO draw() ────────────────────────────────────────
// We wrap the original draw function and call the new layers
// at the correct z-position (after heatmap blob, before boundary outline)
const _originalDraw = draw;  // capture reference

// Override draw globally
window.draw = draw;

// Monkey-patch: save original, replace with extended version
(function() {
  // We can't easily inject mid-function, so we replace the full draw call
  // by intercepting requestAnimationFrame via the animFrame mechanism.
  // Instead, we directly extend by overwriting the module-level draw reference.
  // Since app.js uses `draw()` by name in requestDraw(), we replace it here.

  const _orig = typeof draw === 'function' ? draw : null;
  if (!_orig) return;

  // Replace draw in this scope
  window._cartogramDrawBase = _orig;
  window._cartogramDrawExtended = function drawExtended() {
    const W = mapCanvas.width, H = mapCanvas.height;
    ctx.clearRect(0,0,W,H);

    // Layer 0: Background
    ctx.fillStyle = '#ddd8ce';
    ctx.fillRect(0,0,W,H);

    // Layer 0b: Basemap tiles (below everything)
    drawBasemap();

    // Layer 1: Boundary fill + road grid texture
    ctx.save();
    ctx.beginPath();
    BOUNDARY.forEach((c,i) => {
      const pt = geoToCanvas(c[0], c[1]);
      i===0 ? ctx.moveTo(pt.x,pt.y) : ctx.lineTo(pt.x,pt.y);
    });
    ctx.closePath();
    ctx.fillStyle = '#e8e2d4';
    ctx.fill();
    ctx.clip();
    ctx.strokeStyle = 'rgba(195,190,180,0.45)';
    ctx.lineWidth = 0.5;
    const gridStep = 22;
    for(let x=0; x<W; x+=gridStep){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for(let y=0; y<H; y+=gridStep){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }
    ctx.restore();

    // Layer 2a: Original travel-time heatmap
    if (state.showHeatmap) {
      ctx.save();
      ctx.globalCompositeOperation = 'multiply';
      const R = Math.max(35, W * 0.07);
      for (const s of DELHI_DATA.s) {
        const t  = stationTravelT(s);
        const pt = geoToCanvas(s.x, s.y);
        const alpha = 0.55 * (1 - t*0.3);
        const grad = ctx.createRadialGradient(pt.x,pt.y,0, pt.x,pt.y,R);
        grad.addColorStop(0, heatColor(t, alpha));
        grad.addColorStop(0.6, heatColor(t, alpha*0.4));
        grad.addColorStop(1, heatColor(t, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pt.x,pt.y,R,0,Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    }

    // ── NEW LAYERS (2b, 2c, 2d) inserted here — below boundary/routes ──
    drawRentLayer();
    drawJobsLayer();
    drawAccessibilityLayer();
    // ── END NEW LAYERS ──

    // Layer 3: Boundary outline
    ctx.save();
    ctx.beginPath();
    BOUNDARY.forEach((c,i) => {
      const pt = geoToCanvas(c[0],c[1]);
      i===0 ? ctx.moveTo(pt.x,pt.y) : ctx.lineTo(pt.x,pt.y);
    });
    ctx.closePath();
    ctx.strokeStyle = '#c47a30';
    ctx.lineWidth = state.viewScale < 1.5 ? 2 : 2.5;
    ctx.stroke();
    ctx.restore();

    // Layer 4: 60-min outline
    if (state.showOutline) {
      const within60 = DELHI_DATA.s.filter(s => s.t <= 60);
      if (within60.length > 2) {
        ctx.save();
        ctx.setLineDash([6,4]);
        ctx.strokeStyle = '#f15a24';
        ctx.lineWidth = 2;
        ctx.beginPath();
        within60.forEach((s,i) => {
          const pt = geoToCanvas(s.x,s.y);
          i===0 ? ctx.moveTo(pt.x,pt.y) : ctx.lineTo(pt.x,pt.y);
        });
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }
    }

    // Layer 5: Metro routes (white casing + colored lines)
    for (const route of DELHI_DATA.r) {
      if (!route.p || route.p.length < 2) continue;
      const col = LINE_COLORS[route.c] || '#888';
      ctx.beginPath();
      route.p.forEach((c,i) => {
        const pt = geoToCanvas(c[0],c[1]);
        i===0 ? ctx.moveTo(pt.x,pt.y) : ctx.lineTo(pt.x,pt.y);
      });
      ctx.strokeStyle = 'rgba(255,255,255,0.75)';
      ctx.lineWidth = (state.viewScale < 2 ? 3.5 : 5) * state.viewScale;
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.stroke();
      ctx.beginPath();
      route.p.forEach((c,i) => {
        const pt = geoToCanvas(c[0],c[1]);
        i===0 ? ctx.moveTo(pt.x,pt.y) : ctx.lineTo(pt.x,pt.y);
      });
      ctx.strokeStyle = col;
      ctx.lineWidth = (state.viewScale < 2 ? 2 : 3) * state.viewScale;
      ctx.stroke();
    }

    // Layer 6: Station dots
    const dotR = Math.max(2.5, 3.5 * state.viewScale);
    for (const s of DELHI_DATA.s) {
      const pt = geoToCanvas(s.x, s.y);
      const isOrigin = s.i === state.originId;
      const isHover  = s.i === state.hoverStationId;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, isOrigin ? dotR*1.6 : isHover ? dotR*1.3 : dotR, 0, Math.PI*2);
      ctx.fillStyle = isOrigin ? '#f15a24' : 'white';
      ctx.fill();
      ctx.strokeStyle = isOrigin ? 'white' : (LINE_COLORS[getStationLineColor(s)] || '#888');
      ctx.lineWidth = isOrigin ? 2 : 1;
      ctx.stroke();
    }

    // Layer 7: Origin pulse rings
    const originS = DELHI_DATA.s.find(s=>s.i===state.originId);
    if (originS) {
      const opt = geoToCanvas(originS.x, originS.y);
      const pulse = (Date.now() % 2400) / 2400;
      const pR = dotR*1.6 + pulse*dotR*4;
      ctx.beginPath(); ctx.arc(opt.x,opt.y,pR,0,Math.PI*2);
      ctx.strokeStyle = `rgba(241,90,36,${0.6*(1-pulse)})`;
      ctx.lineWidth = 2; ctx.stroke();
      ctx.beginPath(); ctx.arc(opt.x,opt.y,dotR*2.8,0,Math.PI*2);
      ctx.strokeStyle = `rgba(241,90,36,${0.25})`;
      ctx.lineWidth = 1.5; ctx.stroke();
    }

    // Layer 8: Hover tooltip
    if (state.probeStation && !state.isMobile) {
      const s   = state.probeStation;
      const pt  = geoToCanvas(s.x, s.y);
      const t   = s.t;
      const si  = DELHI_DATA.s.findIndex(x=>x.i===s.i);
      const accessScore = si>=0 && state._accessScores
        ? Math.round(state._accessScores[si] / state._accessMax * 100)
        : null;
      const tLabel  = t<=0.5 ? 'Origin' : `${Math.round(t)} min away`;
      const aLabel  = accessScore !== null ? `Access: ${accessScore}%` : '';
      const pad2 = 9, lineH = 17;
      const lines = [s.n, tLabel, aLabel].filter(Boolean);
      const maxW = lines.reduce((m,l) => Math.max(m, ctx.measureText(l).width), 0);
      const w  = maxW + pad2*2;
      const h  = lines.length * lineH + pad2;
      const tx = Math.max(4, Math.min(W-w-4, pt.x - w/2));
      const ty = pt.y - h - dotR*2 - 6;

      ctx.save();
      ctx.shadowColor='rgba(0,0,0,0.18)'; ctx.shadowBlur=10;
      ctx.fillStyle='rgba(26,26,26,0.92)';
      roundRect(ctx, tx, ty, w, h, 7); ctx.fill();
      ctx.restore();

      ctx.font = `600 13px Inter, sans-serif`;
      ctx.fillStyle = 'white'; ctx.textAlign = 'center';
      ctx.fillText(s.n, tx+w/2, ty+pad2+11);
      ctx.font = `400 11.5px Inter, sans-serif`;
      ctx.fillStyle = t<=0.5 ? '#f15a24' : '#f6b44b';
      ctx.fillText(tLabel, tx+w/2, ty+pad2+lineH+10);
      if (aLabel) {
        ctx.fillStyle = '#7ecb8f';
        ctx.fillText(aLabel, tx+w/2, ty+pad2+lineH*2+10);
      }
      ctx.textAlign = 'left';
    }

    state.dirty = false;
  };

  // Redirect the animation loop to use the extended version
  // by overriding the requestDraw closure call
  window._cartogramDraw = window._cartogramDrawExtended;

})();

// Replace requestDraw to call our extended draw
(function() {
  let _af = null;
  window.requestDraw = function() {
    if (_af) return;
    _af = requestAnimationFrame(() => {
      _af = null;
      if (window._cartogramDraw) window._cartogramDraw();
      else draw();
      window.requestDraw();
    });
  };
  // Restart animation loop with extended draw
  window.requestDraw();
})();

// ── HOOK setOrigin to recompute accessibility ─────────────────
const _origSetOrigin = setOrigin;
window.setOrigin = function(station) {
  _origSetOrigin(station);
  computeAccessibilityScores();
  updateAccessibilityUI();
};

// ── ACCESSIBILITY SIDEBAR UI ──────────────────────────────────
function updateAccessibilityUI() {
  const scoreEl = document.getElementById('accessScoreVal');
  if (!scoreEl || !state._accessScores) return;
  const originIdx = DELHI_DATA.s.findIndex(s=>s.i===state.originId);
  const score = originIdx>=0
    ? Math.round(state._accessScores[originIdx] / state._accessMax * 100)
    : 0;
  scoreEl.textContent = score + '%';
  const barEl = document.getElementById('accessScoreBar');
  if (barEl) barEl.style.width = score + '%';
}

// ── BUILD UI: inject layer toggles + legend into panel ───────
function buildAnalyticsUI() {
  // ── DESKTOP: append to .controls-section ───────────────────
  const desktopControls = document.querySelector('.panel-left .controls-section');
  if (desktopControls) {
    const divider = document.createElement('div');
    divider.style.cssText = 'border-top:1px solid var(--border,#e0ddd6);margin:8px 0 6px;';
    desktopControls.appendChild(divider);

    const sublabel = document.createElement('div');
    sublabel.className = 'controls-label';
    sublabel.style.marginBottom = '4px';
    sublabel.textContent = 'ANALYTICAL LAYERS';
    desktopControls.appendChild(sublabel);

    [
      { key:'showRent',          label:'Rent affordability', id:'rentToggle',   color:'#5296d4' },
      { key:'showJobs',          label:'Job density',        id:'jobsToggle',   color:'#6040c0' },
      { key:'showAccessibility', label:'Accessibility score',id:'accessToggle', color:'#20a060' },
    ].forEach(({ key, label, id, color }) => {
      const row = document.createElement('label');
      row.className = 'toggle-row';
      row.innerHTML = `
        <span class="toggle-label" style="display:flex;align-items:center;gap:5px">
          <span style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;display:inline-block"></span>
          ${label}
        </span>
        <input type="checkbox" id="${id}" class="toggle-input"/>
        <span class="toggle-pill"></span>`;
      desktopControls.appendChild(row);
    });

    // Opacity sliders section
    const sliderSection = document.createElement('div');
    sliderSection.id = 'analyticsSliders';
    sliderSection.style.cssText = 'display:none;padding:6px 0 2px;';
    sliderSection.innerHTML = `
      <div class="controls-label" style="margin-bottom:6px">LAYER OPACITY</div>
      ${[
        { id:'rentOpSlider',   stateKey:'rentOpacity',   label:'Rent',    color:'#5296d4' },
        { id:'jobsOpSlider',   stateKey:'jobsOpacity',   label:'Jobs',    color:'#6040c0' },
        { id:'accessOpSlider', stateKey:'accessOpacity', label:'Access',  color:'#20a060' },
      ].map(s=>`
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
          <span style="font-size:10.5px;color:var(--text3,#888);width:42px">${s.label}</span>
          <input type="range" id="${s.id}" min="0.1" max="1" step="0.05"
            value="${state[s.stateKey]}"
            style="flex:1;accent-color:${s.color};cursor:pointer"/>
        </div>`).join('')}`;
    desktopControls.appendChild(sliderSection);

    // Accessibility score card
    const accessCard = document.createElement('div');
    accessCard.id = 'accessScoreCard';
    accessCard.style.cssText = 'display:none;margin:8px 0 0;padding:9px 12px;background:var(--bg,#f0eee8);border:1px solid var(--border,#e0ddd6);border-radius:8px;';
    accessCard.innerHTML = `
      <div style="font-size:9px;font-weight:600;letter-spacing:.08em;color:var(--text3,#888);margin-bottom:4px">JOB ACCESSIBILITY</div>
      <div style="display:flex;align-items:baseline;gap:4px;margin-bottom:6px">
        <span id="accessScoreVal" style="font-size:24px;font-weight:700;color:var(--text,#1a1a1a);letter-spacing:-.02em">—</span>
        <span style="font-size:11px;color:var(--text3,#888)">of max reachable jobs</span>
      </div>
      <div style="height:4px;background:var(--border,#e0ddd6);border-radius:3px;overflow:hidden">
        <div id="accessScoreBar" style="height:100%;width:0;background:linear-gradient(90deg,#20a060,#7ecb8f);border-radius:3px;transition:width .5s"></div>
      </div>`;
    desktopControls.appendChild(accessCard);
  }

  // ── MOBILE: append to mobile controls-section ───────────────
  const mobileControls = document.querySelector('.mobile-sheet-body .controls-section');
  if (mobileControls) {
    const sublabel = document.createElement('div');
    sublabel.className = 'controls-label';
    sublabel.style.cssText = 'border-top:1px solid var(--border,#e0ddd6);padding-top:8px;margin-top:4px;';
    sublabel.textContent = 'ANALYTICAL LAYERS';
    mobileControls.appendChild(sublabel);

    [
      { key:'showRent',          label:'Rent',        id:'mobileRentToggle',   mobileId:true },
      { key:'showJobs',          label:'Jobs',        id:'mobileJobsToggle',   mobileId:true },
      { key:'showAccessibility', label:'Accessibility',id:'mobileAccessToggle',mobileId:true },
    ].forEach(({ label, id }) => {
      const row = document.createElement('label');
      row.className = 'toggle-row';
      row.innerHTML = `
        <span class="toggle-label">${label}</span>
        <input type="checkbox" id="${id}" class="toggle-input"/>
        <span class="toggle-pill"></span>`;
      mobileControls.appendChild(row);
    });
  }

  // ── LEGEND entries ───────────────────────────────────────────
  const legend = document.getElementById('heatmapLegend');
  if (legend) {
    const analyticsLegend = document.createElement('div');
    analyticsLegend.id = 'analyticsLegend';
    analyticsLegend.style.display = 'none';
    analyticsLegend.innerHTML = `
      <div style="margin-top:10px">
        <div id="rentLegendBlock" style="display:none;margin-bottom:8px">
          <div class="controls-label" style="margin-bottom:3px">RENT (₹/mo)</div>
          <div style="height:6px;border-radius:3px;background:linear-gradient(to right,#5ca0d2,#9bc8aa,#f0d264,#e68232,#d22828);margin-bottom:2px"></div>
          <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text3,#888)">
            <span>Affordable</span><span>Expensive</span>
          </div>
        </div>
        <div id="jobsLegendBlock" style="display:none;margin-bottom:8px">
          <div class="controls-label" style="margin-bottom:3px">JOB DENSITY</div>
          <div style="height:6px;border-radius:3px;background:linear-gradient(to right,#dce6f0,#a0b4dc,#5a64be,#281478);margin-bottom:2px"></div>
          <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text3,#888)">
            <span>Low</span><span>High</span>
          </div>
        </div>
        <div id="accessLegendBlock" style="display:none">
          <div class="controls-label" style="margin-bottom:3px">ACCESSIBILITY</div>
          <div style="height:6px;border-radius:3px;background:linear-gradient(to right,#b4c8be,#64bea0,#14a050,#006428);margin-bottom:2px"></div>
          <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text3,#888)">
            <span>Low</span><span>High</span>
          </div>
        </div>
      </div>`;
    legend.appendChild(analyticsLegend);
  }

  // ── WIRE TOGGLE EVENTS ───────────────────────────────────────
  function pairAnalyticsToggle(desktopId, mobileId, stateKey, legendBlockId, cardId) {
    const a = document.getElementById(desktopId);
    const b = document.getElementById(mobileId);
    const update = (checked) => {
      state[stateKey] = checked;
      if (a) a.checked = checked;
      if (b) b.checked = checked;

      // Show/hide legend blocks
      const lBlock = document.getElementById(legendBlockId);
      if (lBlock) lBlock.style.display = checked ? 'block' : 'none';

      // Show/hide analytics legend container
      const anyOn = state.showRent || state.showJobs || state.showAccessibility;
      const aLeg  = document.getElementById('analyticsLegend');
      if (aLeg) aLeg.style.display = anyOn ? 'block' : 'none';

      // Show/hide access score card
      if (cardId) {
        const card = document.getElementById(cardId);
        if (card) card.style.display = checked ? 'block' : 'none';
        if (checked) updateAccessibilityUI();
      }

      // Show/hide opacity sliders when any analytic layer is on
      const sliders = document.getElementById('analyticsSliders');
      if (sliders) sliders.style.display = anyOn ? 'block' : 'none';

      state.dirty = true;
      if (window.requestDraw) window.requestDraw();
    };
    a?.addEventListener('change', () => update(a.checked));
    b?.addEventListener('change', () => update(b.checked));
  }

  pairAnalyticsToggle('rentToggle',   'mobileRentToggle',   'showRent',          'rentLegendBlock',   null);
  pairAnalyticsToggle('jobsToggle',   'mobileJobsToggle',   'showJobs',          'jobsLegendBlock',   null);
  pairAnalyticsToggle('accessToggle', 'mobileAccessToggle', 'showAccessibility', 'accessLegendBlock', 'accessScoreCard');

  // Opacity sliders
  [
    { id:'rentOpSlider',   key:'rentOpacity'   },
    { id:'jobsOpSlider',   key:'jobsOpacity'   },
    { id:'accessOpSlider', key:'accessOpacity' },
  ].forEach(({ id, key }) => {
    const el = document.getElementById(id);
    el?.addEventListener('input', () => {
      state[key] = parseFloat(el.value);
      state.dirty = true;
      if (window.requestDraw) window.requestDraw();
    });
  });
}

// Run UI build after DOM is ready (already is, since this appends to existing init)
buildAnalyticsUI();
updateAccessibilityUI();
