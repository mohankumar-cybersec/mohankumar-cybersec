# LifeGuard Maternal AI
**"Saving Mothers with Real-Time Data Triage"**

---

## 🚩 The Problem
Maternal mortality in developing regions remains high due to delayed intervention for critical conditions (like Preeclampsia). Expectant mothers often lack immediate access to doctors, and generic health tracker apps fail to trigger **real-world emergency responses** when it matters most.

## 💡 Our Solution
**LifeGuard** is an intelligent AI backend that transforms simple voice notes into life-saving actions.
1.  **Monitors** patient symptoms via natural language (SpeakSpace).
2.  **Analyzes** severity on a 0-5 medical scale.
3.  **Triggers** real-time interventions:
    *   **CRITICAL (Tier 1):** Immediate **Twilio Voice Call** to the Doctor + Red Screen Alert.
    *   **MODERATE (Tier 2):** Instant **SMS Alert** to the Doctor.
    *   **NORMAL (Tier 3):** Logs data directly to a Weekly Report.
4.  **Schedules** medication reminders and doctor appointments automatically.

---

## 🛠️ Technology Stack
*   **Backend**: Next.js (App Router), TypeScript
*   **Voice/SMS**: Twilio API
*   **Hosting**: Render (Cloud)
*   **AI Interface**: SpeakSpace

---

## 🚀 Setup Instructions (For Judges)

### 1. Live API Endpoint (Functional)
**URL**: `https://lifeguard-pregnancy.onrender.com/api/pregnancy`
**Method**: `POST`
**Authorization**: None required.

### 2. How to Test in SpeakSpace
1.  Create a **Custom Action** named `LifeGuard`.
2.  Paste the **Live API URL**.
3.  **Prompt Configuration (Copy & Paste):**
    ```json
    You are a Maternal Health AI. Return ONLY JSON.
    1. SETUP: { "type": "setup", "data": { "name": "User", "current_week": 20, "edd": "2025-01-01", "doctor_name": "Dr. A", "doctor_phone": "+919944649978", "medicine": {"name": "Iron", "dosage": 200, "freq": 2, "total": 30} } }
    2. DAILY_LOG: { "type": "daily_log", "data": { "symptoms": ["pain"], "severity": 5, "fetal_movement": "normal" } }
    3. DOUBT: { "type": "doubt", "data": { "text": "question" } }

    User Input: {{user_input}}
    ```

### 3. Test Scenarios (Try these inputs!)
*   **🔴 Critical Test**: "I am bleeding heavily and feel faint."
    *   *Result:* Triggers a **Real Phone Call** to the Doctor.
*   **🟡 Moderate Test**: "I have vomiting and cramps."
    *   *Result:* Triggers an **SMS Alert** to the Doctor.
*   **🟢 Normal Test**: "I feel the baby kicking."
    *   *Result:* Logs "Normal" status.

---

## 💻 Local Development Setup

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Environment Variables**
    Create `.env.local` (see `.env.example`):
    *   `TWILIO_ACCOUNT_SID`
    *   `TWILIO_AUTH_TOKEN`
    *   `TWILIO_PHONE_NUMBER`

3.  **Run Server**
    ```bash
    npm run dev
    ```

---

**Built by Team LifeGuard for SpeakSpace Hackathon 2025**
