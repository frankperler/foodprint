
![foodprint header github](https://user-images.githubusercontent.com/25979741/131253076-245fc632-d8f4-4eda-9072-40f9422e6766.png)
<br/><br/>

Foodprint is a platform where farmers/suppliers and restaurants find each other, and form more sustainable, direct local partnerships. 
As a result they cut the middleman – the big distribution- as well as that huge carbon footprint. <br/>
Restaurant users are also part of the equation, since by joining Foodprint, they can easily find sustainable restaurants in their area, and choose where to eat based on the restaurant's eco-scores.
<br/><br/>

## Screenshots
<br/><br/>
![image (3)](https://user-images.githubusercontent.com/63470294/131219757-43c0c3d5-fa2d-4baf-a90c-30b2fc8e7011.png)
<br/><br/>
![image (2)](https://user-images.githubusercontent.com/63470294/131219764-8ba7c65f-57b3-4128-af27-7dac5213adfa.png)
<br/><br/>
![image (1)](https://user-images.githubusercontent.com/63470294/131219767-301947be-50c7-44db-80e8-6661d89b5756.png)
<br/><br/>
![image](https://user-images.githubusercontent.com/63470294/131219770-e9ac4bbc-78a1-403a-90d2-25fb82392d0c.png)
<br/><br/>

## Getting started

Except for the regular suspects - git, Node, npm, etc - you need these things to run the Foodprint app. Follow the instructions supplied below them or on their links before you continue with *Installation*.
* Mapbox. Get API key [here](https://www.mapbox.com/)
* Google Places API. Get API key [here](https://cloud.google.com/maps-platform/places)
* PostgreSQL local database, including the psql CLI. Download and install from [here](https://www.postgresql.org/) 


## Installation
1. Clone this repo and enter!

   ```bash
   git clone https://github.com/frankperler/foodprint.git
   cd foodprint
   ```

2. Install dependencies, by running ````npm install```` both in the client and the server folder

3. Add API keys as listed in the .env.example file.

4. Start the server by running ````nodemon```` in the server folder.
5. Create a database called "foodprint_dev" with PostgreSQL.

5. For a better experience, you might want to populate your DB with mock data. To do so follow these steps:
      * In the server folder, find the "mock_data" folder
      * Open your psql CLI, paste and run the entire content of _Logins_.sql, _Users_.sql, _Products_.sql.
      * In server/index.js uncomment line 9 ("const populate = ...") and restart the server. Comment it back out.
      * Do the same for line 10.

5. In the client folder, run ````npm start```` to start the development server.
 
 ## Tech Stack
 [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Styled Components](https://styled-components.com/), [PostgreSQL](https://www.postgresql.org/), [Sequelize](https://sequelize.org/), [Express](https://expressjs.com/).
 
 ## Developers
 
 * Frank Perler - [GitHub](https://github.com/frankperler) - [LinkedIn](https://www.linkedin.com/in/frank-perler/)
 * Andrés Olivé - [GitHub](https://github.com/andresolive) - [LinkedIn](https://www.linkedin.com/in/andresolivez/)
 * Giulia Consonni  - [GitHub](https://github.com/frankperler) - [LinkedIn](https://www.linkedin.com/in/gconsonni/)
 * Aaron Zomback - [GitHub](https://github.com/aaronzomback) - [LinkedIn](https://www.linkedin.com/in/aaron-zomback/)
