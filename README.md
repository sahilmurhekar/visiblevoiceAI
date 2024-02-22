# Langdetect

Sign Language Detection and Voice Conversion with Real-Time Machine Learning
This project aims to develop a real-time system for sign language detection and conversion to spoken voice using machine learning techniques.

Project Description
This system utilizes a combination of computer vision and machine learning to achieve its goal. The core functionalities are:

Sign Language Detection:
Utilizes OpenCV to capture video input from a webcam.
Employs MediaPipe's hand pose estimation library for accurate hand detection and landmark tracking.
Trains a machine learning model (potentially using TensorFlow or Scikit-Learn) to recognize different sign language gestures from the extracted hand features.
Speech Synthesis:
Leverages pre-trained speech synthesis models to convert the detected sign language gestures into corresponding spoken words.
Integrates audio output capabilities for real-time speech generation.
Technology Stack
Frontend:
HTML, CSS, JavaScript: Building the user interface and web application components.
Next.js: Framework for creating server-rendered and statically generated web applications.
Backend:
Node.js: Running the server-side logic and API endpoints.
Computer Vision:
OpenCV: Used for video capture, hand detection, and image processing tasks.
MediaPipe: Provides pre-trained hand pose estimation models for accurate landmark detection.
Machine Learning:
TensorFlow, Scikit-Learn: Potential libraries for training and deploying the sign language recognition model.
Pickle: Used for saving and loading trained models.
