Please note that basic functionality is all that really works right now.</br>
The whole point of this project is to provide access to youtube in a productive, **intent oriented**, manner.</br>
**You control what you watch.**

Current version of this project can be found at https://rod59.github.io/productive-youtube/static/


## How to run/modify the react code:

Please ensure docker is installed.

1) from the project directory, run ``` docker compose run --rm -p 3000:3000 builder npm start ```
2) open ```localhost:3000``` in a web browser

if you need to modify the npm environment, you can get a shell into the docker image with this command:</br>
 ```docker compose run --rm --user root builder sh```

## How to build the react code

To build on your own machine, please run ```docker compose up --build```