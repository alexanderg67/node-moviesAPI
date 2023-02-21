# nodejs  -moviesAPI
http://host:port/api/v1/films \
Get params: \
name - string in film name to search in database \
rating -  Int value. search films with exact rating value, greater than, equal or  less than.  \
 Supports operators: >,<, = Example:rating=>5 \
genre - string with film genre .Supports values from  database genre array: "триллер", "драма" , "мелодрама" , "музыка", "мюзикл", "криминал" ,"боевик" \
Example: 
http://localhost:5000/api/v1/films?genre=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&rating=%3E8&name=%D0%BC%D1%83  \
HTML page category.html in public folder as example. <br /> 
Create file .env and specify: \
MONGO_URI - mongodb string \
PORT - http port for API <br /> 
Example: <br />
MONGO_URI=mongodb://localhost/films <br />
PORT=5000
