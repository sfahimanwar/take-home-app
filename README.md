# README

**Author**: Sheikh Fahim Anwar
### Description
This is a Next.js application structured to provide functionality for selecting and playing audio with transcripts to match and follow. The application uses React and Next.js as it's frontend framework,  Tanstack Query (prev. React-Query) for data fetching and Mantine for its UI components. The main components and functionalities are:

#### Pages:

-   index.js: The homepage that displays a list of transcripts and title.

-   _app.js: Sets up the global providers and theme.

-   _document.js: Customizes the HTML document structure.

-   transcript/[id].js: A dynamic route for individual transcript pages with audio playback and transcript display.

#### Components:

-   TranscriptList.js: Lists all transcripts with links to their detailed view.

-   Transcript.js: Displays the transcript text and highlights the current spoken word.

-   AudioPlayer.js: A reusable audio player component.

-   ServerError.js: Displays an error message when there is a server or network issue.

#### Services:

-   api.js: Contains functions to fetch data from the provided API.


### Tasks Completed

 - Core Functionality
 - Use of version control and commits showing progress
 - Automatic scrolling - NOTE: If a random part of the audio is selected, it takes a second to scroll to that part but functionality works and follows highlighted word
 - Transcript List shown to user on homepage allowing them to select which one to play
 - Highlighting and scrolling matches playback speed

### Testing Instructions

Pull repo to local directory and then from terminal run 'npm install' to install all dependencies. To run app run command 'npm run dev' for dev mode. To try out production build - first run 'npm run build' and then 'npm run start'. App was tested primarily on Chrome on Desktop but should work across devices and browsers. Please contact me on sfahimanwar2001@gmail.com if you run into any issues.

### Areas of Improvement

I would have liked to implement the video player. It didn't seem too hard but would have required a bit of refactoring after I already implemented the audio player that I decided I did not have enough time for it.

I also would have loved to perform more testing to ensure accessibility and responsiveness. I performed some Lighthouse tests and tried to follow some basic best practices for apps of this size but it would have been ideal to pour more time into it. More specifically, dark mode and light mode toggle, higher contrast of colours for accessibility and performance optimizations (although I did use memoization in some areas to prevent unnecessary re-renders which was important in an app that has a lot of map and filter functions).

I wanted to also add more granular commits but some of them ended up being larger than I wanted with multiple changes in them. I usually like to make my commits more descriptive. I also only ever used the main branch but it didn't really matter since I was the only one working on this app.

A bit more documentation function and component-wise would have been great with short comments.

The UI also isn't the prettiest and is pretty minimalistic but it gets the job done.

