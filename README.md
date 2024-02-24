

# VisibleVoice.ai

VisibleVoice.ai is a web application designed to facilitate communication for individuals who use sign language. The project leverages frontend technologies (HTML, CSS, JS) for the user interface and interaction, while the backend is powered by Django framework for processing and interpreting the sign language gestures.

## Overview

VisibleVoice.ai aims to bridge communication barriers by providing a platform where sign language users can interact more seamlessly with others. The application detects sign language gestures through a webcam or camera input, processes them in real-time, and provides corresponding textual or auditory output.

## Features

- **Sign Language Detection:** The application utilizes computer vision techniques to recognize and interpret various sign language gestures.
- **User-Friendly Interface:** The frontend is designed with accessibility in mind, featuring clear instructions and intuitive controls.
- **Real-Time Processing:** The system processes gestures in real-time, enabling smooth and immediate communication.

## Technologies Used

### Frontend
- **HTML:** Provides the structure and semantics of the web application.
- **CSS:** Styles the HTML elements for a visually appealing and user-friendly interface.
- **JavaScript:** Implements interactive features and communicates with the backend for gesture processing.

### Backend
- **Django Framework:** A high-level Python web framework that handles backend logic, including gesture recognition and interpretation.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/your-username/visiblevoice.ai.git

2. Navigate to the project
cd visiblevoice.ai

3. Install dependencies:
  pip install -r requirements.txt

4. Run the Django development server:
  python manage.py runserver

