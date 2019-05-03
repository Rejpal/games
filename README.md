# U+Game

Hello there,

so you want to be developer in U+? We prepared a little challenge for you. No bullshit, just a real world scenario, you could face as dev here.


## Description
We love to play our Playstation in office, one of the game here is GTA V. But we would like to buy older games from this series. And of course as cheap as possible.
You will be Backend developer providing API endpoint for your colleague on frond-end checking if game is cheap enough to buy.

Your tech stack will be Nest.js which is wrapper around Node.js + Express taking advantage of Typescript. If you don't know it, check it out, its really easy to start, check `https://docs.nestjs.com/`.

## Your task
You will work with API `https://www.cheapshark.com/api/`. Lucky for you somebody just started on this project, so continue, where he left. Fork this repo and:
- Expand app logic to fetch the cheapest price ever for game (spoiler alert - you need to call `https://www.cheapshark.com/api/documentation.html#deals`).
- Return just data in `IGame` interface to endpoint GET `/games`.
- When endpoint GET `/games` is called, you have to save this event to database (of your choice). You will save just when endpoint was called. In the end you will have in table two columns `id` and `called_at` of type DATETIME.
- Make endpoint GET `/calls` and return data from database you created. Return only calls made on Mondays.
- Endpoint GET `/calls` has to be private, make it so, it's up to you what method will you choose.
- Tests are up to you, if you will provide them, you will get in front of other candidates.

## Installation and run
Copy `.env.example` to file `.env`

```bash
$ npm install
```


```bash
$ npm start
```


## Development notes
- The call API is not private yet
- Tests are not done yet
- so Far I've spend 4 hours on the project
- got stuck fot an hour and half on searching for suitable redis client for given project setup.
- I'll have more time to work on the project tomorrow but for now this is all I have. I do not consider this a fullfilled task yet so please do not evaluate this as a final thing. Take it more like a possibility for first feedback.
