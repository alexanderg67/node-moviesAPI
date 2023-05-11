# Project Title

API to get films with filter. Requires MongoDB connection

## Description

HTTP Method: GET
Endpoint URL: http://host:port/api/v1/films
Get params:
name - string in film name to search in database
rating - Int value. search films with exact rating value, greater than, equal or less than.
Supports operators: >,<, =
Example:rating=>5
genre - string with film genre .Supports values from database genre array: "триллер", "драма" , "мелодрама" , "музыка", "мюзикл", "криминал" ,"боевик"
Example: http://localhost:5000/api/v1/films?genre=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&rating=%3E8&name=%D0%BC%D1%83
http://localhost:3000/api/v1/films?rating=>7&limit=2&page=2
HTML page category.html (in public folder) makes query as example.
## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing
* run: npm install
* Create file .env and specify:
MONGO_URI - mongodb string
PORT - http port for API
Example:
MONGO_URI=mongodb://localhost/films
PORT=5000

### Executing program

* Run: npm start

 