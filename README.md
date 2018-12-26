# Teamtreehouse-techdegree-project-07
My Teamtreehouse techdegree project 7

In this project we have to make a Flikr image search single page app with React, the well known front-end framework. The app must contain 3 major picture categories, a search function and routing which gives you the feeling of using a multi-page website.

Used technologies: HTML / CSS / JavaScript / React / React Router / Axios

The core page structure and Css styling are provided by Treehouse. All the javascript files are self writen.

Note: I have been altered the CSS styling a little bit:

  - Replaced the font with two new one
  - Added new colors
  - Added a little bit of box shadow

Since the app is connected to the Flickr page API in order to run the project you will need an API key.
To request an API key you must create yahoo account/use tumblr account to sign in and apply for a non-commercial API key at:
https://www.flickr.com/services/apps/create/apply/

After you have your key, follow the steps below:

In order to run the project on your computer you need to have Node.js installed on it.
When you don't have it installed, you can dowloaded it at: https://nodejs.org/en/

1. After you downloaded the project, in the root directory create a config.js file
   The file must contain the folowing information in this format:
   (Replace the YOUR API KEY text inside the quotation marks with the one you received.)

   const apiKey = "YOUR API KEY";
   export default apiKey;

2. Install the dependencies required to run the project.
   Open your terminal and navigate to the folder where you downloaded the project files and type in:

   npm install

3. After the installation finishes, you can start the project with the command:

   npm start
