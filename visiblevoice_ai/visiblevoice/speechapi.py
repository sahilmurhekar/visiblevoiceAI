import os
from gtts import gTTS

def sign_speech():
    with open("input.txt", "r") as file:
        text = file.read()

    language = "en-au"

    tts = gTTS(text=text, lang=language, slow=False)

    tts.save(r"D:\visiblevoice_ai\static\output.mp3")


