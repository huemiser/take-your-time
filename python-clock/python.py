import bottle
import time
import json
import random

@bottle.get("/")
@bottle.get("/home")
def home():
    with open('html.html') as template:
        return bottle.template(template.read())

@bottle.get("/api/time")
def time_api():
    current_time = time.strftime("%I:%M:%S %p") #This formats the time like 08:35 AM  
    return json.dumps({"time": current_time})
    
@bottle.get("/static/<filename:path>")
def static_file(filename):
    return bottle.static_file(filename, root="static/")
    
bottle.run(port=8080, debug=True)
