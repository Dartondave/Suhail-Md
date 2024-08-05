import os
import requests
from whatsapp_bot import Bot

class SavePPPlugin:
    def __init__(self, bot: Bot):
        self.bot = bot
        self.pp_dir = 'profile_pictures'

    def handle_message(self, message: str):
        if message.startswith('.getpp'):
            user_id = message.split(' ')[1]
            self.save_profile_picture(user_id)

    def save_profile_picture(self, user_id: str):
        pp_url = self.get_profile_picture_url(user_id)
        if pp_url:
            response = requests.get(pp_url)
            if response.status_code == 200:
                with open(os.path.join(self.pp_dir, f'{user_id}.jpg'), 'wb') as f:
                    f.write(response.content)
                self.bot.send_message(f'Profile picture saved for {user_id}')
            else:
                self.bot.send_message(f'Failed to retrieve profile picture for {user_id}')
        else:
            self.bot.send_message(f'Failed to retrieve profile picture URL for {user_id}')

    def get_profile_picture_url(self, user_id: str):
        # Replace with your API endpoint or logic to retrieve the profile picture URL
        api_endpoint = f'(link unavailable)'
        response = requests.get(api_endpoint)
        if response.status_code == 200:
            return response.json()['url']
        else:
            return None