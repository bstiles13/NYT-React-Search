# NYT-React-Search

SPA app that utilizes the React mounting lifecycle to query and display articles from New York Times based on user searches. Node, Express and MongoDB are used in conjunction so that users can save articles to read later.

### Overview

1. The <b>Search</b> includes three parameters:
  * `Keywords` (required)
  
  * `Start Date` (optional)
  
  * `End Date` (optional)
  
2. Click <b>Search</b> to display new results. New results will replace any articles in the database (and on the webpage) that were not favorited from a previous search.  

2. Your <b>Search Results</b> will have the following:

   * `title` (Title of the stored article from nytimes.com)
   
   * `url` (Click the article Title to open a new tab at the New York Times url with the full article)

   * `favorite` (Click the star icon on the left side of a search result to add the article to your user favorites and remove it from the queue)
   
   * `delete` (Click the trashcan icon on the right side of a search result to delete the article from the results list)


4. Layout
     ```
     * **Main** - contains the main-container div that holds the main layout and navigation.

     * **Search** - queries the NYT API for articles. Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.

     * **Saved** - displays the Saved Articles that were searched and stored in the database
     
     * **Favorites** - displays the Favorited Articles that were "starred" in any previous searches
     ```
