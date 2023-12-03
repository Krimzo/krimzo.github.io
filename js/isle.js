/* Dino Data */
const DietType = {
    herbivore: "herbivore",
    carnivore: "carnivore",
}

const ModeType = {
    survival: "survival",
    progression: "progression",
}

class GrowthDuration {
    constructor(hatchling, juvenile, subadult, adult) {
        this.hatchling = hatchling
        this.juvenile = juvenile
        this.subadult = subadult
        this.adult = adult
    }

    fullGrowth(calc_hatch) {
        if (calc_hatch) {
            return this.hatchling + this.juvenile + this.subadult + this.adult
        }
        return this.juvenile + this.subadult + this.adult
    }

    formatGrowth() {
        const keys = Object.keys(this)
        const last_index = keys.length - 1

        let result = ""
        for (let i = 0; i < last_index; i++) {
            result += this[keys[i]] + " + "
        }
        result += this[keys[last_index]] + " = " + this.fullGrowth(true)
        if (this.hatchling) {
            result += "(" + this.fullGrowth(false) + ")"
        }
        return result
    }
}

class Dinosaur {
    constructor(id, name, mode_type,
        diet_type, food_duration, thirst_duration, growth_duration,
        weight, main_speed, ambush_speed, stamina_duration, stamina_recovery,
        health, main_damage, alternate_damage, bleed_damage) {
        this.id = id
        this.name = name
        this.mode_type = mode_type

        this.diet_type = diet_type
        this.food_duration = food_duration
        this.thirst_duration = thirst_duration
        this.growth_duration = growth_duration

        this.weight = weight
        this.main_speed = main_speed
        this.ambush_speed = ambush_speed
        this.stamina_duration = stamina_duration
        this.stamina_recovery = stamina_recovery

        this.health = health
        this.main_damage = main_damage
        this.alternate_damage = alternate_damage
        this.bleed_damage = bleed_damage
    }
}

