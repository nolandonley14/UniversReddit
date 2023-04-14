## Reddit r/pics Previewer
Univers Tech Take Home  
Nolan Donley - Apr 2023  
  
### Project Description
1. Show the list of posts from the r/pics subreddit. [(data)](https://api.reddit.com/r/pics/hot.json)  
2. For each post, show the following data:
    * Thumbnail image (if no image, leave blank)
    * Title
    * Author
    * Total number of votes (score)
    * Number of comments
    * Creation date
3. Please implement what you feel is the best UI layout which will provide the user with an incredible UX.
4. When a user taps on a post, navigate to the post’s URL in a WebView.
##### Bonus  
5. Unit Tests
6. Add a date of creation in a relative format (i.e. “1 day ago”)
7. Ability to sort the post list (“top”, “new”, “hot” or “controversial”)
8. Data caching

### Product
This is a bare bones, react native application with a blog-style layout that displays 25 relavent posts from the r/pics subreddit. Basic features include:  
    * data caching
    * dark / light theme
    * info / clean mode 
    * WebView of selected subreddit
    * 4 filters for r/pics (hot, new, top, controversial)

### Process (5.5 Hours)
* Brainstorm and Design ( 30 min )
* Development ( 4 hours )
* Deployment and Documentation ( 1 hour )

### Design
Design Points of Emphasis
* Picture based card
* Relavent info easy to read
* Easy to digest many posts without lots of scroll time
* Basic Personaliztion

To get the biggest image size while still keeping the card size down, I opted for a 2 column list-style layout.
I decided that a single column with large instagram style images induced too much scroll, and smaller horizontal cards would make the images too small.  
I also opted for a very basic color black and white color scheme as the images are intended to be the main visual target. I included a slightly more tasteful font for the header, but kept the body font dialed down again not to divert too much away from the image.  
  
![Design Image](./images/design.jpg?raw=true)

### Development

### Deployment
