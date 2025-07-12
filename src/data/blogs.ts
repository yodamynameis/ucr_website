export const blogs = [
  {
    id: 1,
    title: "Working with Arduino",
    image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJkdWlub3xlbnwwfHwwfHx8MA%3D%3D",
    insta: "https://www.instagram.com/sanskar__phougat/",
    date: "2025-06-18",
    readTime: "8 min read",
    excerpt: "Explore how Arduino is transforming the world of electronics and robotics...",
 content: `
# 🛠️ Working with Arduino: A Beginner's Guide

Arduino is an open-source electronics platform based on easy-to-use hardware and software. Whether you're building your first robot, a home automation system, or a wearable tech gadget, Arduino is a fantastic way to bring your ideas to life.

---

## 📦 What is Arduino?

Arduino is a microcontroller development board designed to make it easier to interface hardware with software. It allows you to read inputs – like light from a sensor or a finger on a button – and turn them into outputs – activating a motor, turning on an LED, or publishing data online.

Arduino comes with its own IDE (Integrated Development Environment), where you write code in a simplified version of C/C++. This code is then uploaded to the microcontroller on the board via USB.

---

## 🔧 Common Arduino Boards

| Board Name        | Microcontroller | Operating Voltage | Digital I/O | Analog Inputs | USB Interface |
|------------------|------------------|-------------------|-------------|---------------|----------------|
| Arduino Uno       | ATmega328P       | 5V                | 14           | 6             | Type-B         |
| Arduino Nano      | ATmega328P       | 5V                | 14           | 8             | Mini-USB       |
| Arduino Mega      | ATmega2560       | 5V                | 54           | 16            | Type-B         |
| Arduino Leonardo  | ATmega32u4       | 5V                | 20           | 12            | Micro-USB      |

---

## 🚀 Getting Started

### ✅ What You Need:
- An Arduino board (e.g., Uno, Nano)
- USB cable
- Breadboard and jumper wires
- Components like LEDs, resistors, sensors
- Arduino IDE (download from <a href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">arduino.cc</a>)


### 🔌 Setup Steps:
1. **Install the Arduino IDE.**
2. **Connect your Arduino board** to your PC using the USB cable.
3. **Select the correct board and COM port** from \`Tools > Board\` and \`Tools > Port\`.
4. **Write your first sketch**
`
,

    tags: ["Arduino", "Sensors", "Autonomous Navigation"],
    category: "Microcontrollers",
    author: "Sanskar Phougat"
  }
    ,
  {
    id: "2",
    title: "Infrared Sensors in Robotics",
    image: "https://www.circuits-diy.com/wp-content/uploads/2021/10/ir-infrared-sensor-module-circuit-electronic-project.jpg",
          insta: "https://www.instagram.com/kushal_m_06/",
    date: "202-06-22",
    readTime: "10 min read",
    excerpt:  "Discover how IR sensors enable object detection and line following in robots, and how to connect them with Arduino.",
    content: `
# 🔍 Understanding IR Sensors: Principles, Types, and Applications

Infrared (IR) sensors are essential components in modern electronics, used for detecting the presence, proximity, or movement of objects using **infrared radiation** — a form of light not visible to the human eye. In this blog, we’ll explore what IR sensors are, how they work, their types, practical applications, and how an IR sensor module functions.

---

## 🧠 What is an IR Sensor?

An **Infrared (IR) sensor** is an electronic device that detects infrared light emitted or reflected by objects. It plays a key role in:

- Object detection  
- Distance measurement  
- Motion sensing  
- Wireless communication  

---

## ⚙️ Working Principle

IR sensors typically work on two fundamental principles:

### 1. 🔁 Reflective Type (Proximity Sensor)

- **Components**: IR LED (Emitter) + Photodiode (Receiver)  
- **Working**: The IR LED emits infrared light. If an object is nearby, it reflects this light, which is then detected by the photodiode. The strength of the reflected light indicates the object's proximity and surface characteristics.

### 2. 🌡 Passive IR (PIR) Sensor

- **Working**: PIR sensors do not emit IR. Instead, they detect infrared radiation naturally emitted by warm objects (like humans). A change in the IR levels due to movement in the sensor’s field of view triggers detection. Commonly used in motion sensors.

---

## 📦 Types of IR Sensors

| Type      | Use Case                        | Example Use                             |
|-----------|----------------------------------|------------------------------------------|
| **Active** | Emit & detect IR light           | Object counters, obstacle detection in robots |
| **Passive**| Detect IR from warm objects      | Motion sensors in lights, alarms         |
| **Modulated** | Emit IR at specific frequency | TV remotes, IR communication             |

---

## 🔧 IR Sensor Module Working Explained

The IR Sensor Module commonly used in electronics projects is based on the **reflective principle**. Let’s break down the key components and their functionality:

### 🔩 Main Components

1. **IR LED (Emitter)**: Continuously emits infrared light.
2. **Photodiode (Receiver)**: Senses the reflected IR light from nearby objects.
3. **Op-Amp (LM358)**: Acts as a comparator to evaluate the signal from the photodiode.
4. **RV1 (10k Potentiometer)**: Used to fine-tune the sensor’s sensitivity.
5. **Resistors (R1, R2, R3)**: Handle biasing and current-limiting.
6. **Output Pin + Indicator LED**: Provides a digital output signal and visual feedback.

---

### ⚙️ How It Works

#### 1. **Emission & Detection**
- The IR LED emits IR light.
- When an object approaches, the light reflects back to the photodiode.

#### 2. **Signal Processing**
- The photodiode receives the reflected IR light and conducts electricity.
- This changes the voltage input to the **LM358** op-amp.

#### 3. **Comparator Action**
- The LM358 compares the photodiode voltage with a reference (set via RV1).
- If the object is close enough, it triggers a HIGH or LOW output depending on configuration.

#### 4. **Output Response**
- When an object is detected:
  - The **LED turns on**.
  - The **output pin** sends a HIGH/LOW digital signal to microcontrollers like **Arduino**.

---

### 🛠️ Tuning the Sensor

- Adjust the **potentiometer (RV1)** to control the detection range.
- Turning it clockwise or counter-clockwise changes the sensitivity threshold.

---

## 🧠 Applications of IR Sensors

IR sensors are used in a variety of industries:

- **Consumer Electronics**: TV remotes, automatic doors, home automation
- **Robotics**: Line-following, edge detection, object avoidance
- **Security Systems**: Motion detectors, intrusion alarms
- **Medical Devices**: Non-contact thermometers, pulse sensors
- **Industrial Use**: Flame detection, gas leakage sensing

---

## ⚠️ Limitations of IR Sensors

- **Black/dark objects** absorb IR, reducing detection accuracy.
- **Transparent materials** (like glass) may allow IR to pass through, making them hard to detect.
- **Ambient light**, especially **sunlight**, can interfere with the IR sensor’s signal.
- **Limited range** compared to alternatives like ultrasonic or LiDAR.

---

## 💡 Overcoming Limitations

To improve reliability:

- Use **modulated IR signals** to reduce ambient light interference.
- Apply **filters and software calibration** to enhance detection accuracy.
- Combine with other sensors such as **ultrasonic**, **LiDAR**, or **camera modules** for robust sensing in complex environments.

---

## ✅ Summary

IR sensors are versatile, affordable, and easy to integrate into a wide range of applications. Whether you're building a robot that follows lines or designing a touchless dispenser, understanding how IR sensors work is a foundational skill in electronics and embedded systems.

---

🛠️ Happy Making!

*Got questions or project ideas involving IR sensors? Join the discussion on our <a href="https://discord.gg/Jp4Kje999B" style="color:#1E90FF;  text-decoration: none;" target="_blank">Discord server</a> and share your builds with the community!*


    `,
    tags: ["Arduino", "Electronics", "Infrared Sensors"],
    category: "Sensors",
    author: "Kushal Makkar & Vanshika Aggarwal"
  },

  
  {
  id: 3,
  title: "Servo Motors: A Beginner's Guide",
  image: "https://soldered.com/productdata/2015/02/DSC_2916-Edit.jpg",
  insta: "https://www.instagram.com/maanya.g14/",
  date: "2025-06-29",
  readTime: "12 min read",
  excerpt: "Discover how servo motors enable precise motion control in robotics and automation, and how to connect them with your microcontroller.",
  content: `
# 🤖 Servo Motors 101: Principles, Types, Wiring, and Real-World Applications

Servo motors are compact, powerful, and precise — making them a favorite in robotics, automation, and DIY electronics. From robotic arms to camera gimbals, these little motors bring motion to life with pinpoint control. In this guide, you’ll learn what servo motors are, how they work, their types, wiring, real-world applications, and how to use them in your projects.

---

## 🧠 What is a Servo Motor?

A servo motor is a rotary actuator designed for precise control of angular movement. It's widely used where accurate shaft positioning is critical. Common features include:

- **Compact size**
- **Controlled rotation (0°-180° typical)**
- **Feedback loop for position accuracy**

---

## ⚙ Working Principle

Servo motors operate on a closed-loop control system. This means they constantly compare the actual shaft position with the desired position and make corrections if needed.

### 🔁 Feedback-Based Motion

**📩 Control Signal (PWM Input)**  
- Microcontroller sends a PWM signal.
- Pulse width determines the angle.

**🔄 Position Feedback**  
- A potentiometer inside the servo tracks shaft position.

**🧠 Control Circuit**  
- Compares current vs desired position and adjusts the motor.

---

## 🔌 Three-Wire Connection Explained

One of the simplest and most beginner-friendly motors, servos come with three colored wires, each serving a specific role:

| Wire Color | Purpose       | Connects To                        |
|------------|----------------|-------------------------------------|
| 🔴 Red     | Power (Vcc)    | 5V or external power source         |
| ⚫ Black/Brown | Ground (GND) | GND on your microcontroller or power supply |
| 🟡 Yellow/Orange/White | Signal (PWM) | PWM-capable pin on your microcontroller |

> 🧠 **Tip:** Always check the datasheet, as wire colors may vary slightly by brand.

---

## 🔄 Types of Servo Motors

| Type              | Description                       | Example Uses                  |
|-------------------|-----------------------------------|-------------------------------|
| Positional Servo  | Rotates to a specific angle (0°–180°) | Robotic arms, camera mounts  |
| Continuous Servo  | Rotates indefinitely like a DC motor | Mobile robots, conveyor belts |
| Linear Servo      | Converts rotary to linear motion   | RC cars, sliding doors        |

---

## 🧰 Inside a Servo Motor

Let's break down what makes a servo tick:

- **DC Motor**: Drives the rotation.
- **Gearbox**: Reduces speed, increases torque.
- **Potentiometer**: Monitors position of the shaft.
- **Control Circuit**: Compares position & corrects movement.

---

## ⚙ How It Works: Step-by-Step

1. **Send PWM Signal**  
   - 1 ms pulse → 0°  
   - 1.5 ms pulse → 90°  
   - 2 ms pulse → 180°

2. **Read Feedback**  
   - The potentiometer tracks current angle.

3. **Adjust Motor**  
   - Motor spins until shaft matches desired angle.

4. **Hold Position**  
   - Once there, servo stops but applies holding torque.

---

## 💻 Arduino + Servo: Simple Code Example

\`\`\`cpp
#include <Servo.h>

Servo myServo;

void setup() {
  myServo.attach(9);  // Signal pin connected to pin 9 on your microcontroller
}

void loop() {
  myServo.write(90);  // Move to 90°
  delay(1000);
  myServo.write(0);   // Move to 0°
  delay(1000);
}
\`\`\`
---
🛠️ Happy Making!

*Got questions or project ideas involving IR sensors? Join the discussion on our <a href="https://discord.gg/Jp4Kje999B" style="color:#1E90FF;  text-decoration: none;" target="_blank">Discord server</a> and share your builds with the community!*
`,
  tags: ["Electronics", "Servo Motors", "Microcontroller", "Robotics"],
  category: "Hardware",
  author: "Bhavyanshika Gupta and Maanya Gupta"
},

{
    id: 4,
    title:  "7-Segment Displays: Illuminating Numbers with Ease",
    image: "https://www.electronicsforu.com/wp-contents/uploads/2022/11/7-Segment-Display-Types.png",
    insta: "https://www.instagram.com/_shivansh.agarwal_/",
    date: "2025-07-06",
    readTime: "8 min read",
    excerpt: "Learn how 7-segment displays work to show numbers and characters, and explore practical wiring techniques to integrate them with microcontrollers.",
 content:`

7-segment displays are simple yet powerful electronic components used to visually represent numeric and limited alphabetic characters in electronic devices. In this blog, we’ll explore what 7-segment displays are, how they work, their types, practical applications, and how to control them effectively.

---

## 🧠 What is a 7-Segment Display?

A 7-segment display is an electronic display device that consists of seven LEDs (segments) arranged in a rectangular fashion to form numbers and some letters. An additional eighth segment (the decimal point) is often included.

They are widely used for:

- Displaying numeric information
- Simple alphabetic display
- Visual indicators in electronics

---

## ⚙️ Working Principle

A 7-segment display works by turning ON or OFF specific segments to form the desired character. Each segment is labeled as "a" through "g", with the optional decimal point labeled as "dp."

**1. 🛠️ Segment Activation**  
Each segment is an individual LED. By applying voltage to the correct combination of segments, you can form digits 0–9 and limited letters.

**2. 🔌 Current Control**  
Each LED requires current-limiting resistors to prevent damage.

---

## 📦 Types of 7-Segment Displays

| Type           | Description                                                     | Example Use                         |
|----------------|-----------------------------------------------------------------|-------------------------------------|
| Common Anode   | All anodes (+) connected; segments light when cathodes are LOW  | Clocks, counters                    |
| Common Cathode | All cathodes (-) connected; segments light when anodes are HIGH | Basic numeric displays, calculators |
| Multi-Digit    | Multiple digits in one package                                  | Timers, scoreboards                 |

---

## 🔧 Key Components of a 7-Segment Display Module

1. **7 LED Segments:** Labeled a–g  
2. **Decimal Point:** Optional eighth segment  
3. **Common Anode or Cathode Connection:** Determines wiring logic  
4. **Current-Limiting Resistors:** Added externally to protect segments

---

## ⚙️ How It Works

1. **Pin Control**  
   Each segment is connected to a microcontroller pin.

2. **Encoding Numbers**  
   To display a digit (e.g., 3), you light up segments a, b, c, d, g.

3. **Microcontroller Interface**  
   Use digital output pins to control each segment. For multi-digit displays, transistors or shift registers help manage multiple digits.

4. **Multiplexing**  
   For displays with multiple digits, multiplexing lights one digit at a time rapidly to reduce pin usage and power draw.

---

## 👩🏼‍💻 Complete Arduino Example Code for 7-Segment Display

Below is a **complete**, simplified example that uses an array to define the segment pattern for digits 0–9.

\`\`\`cpp
// 7-Segment Display Example Code (Common Cathode)
// Cycles through digits 0–9 every second using an array-based pattern.

const int segmentPins[7] = {10, 9, 8, 7, 6, 5, 4};

// Segment patterns for digits 0–9
const byte digits[10][7] = {
  {1,1,1,1,1,1,0}, // 0
  {0,1,1,0,0,0,0}, // 1
  {1,1,0,1,1,0,1}, // 2
  {1,1,1,1,0,0,1}, // 3
  {0,1,1,0,0,1,1}, // 4
  {1,0,1,1,0,1,1}, // 5
  {1,0,1,1,1,1,1}, // 6
  {1,1,1,0,0,0,0}, // 7
  {1,1,1,1,1,1,1}, // 8
  {1,1,1,1,0,1,1}  // 9
};

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(segmentPins[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i < 10; i++) {
    displayDigit(i);
    delay(1000);
  }
}

void displayDigit(int num) {
  for (int seg = 0; seg < 7; seg++) {
    digitalWrite(segmentPins[seg], digits[num][seg] ? HIGH : LOW);
  }
}
\`\`\`

✅ **How this works**

- **segmentPins[]** holds the Arduino pins for segments **a–g**.
- **digits[][]** holds ON/OFF patterns for each segment for numbers **0–9**.
- **setup()** sets the pins as outputs.
- **loop()** cycles through the digits, showing each for 1 second.
- **displayDigit()** updates all segments for the current digit.

---

## 🧠 Applications of 7-Segment Displays

- **Consumer Electronics:** Digital clocks, ovens, weighing scales
- **Robotics & Embedded Systems:** Sensor value displays, step counters
- **Industrial Equipment:** Machine counters, status indicators
- **Security Systems:** Keypad code displays, intrusion alarms

---

## ⚠️ Limitations of 7-Segment Displays

- Limited character set (mostly numbers and a few letters)
- Viewing angle and brightness issues in sunlight
- No advanced graphics or animation capability

---

## 💡 Overcoming Limitations

- Use 14-segment or dot matrix displays for full alphabets
- Add filters or diffusers for better visibility
- Combine with LCDs or OLEDs for complex display needs

---

## ✅ Summary

7-segment displays remain a fundamental and reliable way to show simple numerical data in electronic devices. With basic Arduino coding and minimal hardware, they can bring life to a variety of DIY, industrial, and commercial projects.

 ---
🛠️ Happy Making!

*Got questions or project ideas involving IR sensors? Join the discussion on our <a href="https://discord.gg/Jp4Kje999B" style="color:#1E90FF;  text-decoration: none;" target="_blank">Discord server</a> and share your builds with the community!*
 `
,

  tags: ["Electronics", "Displays", "7-Segment"],
  category: "Hardware",
    author: "Shivansh Agarwal"
  },

{
  id: 5,
  title: "LiPo Batteries: Tiny Cells, Massive Power",
  image: "https://robosynckits.in/wp-content/uploads/2021/06/or.png",
  insta: "https://www.instagram.com/rishabh.kapur/",
  date: "2025-07-13",
  readTime: "7 min read",
  excerpt: "Discover the fundamentals of Lithium Polymer (LiPo) batteries, their advantages for portable electronics and RC projects, and essential safety tips for charging and handling.",
  content: `
# 🔋 Understanding LiPo Batteries: Principles, Types, and Applications

Lithium Polymer (LiPo) batteries have become the power source of choice for modern electronics, drones, RC vehicles, robotics, and even electric vehicles. Their high energy density, lightweight nature, and ability to deliver high current make them a staple in both hobbyist and professional electronics.

In this blog, we’ll explore what LiPo batteries are, how they work, their types, safety considerations, applications, and tips on handling them effectively.

---

## 🧠 What is a LiPo Battery?

A LiPo (Lithium Polymer) battery is a rechargeable battery that uses a polymer electrolyte instead of a liquid one. Compared to traditional battery types like NiMH or lead-acid, LiPo batteries are:

- Lightweight and compact  
- Capable of delivering high discharge currents  
- Fast-charging and energy-dense

These characteristics make them ideal for high-performance devices like drones, RC cars, and portable electronics.

---

## ⚙️ Working Principle

LiPo batteries operate on the principle of intercalation and deintercalation of lithium ions between the anode (usually graphite) and cathode (typically lithium cobalt oxide or other lithium metal oxides) through a polymer-based electrolyte.

### 🔁 Charging Process

- Lithium ions move from cathode to anode  
- Energy is stored chemically  
- Must be done with a constant current / constant voltage (CC/CV) charger

### 🪫 Discharging Process

- Lithium ions travel back from anode to cathode  
- This flow of ions releases electrical energy to power devices

---

## 📦 LiPo Battery Structure

LiPo batteries are composed of cells connected in series and/or parallel:

| Term | Meaning |
|------|---------|
| **1S, 2S, 3S...** | Number of cells in series (Each cell = 3.7V nominal) |
| **mAh** | Battery capacity (milliamp-hours) |
| **C-rating** | Discharge rate — how fast current can be drawn |

### 🔩 Internal Components

- Anode (Graphite)  
- Cathode (LiCoO₂ or similar)  
- Polymer Electrolyte  
- Separator film  
- Protective casing

---

## 🧪 Key Terms Explained

| Term | Description |
|------|-------------|
| **Nominal Voltage** | 3.7V per cell (can go from 4.2V full to 3.0V empty) |
| **C-Rating** | Multiplier of capacity that defines max current (e.g., 20C for 1000mAh = 20A) |
| **Balance Charging** | Charging method that ensures all cells reach the same voltage |
| **Burst Rate** | Maximum current the battery can supply for a few seconds |

---

## 🧠 Applications of LiPo Batteries

LiPo batteries are widely used across various industries:

| Industry | Use Case |
|----------|----------|
| 🛸 **Drones** | Lightweight + High Discharge Rate = Longer flight |
| 🚗 **RC Vehicles** | Provides burst power for acceleration |
| 📱 **Wearables** | Thin form factor fits into smartwatches and fitness bands |
| 🤖 **Robotics** | Powers motors, sensors, and controllers in compact setups |
| 🧪 **Prototyping** | Popular in Arduino, Raspberry Pi, and IoT projects |
| 🚲 **eBikes & Scooters** | High-capacity packs for urban transport |

---

## ⚠️ Limitations of LiPo Batteries

Despite their many benefits, LiPo batteries have a few downsides:

- Sensitive to physical damage  
- Requires careful charging and storage  
- Limited cycle life compared to Li-ion (300–500 cycles typical)  
- Expensive compared to older technologies  
- Prone to puffing, swelling, or combustion if misused

---

## 💡 Best Practices for Longevity

To get the most out of your LiPo battery:

- ✅ Charge slowly at 1C for safer battery health  
- ✅ Store at room temperature, in a fireproof container  
- ✅ Regularly inspect for physical damage  
- ✅ Avoid full discharge during use  
- ✅ Always balance charge when possible

---

## 🧠 What is C-Rating?

**C-Rating** is a multiplier that defines the maximum continuous discharge current of the battery relative to its capacity.

**Discharge Rate Formula:**  
\`\`\`
Discharge Current (A) = Battery Capacity (Ah) × C-Rating
\`\`\`

> 🔁 *Note: Convert mAh to Ah by dividing by 1000.*

---

## 🔢 Example: Discharge Time Estimate

To estimate the discharge time for a 3S LiPo battery powering 4 Johnson 300 RPM geared motors:

### 🔍 Step 1: Battery Specs (Assumed)

- 3S LiPo = 3 cells in series = 11.1V nominal (3.7V × 3)  
- Capacity = 2200 mAh = 2.2 Ah

### 🔧 Step 2: Johnson 300 RPM Gear Motor Specs (Estimates)

Typical Johnson 300 RPM geared DC motor draws:  

- No-load current: ~0.3 A (per motor)  
- Stall current: ~2–3 A (per motor)  
- Typical operating current (light load): ~0.8–1.2 A (per motor)

We’ll assume 1 A per motor under load:  
\`\`\`
Total current draw = 4 motors × 1 A = 4 A
\`\`\`

### ⏱️ Step 3: Discharge Time Calculation

\`\`\`
Discharge Time (hours) = Battery Capacity (Ah) / Load Current (A)
Discharge Time = 2.2 Ah / 4 A = 0.55 hours ≈ 33 minutes
\`\`\`

### ⚠️ Realistic Expectation

You should only use 80% of the battery to avoid deep discharge:  
\`\`\`
Usable capacity = 2.2 × 0.8 = 1.76 Ah
Realistic run time = 1.76 / 4 = 0.44 hours ≈ 26 minutes
\`\`\`

✅ **Estimated Runtime:** 26–33 minutes (depending on load, battery health, and cutoff voltage).

---

## ✅ Summary

LiPo batteries are powerful energy sources that drive today’s most exciting technologies — from drones to robotics and everything in between. While they offer incredible performance in compact sizes, safe handling and proper maintenance are essential to ensure long-lasting and hazard-free use.

Whether you're a hobbyist building an FPV drone or an engineer powering a wearable, understanding how LiPo batteries work and how to care for them is key to unlocking their full potential.

---

🛠️ Happy Making!

*Got questions or project ideas involving LiPo batteries? Join the discussion on our <a href="https://discord.gg/Jp4Kje999B" style="color:#1E90FF; text-decoration: none;" target="_blank">Discord server</a> and share your builds with the community!*
`,
  tags: ["Electronics", "Power", "Batteries", "LiPo"],
  category: "Hardware",
  author: "Rishabh Kapur"
}

  // Add more blog objects...
];
