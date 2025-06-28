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
}
    ,
  // Add more blog objects...
];
