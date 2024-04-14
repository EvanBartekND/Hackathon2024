from bs4 import BeautifulSoup
import requests
import re
import determine
import json

class Event: 
    def __init__(self, name="", description="", location="", time=""):
        self.name = name
        self.description = description
        self.location = location
        self.time = time

def get_tags(url):
    tags_dict = dict()
    result = requests.get(url)
    doc = BeautifulSoup(result.text, "html.parser")

    tags_dict['a_tags'] = [tag for tag in doc.find_all("a") if tag.find_parents(class_="card-body")]
    tags_dict['p-time_tags'] = [tag for tag in doc.find_all("p", class_="event-time") if tag.find_parents(class_="card-body")]
    tags_dict['p-loc_tags'] = [tag for tag in doc.find_all("p", class_="event-location") if tag.find_parents(class_="card-body")]
    return tags_dict

def get_events_info(tags_dict):
    events_list = []
    events_tags = [tag for tag in tags_dict['a_tags'] if tag.find_parents(class_="list-events")]
    for i in range(len(events_tags)):
        events_list.append(Event())
        events_list[i].name = process_text(tags_dict['a_tags'][i].text)
        events_list[i].time = process_text(tags_dict['p-time_tags'][i].text)
        events_list[i].location = process_text(tags_dict['p-loc_tags'][i].text)
        events_list[i].description = get_description(tags_dict['a_tags'][i].get('href'))
    return events_list

def process_text(string):
    string = string.replace('\n', ' ').replace('\t', ' ').rstrip()
    # string still had a bunch of extra spaces
    return re.sub(r'\s+', ' ', string)

def get_description(href):
    full_url = f'https://events.nd.edu/{href}'
    result = requests.get(full_url)
    doc = BeautifulSoup(result.text, "html.parser")
    p_desc_tags = [tag for tag in doc.find_all("p") if tag.find_parents(class_="article-content")]
    if not p_desc_tags:
        p_desc_tags = [tag for tag in doc.find_all("div") if tag.find_parents(class_="article-content")]
    descr_string = ""
    for tag in p_desc_tags:
        descr_string = f'{descr_string} {tag.text}'
    
    return descr_string

def check_url(url):
    result = requests.get(url)
    doc = BeautifulSoup(result.text, "html.parser")
    a_tags = [tag for tag in doc.find_all("a") if tag.find_parents(class_="card-body")]
    events_tags = [tag for tag in a_tags if tag.find_parents(class_="list-events")]
    try: 
        x = events_tags[0]
        return 1
    except IndexError: 
        return 0


def main():
    page = 0
    events_list=[]
    while(1):
        page += 1
        url = f'https://events.nd.edu/events/page/{page}/'
        if not check_url(url):
            break
        tags_dict = get_tags(url)
        events_list.extend(get_events_info(tags_dict))

    json_arr = []
    for i, event in enumerate(events_list):
        if(int(determine.determine_event(f"###{event.name}### '''{event.description}''' ***{event.time}***"))):
            #accepted += 1
            #print(f'Event {i}: {event.name}, {event.time}, {event.location}, {event.description}')
            #print()
            json_arr.append(event.__dict__)

    with open('info.json', 'w') as file:
        json.dump(json_arr, file, indent=4)



if __name__ == '__main__':
    main()












