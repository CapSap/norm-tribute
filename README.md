# This is a tribute page to the late comedian Norm Macdonald. 

It's pulling tweets from twitter using the twitter API using Express and React.

View the live site here: 
- ~~https://immense-depths-37700.herokuapp.com/~~ heroku is no longer free =(
- https://rip-norm.onrender.com/


## Update
Twitter has updated it's API and the search endpoint that I was using is now a paid feature
![image](https://github.com/CapSap/norm-tribute/assets/23469082/cf8eb49f-16bc-417a-8989-c62b6dd2fa35)

I wonder how tricky it would be to scrape this info? Maybe a future project idea

## Tech
This is a simple express app serving a react app, and hosting a route to fetch tweets from twitter

## Challenges
Due to CORS, the express server is where the app is being served from and where the request to twitter is being made. 
