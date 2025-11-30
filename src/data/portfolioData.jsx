
export default [
  {//robodog
    title: 'Robodog',
    img: '/projectGallery/Robodog/robodogpic1.png',
    media: [
      '/projectGallery/Robodog/robodogpic2.jpg',
      '/projectGallery/Robodog/robodog1.mp4',
      '/projectGallery/Robodog/robodog2.mp4'],
    description: `
# 🐕 Robodog: ROS-Based Quadruped Restoration
  

### 📖 Overview

I was tasked with reviving a deprecated Quadruped Robot that was non-functional. The project involved diagnosing a distributed **ROS 1 (Noetic)** system, troubleshooting network constraints, and performing component-level hardware repairs to restore full locomotion.

-----

## 📡 System Architecture

The robot operates on a distributed ROS network strategy to offload heavy computation from the onboard computer.

  * **ROS Master (Laptop):** Handles the \`roscore\`, processes the PS4 controller input (via \`joy\` node), and calculates gait kinematics.
  * **ROS Slave (Robodog/Raspberry Pi):** Subscribes to motion commands and drives the servos via the PCA9685 interface.
  * **Communication:** Over Wi-Fi via TCP/IP.

<!-- end list -->

\`\`\`mermaid
graph LR
    subgraph Laptop [ROS Master]
    A[PS4 Controller] -->|Bluetooth| B(Joy Node)
    B -->|/cmd_vel| C(Gait Planner)
    end
    
    C -.->|Wi-Fi / ROS Topic| D(Locomotion Node)
    
    subgraph Robodog [ROS Slave]
    D -->|I2C| E[PCA9685 Driver]
    E -->|PWM| F[12x Servos]
    end
\`\`\`

-----

## 🛠️ The Debugging Log

### Phase 1: The Network & Firewall Block 🧱

**The Issue:** The system relies on the Laptop (Master) talking to the Pi (Slave). In Week 1, the nodes could not discover each other.
**The Investigation:** While \`ssh\` appeared to work intermittently, ROS topics were not syncing. I realized the campus Wi-Fi firewall was blocking the dynamic high-range ports required for ROS XML-RPC negotiation.
**The Fix:** I reconfigured the network environment to bypass the firewall, allowing the \`ROS_MASTER_URI\` and \`ROS_IP\` environment variables to handshake correctly.

### Phase 2: Input Latency & Teleoperation 🎮

**The Issue:** Once the network was up, the robot was unresponsive or erratic.
**The Investigation:** The PS4 controller, connected to the Laptop (Master), suffered from severe Bluetooth packet loss. This resulted in the \`joy\` node publishing jerky, discontinuous values to the robot.
**The Fix:** Swapped to a stable controller and tuned the ROS subscriber queue size to handle data more efficiently.
**Result:** The Robodog took its first steps.

### Phase 3: Thermal Shutdown (The Crash) 🔥

**The Event:** During a standard gait test, the robot collapsed.
**The Data:** I analyzed the ROS logs (\`rosout\`) and telemetry.

\`\`\`bash
[WARN] [163214.22]: Servo_Cluster_A temp limit reached (85°C)
[ERROR] [163214.55]: EMERGENCY STOP TRIGGERED
\`\`\`

**The Root Cause:** The servos lacked active cooling. The intense torque required for the gait caused thermal throttling, triggering a safety shutdown.
**The Fix:** Engineered and attached aluminum heatsinks to the servo casings for passive heat dissipation.

### Phase 4: The Hardware Failure (PCA9685) ⚡

**The Symptom:** After fixing the cooling, the robot was rebooted. The ROS topics were publishing, the software was green, but the motors were dead.
**The Diagnosis:**

1.  Checked \`rostopic echo /cmd_vel\` -\> Data was flowing ✅
2.  Checked Power Distribution -\> Voltage nominal ✅
3.  Checked I2C Bus (\`i2cdetect -y 1\`) -\> **Device Missing** ❌
    **The Discovery:** A microscopic inspection of the **PCA9685 PWM Driver** revealed a sheared SMD capacitor and a damaged I2C trace, likely caused by the mechanical shock of the previous fall.
    **The Resurrection:** I desoldered the broken driver, installed a replacement unit, and secured the capacitors.

-----

## 🏆 Final Status

The robot is fully operational. The distributed ROS architecture now functions with low latency, and the hardware modifications allow for extended runtime without thermal throttling.

-----

## 🧰 Tech Stack

| Category | Technology |
| :--- | :--- |
| **Middleware** | **ROS 1 Noetic** (Master/Slave Config) |
| **Hardware** | Raspberry Pi 4, PCA9685 16-Channel Driver |
| **Actuators** | 12x High-Torque Servos (3 DOF per leg) |
| **Input** | DualShock 4 (via \`joy\` ROS package) |
| **Protocols** | SSH, I2C, TCP/IP (XML-RPC) |
    `,

  },
  {//dronebox
    title: 'Drone Box',
    img: '/projectGallery/dronebox/droneboxpic2.png',
    media: [
      '/projectGallery/dronebox/dronebox1.mp4',
      '/projectGallery/dronebox/dronebox2.mp4',
      '/projectGallery/dronebox/droneboxpic1.png',
      '/projectGallery/dronebox/droneboxpic2.png',
      '/projectGallery/dronebox/droneboxpic3.png'
    ],
    description: `
# 🚁 Medical Drone Delivery: The Payload Latch System

### 🏥 Overview

Part of a larger initiative to develop an autonomous **Medical Delivery Drone** capable of transporting emergency supplies to remote areas. My focus was the physical interface: the **"Smart Box"** and the **Electromechanical Latching Mechanism** that secures the payload during flight and releases it upon arrival.

-----

## 🎯 The Challenge

The drone needed to carry a sensitive medical payload. We couldn't just tape a box to the bottom; we needed a system that was:

1.  **Secure:** capable of holding the box during high-vibration flight and wind gusts.
2.  **Automated:** capable of unlatching via a remote command (triggered by the mobile app).
3.  **Lightweight:** minimizing impact on the drone's battery life and flight time.

-----

## ⚙️ My Role: Mechanical Design & SolidWorks

While my teammate developed the mobile application for the delivery logic, I owned the **Hardware Design Lifecycle**.

### 1. The Box Design 📦

I designed a custom payload container in **SolidWorks**.

  * **Aerodynamics:** Shaped to reduce drag during forward flight.
  * **Protection:** Reinforced structure to protect medical supplies (vials/syringes) from impact.
  * **Integration:** Modeled mounting points specifically for the latching mechanism to sit flush against the drone frame.

### 2. The Latch Mechanism (The Core Logic) 🔒

This was the critical engineering problem. I engineered a servo-driven locking system.

  * **Actuation:** utilized a high-torque **Servo Motor**.
  * **Mechanism:**
      * **LATCH STATE (Locked):** The servo rotates an arm/pin into a custom-designed slot on the box lid, physically preventing separation.
      * **UNLATCH STATE (Drop):** Upon receiving a signal from the app, the servo rotates 90 degrees, retracting the pin and allowing gravity to gently release the payload.
  * **Tolerance Analysis:** I performed interference detection in SolidWorks to ensure the mechanism wouldn't jam due to dust or friction.

> **Design Note:** The geometry of the latch had to be precise—tight enough to stop the box from rattling, but loose enough so the servo didn't stall while trying to pull the pin out.

-----

## 🛠️ Tech & Tools Used

| Category | Tool/Component |
| :--- | :--- |
| **CAD Software** | **SolidWorks** (3D Modeling, Assembly, Simulation) |
| **Actuation** | SG90 / MG996R Servos (depending on load) |
| **Manufacturing** | 3D Printing (PLA/ABS for prototyping) |
| **Collaboration** | Interfacing with the Software Team (App triggers) |

-----

## 🚀 Key Takeaways

  * **DFM (Design for Manufacturing):** Learned how to design parts in SolidWorks that are actually printable and functional in the real world.
  * **Mechatronic Integration:** Bridging the gap between a mechanical design (the latch) and an electronic trigger (the app).
  * **Constraint Management:** Balancing the need for a strong mechanism against the strict weight limits of the drone.
`,

  },
  {//wall-e
    title: 'WALL-E',
    img: '/projectGallery/WALL-E/wall-epic1.jpg',
    media: [
      '/projectGallery/WALL-E/wall-epic2.jpg',
      '/projectGallery/WALL-E/wall-epic3.jpeg',
      '/projectGallery/WALL-E/wall-epic4.jpeg'],
    description: `
🤖 WALL-E: Healthcare Companion Robot
🏥
 The Concept
Designed for a robotics competition, our team was challenged to build a novel application on top of the open-source SCUTTLE robotics skeleton. We chose Healthcare.

Hospitals can be intimidating, especially for children. Our goal was to engineer a robot that wasn't just functional, but emotionally intelligent. Inspired by the beloved character WALL-E, we designed a system capable of alleviating patient anxiety while assisting hospital staff.

-----

🏆
 Achievements
🥇
 Prize Winner: Our team secured a prize in the competition for the Best Application Design. The judges recognized the project for its innovative approach to Human-Robot Interaction (HRI) and its potential impact on pediatric patient care.

-----

🌟
 Key Features
Affective Computing: Designed with a "friendly" aesthetic to reassure patients and facilitate play.
Autonomous Tracking: Implemented Person Following algorithms to trail doctors or nurses through wards.
Patient Monitoring: Equipped to locate and track patients within a defined zone.
Staff Assist: Acts as a mobile carrier for small medical supplies or charts.

-----

🛠️
 Tech Stack
| Component | Usage |
| :--- | :--- |
| SCUTTLE Ecosystem | Open-source mobile base and skeleton |
| Raspberry Pi | Onboard computing and sensor management |
| Computer Vision | Object detection for person tracking |
| Python | Logic control and behavior scripts |

-----

💡
 Key Takeaway
Robotics is about the End-User.
This project highlighted that raw functionality (moving from A to B) isn't enough in healthcare; the form factor and user experience are just as critical as the code. A robot that scares a patient has failed, no matter how good the algorithms are.
    `,

  },
  {//Mobile Animal Deterrent System
    title: 'Mobile Animal Deterrent System',
    img: '/projectGallery/MADS/madspic1.jpeg',
    media: [
      '/projectGallery/MADS/mads3.mp4',
      '/projectGallery/MADS/mads1.mp4',
      '/projectGallery/MADS/mads2.mp4'],
    description: `
# 🚜 Animal Deterrent: Teleoperation Subsystem

  

### 📖 Overview

This project involved designing a mobile robot intended for perimeter control and animal deterrence. While the wider team focused on the deterrent payloads (strobe lights and ultrasonic speakers), **my specific responsibility was the Teleoperation Subsystem**—ensuring the robot could be driven remotely with low latency from any device on the network.

-----

## 🎯 My Scope: The Drive System

I was in charge of the full control stack, from the user interface down to the wheel traction.

### 1\. Web-Based Control Interface (Python Flask) 💻

Instead of building a native mobile app (which requires installation), I developed a **universal web interface**.

  * **Host:** Raspberry Pi running **Ubuntu Server**.
  * **Framework:** Python Flask.
  * **Function:** Once I SSH'd into the robot to start the server, any device (phone, laptop, tablet) on the local Wi-Fi could access the controls via a simple IP address URL.

### 2\. The Communication Bridge 🌉

I engineered the link between the high-level operating system and the low-level hardware.

  * **The Link:** USB Serial connection between the Raspberry Pi and an Arduino Uno.
  * **The Logic:**
      * The Python script captures button presses from the website.
      * It serializes these commands into byte strings (e.g., \`b'F'\` for Forward).
      * The Arduino parses the serial stream in real-time to trigger the motors.

### 3\. Motor Driver Implementation ⚙️

I selected and wired the **MC33886 Dual H-Bridge Driver** to handle the heavy current load of the 12V DC Motors.

  * **Why MC33886?** It offered robust protection against inductive voltage spikes and handled the continuous current required for skid-steering on rough terrain.

-----

## 📡 System Architecture (Data Flow)

\`\`\`mermaid
graph LR
    subgraph My Responsibility [Teleoperation Stack]
    A[User Device] -->|Wi-Fi HTTP| B[Raspberry Pi / Flask]
    B -->|Serial UART| C[Arduino Uno]
    C -->|PWM Signal| D[MC33886 Driver]
    D -->|12V Power| E((High Torque Motors))
    end
    
    subgraph Teammates [Deterrent Payload]
    C -.-> F[Strobe Lights]
    C -.-> G[Ultrasonic Speakers]
    end
\`\`\`

-----

## 🤝 Team Collaboration

  * **Me (Teleoperation Lead):** Responsible for mobility, web networking, and motor control logic.
  * **Teammates:** Responsible for the "Deterrent" aspects (integrating speakers and high-intensity lights to scare animals).

-----

## 🧰 Tech Stack (My Contribution)

| Layer | Technology |
| :--- | :--- |
| **Web Backend** | Python Flask |
| **Networking** | SSH, TCP/IP (Local Host) |
| **Microcontroller** | Arduino (Serial Communication) |
| **Hardware Driver** | **MC33886** (Dual H-Bridge) |
| **OS** | Ubuntu Linux (on Raspberry Pi) |

-----

## 💡 Key Takeaway

**Universal Accessibility:** By using a web server instead of a custom app, I ensured that anyone on the team could control the robot instantly without software compatibility issues (Android vs. iOS).
    `,

  },
  {//Automated Driver Test Results
    title: 'Automated Driver Test Results',
    img: '/projectGallery/ADTR/adtrpic4.jpg',
    media: [
      '/projectGallery/ADTR/adtrpic3.png',
      '/projectGallery/ADTR/adtrpic1.jpg',
      '/projectGallery/ADTR/adtrpic2.jpg',
      '/projectGallery/ADTR/adtrpic4.jpg',
      '/projectGallery/ADTR/adtrpic5.jpg',
      '/projectGallery/ADTR/adtr1.mp4',
    ],
    description: `
# 🚗 Automated Driving Test System (FYP)

  

### 📖 Overview

My Final Year Project focused on modernizing the driver licensing process. The goal was to eliminate human bias by creating an **Automated Evaluation System** that quantitatively measures a student driver's performance.

The system is a hybrid solution combining **IoT Sensor Data** (for physical control checks) and **Computer Vision** (for lane adherence), all visualized on a custom web dashboard.

> **🏆 Achievement:** This project was awarded the **Silver Medal** at the **Inventopia** Innovation Competition.

-----

## 🛠️ System Modules

### 1\. The Hardware Monitor (Arduino) 🤖

This module focused on the physical mechanics of driving. I engineered a sensory array connected to the vehicle's controls.

  * **Hand Placement:** Sensors on the steering wheel ensured the driver maintained the "10 and 2" or "9 and 3" position for safety.
  * **Steering Accuracy:** Monitored the smoothness and angle of steering inputs to detect jerky or dangerous maneuvers.
  * **Communication:** The Arduino processed this data in real-time and transmitted it via **Serial Communication** to the host computer.

### 2\. The Interactive Dashboard (Flask) 💻

I developed a web-based command center using **Python Flask**. This wasn't just a data logger; it was an interactive training platform.

  * **Real-Time Visualization:** Using \`pyserial\`, the Flask backend read the Arduino's data stream and plotted steering/hand metrics live on the screen.
  * **Gamified Training:** To help students practice, I built an **interactive lane-changing game** embedded within the dashboard. Users controlled the on-screen car using the actual physical steering wheel setup, bridging the gap between simulation and reality.

### 3\. Automated Video Analysis (Computer Vision) 📹

  * *Note: This module acted as a post-test validator.*
  * The system accepted video uploads of the driving session. The software analyzed the footage to generate a Pass/Fail result based specifically on **Lane Keep capabilities** and road adherence.

-----

## 📡 Data Flow

\`\`\`mermaid
graph LR
    A[Physical Steering Wheel] -->|Sensors| B(Arduino)
    B -->|Serial Data Stream| C[Flask Server / Laptop]
    C -->|Real-Time Feedback| D[Web Dashboard]
    D -->|Input Control| E[Training Game]
    F[Camera Recording] -.->|Upload| C
\`\`\`

-----

## 🧰 Tech Stack

| Component | Technology |
| :--- | :--- |
| **Microcontroller** | Arduino (Sensor Logic) |
| **Backend** | **Python Flask** |
| **Communication** | Serial (UART) |
| **Frontend** | HTML/JS (Dashboard & Game) |
| **Validation** | Computer Vision (Lane Detection) |

-----

## 💡 Key Takeaway

**Gamification in Engineering:** The inclusion of the interactive game turned a standard monitoring tool into an active learning device. It proved that we could use the same sensors for *testing* a student to also *train* them in a safe, virtual environment before they hit the road.
    `,

  },


]