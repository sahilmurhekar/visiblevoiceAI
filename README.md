

# VisibleVoice.ai

VisibleVoice.ai is a web application designed to facilitate communication for individuals who use sign language. The project leverages frontend technologies (HTML, CSS, JS) for the user interface and interaction, while the backend is powered by Django framework for processing and interpreting the sign language gestures.

## Overview

VisibleVoice.ai aims to bridge communication barriers by providing a platform where sign language users can interact more seamlessly with others. The application detects sign language through a webcam or camera input, processes them in real-time, and provides corresponding textual or auditory output.

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

### Sign Language Detection and Voice Conversion with Real-Time Machine Learning
This project aims to develop a real-time system for sign language detection and conversion to spoken voice using machine learning techniques.

### Project Description
This system utilizes a combination of computer vision and machine learning to achieve its goal. The core functionalities are:

### Sign Language Detection:
Utilizes OpenCV to capture video input from a webcam.
Employs MediaPipe's hand pose estimation library for accurate hand detection and landmark tracking.
Trains a machine learning model (potentially using TensorFlow or Scikit-Learn) to recognize different sign language gestures from the extracted hand features.
Speech Synthesis:
Leverages pre-trained speech synthesis models to convert the detected sign language gestures into corresponding spoken words.
Integrates audio output capabilities for real-time speech generation.
Computer Vision:
OpenCV: Used for video capture, hand detection, and image processing tasks.
MediaPipe: Provides pre-trained hand pose estimation models for accurate landmark detection.
Machine Learning:
TensorFlow, Scikit-Learn: Potential libraries for training and deploying the sign language recognition model.
Pickle: Used for saving and loading trained models.
We also have made a voice to image model using whisper api and ipython

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
git clone https://github.com/sahilmurhekar/visiblevoice.ai.git

2. Navigate to the project:
cd visiblevoice.ai

3. Install dependencies:
pip install -r requirements.txt

4. Run the Django development server:
python manage.py runserver

# How to use

Pefer WORKFLOW.png and SIGNS.jpg



