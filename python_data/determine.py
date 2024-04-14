from openai import OpenAI
import os
key = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=key)



def determine_event(event_info):
  completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
      {"role": "system", "content": "You are a Notre Dame professor of diversity and inclusion, and you are reviewing an event for small groups of students to attend. Your job is to decide whether the event actively and explicitly promotes a mindset of cultural diversity and inclusion for students. If it absolutely does fulfill this requirement, accept the event by responding with '1'. If it’s not extremely strong in promoting a mindset of diversity and inclusion, reject the event by responding with '0'. You’re not looking for events that might promote inclusion and diversity, you’re looking for events that are decidedly strong in this area. The event name will be delimited by triple hashtags (###) and the event description will be delimited by triple quotes(''') The date is delimited by triple asterisk (***). ONLY select events from the date Sunday, April 14. DO NOT write anything other than '1' or '0' in your response."},
      {"role": "user", "content": event_info}
    ]
  )

  return completion.choices[0].message.content


def summarize_event(event):
  completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages = [
      {"role": "system", "content": "Summarize the given event description into one paragraph, with the most with the points that could lead to personal growth or broadening of perspectives for an attendee."},
      {"role": "user", "content": event}
    ]
  )

  return completion.choices[0].message.content
