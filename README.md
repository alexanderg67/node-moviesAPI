# Movies API

API to get films with filter. Requires MongoDB connection

## Description

HTTP Method: GET\
Endpoint URL: http://host:port/api/v1/films \
Get params: \
name - search string in film name     \
rating - Int value. search films with exact rating value, greater than,Greater than or equal,  equal, less than,less than or equal \
Supports operators: >, >=, <,<=,  =  \
Example:rating=>5   \
genre - string with film genre .Supports values: "триллер", "драма" , "мелодрама" , "музыка", "мюзикл", "криминал" ,"боевик" \
Query Example: http://localhost:3000/api/v1/films?genre=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&rating=>7&name=%D0%BC%D1%83 \
http://localhost:3000/api/v1/films?rating=>7&limit=2&page=2 \
HTML page category.html (in public folder) makes query as example. 
## Getting Started

### Installing
* run: npm install   
* Create file .env and specify: \
MONGO_URI - mongodb string \
PORT - http port for API \
Example: \
MONGO_URI=mongodb://localhost/films \
PORT=5000

### Executing program

* Run: npm start

 