const dinosaurs = [
    new Dinosaur( 1,   "Acrocanthosaurus", ModeType.progression, DietType.carnivore, "?",  80, new GrowthDuration( 0, 120,   0, 120),  4790, 42.6, 52.2,  27, 165,  4790,  250,    0, 25),
    new Dinosaur( 2,      "Albertosaurus", ModeType.progression, DietType.carnivore, 216,  30, new GrowthDuration( 0,   0,   0, 120),  3000, 39.2, 42.1,  90, "?",  3000,  424,    0, 10),
    new Dinosaur( 3,         "Allosaurus",    ModeType.survival, DietType.carnivore, 125,  60, new GrowthDuration(30,  60,   0, 120),  2800, 34.2, 44.5, 200, 160,  2800,  300,    0, 25),
    new Dinosaur( 4,       "Ankylosaurus", ModeType.progression, DietType.herbivore, 109,  60, new GrowthDuration( 0, 120,   0, 120),  5443, 19.3,    0, 120,  75,  5443, 1260,    0,  0),
    new Dinosaur( 5,       "Austroraptor", ModeType.progression, DietType.carnivore,  65,  45, new GrowthDuration( 0,  60,   0,  60),   250, 39.6, 51.5,  60, 205,   250,   60,    0,  2),
    new Dinosaur( 6,           "Baryonyx", ModeType.progression, DietType.carnivore,  66,  60, new GrowthDuration( 0,  90,   0,  90),  1450, 41.3, 49.6, 155, 155,  1450,  150,    0, 15),
    new Dinosaur( 7,       "Camarasaurus", ModeType.progression, DietType.herbivore, "?", 100, new GrowthDuration( 0,   0,   0,   0), 12000, 20.7,    0,  70, 170, 12000,  750, 5150,  0),
    new Dinosaur( 8,        "Carnotaurus",    ModeType.survival, DietType.carnivore, 100,  60, new GrowthDuration(25,  40,   0,  70),  2170, 52.2,    0, 220, 360,  2170,  200,    0, 15),
    new Dinosaur( 9,       "Ceratosaurus",    ModeType.survival, DietType.carnivore,  67,  60, new GrowthDuration(30,  50,   0,  90),  2250, 36.6, 40.3, 150, "?",  2250,  350,    0,  8),
    new Dinosaur(10,     "Diabloceratops",    ModeType.survival, DietType.herbivore,  31,  50, new GrowthDuration(25,  80,   0, 100),  3250, 31.6,    0, 150, "?",  3250,  350,    0, 18),
    new Dinosaur(11,      "Dilophosaurus",    ModeType.survival, DietType.carnivore,  88,  60, new GrowthDuration(20,  50,   0,  60),  1200, 38.8, 45.5, 150, 150,  1050,  150,    0, 50),
    new Dinosaur(12,         "Dryosaurus",    ModeType.survival, DietType.herbivore,  80,  30, new GrowthDuration(10,  15,   0,  15),   700, 41.5,    0, 250, "?",   500,   20,    0,  0),
    new Dinosaur(13,         "Gallimimus",    ModeType.survival, DietType.herbivore, "?",  30, new GrowthDuration(15,  40,   0,  50),  1000, 48.6,    0, 400, "?",   800,  150,    0,  0),
    new Dinosaur(14,     "Giganotosaurus",    ModeType.survival, DietType.carnivore,  91, 100, new GrowthDuration(30, 110, 220,  60),  6450, 30.6, 39.8,  50, 100,  6000,  700,    0, 40),
    new Dinosaur(15,      "Herrerasaurus", ModeType.progression, DietType.carnivore, 120,  60, new GrowthDuration( 0,  20,   0,  60),   500, 55.8,    0, 130, "?",   500,   50,    0, 10),
    new Dinosaur(16,          "Maiasaura",    ModeType.survival, DietType.herbivore, "?", "?", new GrowthDuration(20,  50,   0,  60),  2868, 44.6,    0, 180, "?",  2868,  175,    0,  0),
    new Dinosaur(17, "Pachycephalosaurus",    ModeType.survival, DietType.herbivore, "?", "?", new GrowthDuration(20,  70,   0,  60),  1300, 40.1,    0, 175, "?",  1300,  350,    0,  0),
    new Dinosaur(18,    "Parasaurolophus",    ModeType.survival, DietType.herbivore, "?", "?", new GrowthDuration(25,  60,   0, 120),  3600, 34.2,    0, 250, "?",  3600,  250,  750,  0),
    new Dinosaur(19,       "Puertasaurus", ModeType.progression, DietType.herbivore, "?", "?", new GrowthDuration( 0,   0,   0,   0), 49895, 12.4,    0, "?", "?", 49895, 5000,    0,  0),
    new Dinosaur(20,    "Shantungosaurus", ModeType.progression, DietType.herbivore, "?", "?", new GrowthDuration( 0, 120,   0, 240), 11793, 32.5,    0,  46, "?", 11793,  250, 1100,  0),
    new Dinosaur(21,        "Spinosaurus", ModeType.progression, DietType.carnivore, "?", "?", new GrowthDuration( 0, 180,   0, 180),  9071, 29.8, 41.3,  30, "?",  9071,  250,    0, 18),
    new Dinosaur(22,        "Stegosaurus", ModeType.progression, DietType.herbivore, "?", "?", new GrowthDuration( 0, 120,   0, 120),  4883, 26.3,    0,  90, "?",  4883, 1200,    0, 30),
    new Dinosaur(23,         "Suchomimus",    ModeType.survival, DietType.carnivore, "?", "?", new GrowthDuration(20,  85,   0, 150),  3600, 30.9, 39.3, 200, "?",  3600,  350,    0, 20),
    new Dinosaur(24,    "Therizinosaurus", ModeType.progression, DietType.herbivore, "?", "?", new GrowthDuration( 0, 180,   0, 120),  4536, 38.2,    0,  65, "?",  4536,  350,  700,  0),
    new Dinosaur(25,        "Triceratops",    ModeType.survival, DietType.herbivore, "?", "?", new GrowthDuration(30,  60, 200, 100),  8300, 25.3,    0,  66, "?",  8200,  360,  850, 22),
    new Dinosaur(26,      "Tyrannosaurus",    ModeType.survival, DietType.carnivore, "?", "?", new GrowthDuration(30, 100, 180, 100),  5800, 33.2, 43.1,  33, "?",  6500, 1200,    0, 10),
    new Dinosaur(27,         "Utahraptor",    ModeType.survival, DietType.carnivore, "?", "?", new GrowthDuration(20,  50,   0,  50),  1000, 43.2, 56.0, 300, "?",  1200,  200,    0, 20),
]

/* Website Data */
const dino_table = document.getElementById("dino_table")

const dino_header_parts = [
    "ID", "Name", "Mode Type",
    "Diet Type", "Food Duration (min)", "Thirst Duration (min)", "Growth Duration (min)",
    "Weight (kg)", "Main Speed (km/h)", "Ambush Speed (km/h)", "Stamina Duration (sec)", "Stamina Recovery (sec)",
    "Health", "Main Damage", "Alternate Damage", "Bleed Damage",
]

const header_row = document.createElement("tr")
dino_header_parts.forEach(header_part => {
    const header_col = document.createElement("th")
    header_col.append(header_part)
    header_row.append(header_col)
});
dino_table.append(header_row)

function getTextColor(text) {
    if (text === ModeType.survival) {
        return "rgb(70, 170, 215)"
    }
    if (text === ModeType.progression) {
        return "rgb(215, 170, 70)"
    }
    if (text === DietType.carnivore) {
        return "rgb(205, 115, 90)"
    }
    if (text === DietType.herbivore) {
        return "rgb(90, 205, 115)"
    }
    return "white"
}

dinosaurs.forEach(dino => {
    const table_row = document.createElement("tr")
    for (dino_member in dino) {
        let table_col = document.createElement("td")
        table_row.append(table_col)

        let value = dino[dino_member]
        if (!value) {
            table_col.style.visibility = "hidden"
            continue
        }

        if (value instanceof GrowthDuration) {
            const growth = value.formatGrowth()
            table_col.append(growth)
            table_col.style.whiteSpace = "nowrap"
        }
        else {
            table_col.append(value)
            table_col.style.color = getTextColor(value)
        }
    }
    dino_table.append(table_row)
})
