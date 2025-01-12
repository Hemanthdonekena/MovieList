# MovieList
Input
The interacts with the app by selecting a genre from a dropdown menu. The dropdown options are dynamically populated from the available genres in the movie list. An additional option, “All Genres,” allows to view the entire movie list without any filters.
Process
Upon selecting a genre, the app filters the movie list based on the selected genre. "All Genres" is selected, the entire list is displayed. This filtering is achieved using the filter() method in JavaScript, which compares the genre of each movie to the selected genre. The filtered list is then updated and displayed on the screen.
Output
The app outputs a list of movies that match the selected genre. Each movie is displayed with its title, genre, and release year. When a movie is clicked, an alert shows the movie's title. The app dynamically updates based on user interaction with the genre filter.
