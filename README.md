# Z1 Front-end Challenge

In order to start this project locally, download or clone it to your machine, open a terminal inside its root folder, and run:

1. `yarn install`
2. `yarn run dev`

You can see a deployed version of the current code here

<h3 style="text-align: center;">Alonso Rojo Curto</h3>
https://front-end-challenge-alonso-rojo-curto.vercel.app/


## Bare minimum

Once you run this or look at it in its deployed version, you should be able to:

  - See list of songs ✔️
  - Listen to any song they choose ✔️
  - Play and pause song ✔️
  - Control track ✔️
  - Mark a song as favorite ✔️
## Extra work #1

  - Move between songs with the prev/next buttons of the audio player ✔️

## Extra work #2 
- App should look good in all window sizes ✔️
- Add unit or integration tests ✔️
There are a couple of tests fot helper functions, selectors and full components. Getting this to work made me tear up.
- Add some micro interactions and animations ✔️
I would say that the added animations are functional, although not that pretty. Just enough for the user to have some feedback.
- Be careful about accessibility 〽️
I probably could have made the typhographies a little bit easier on the eyes.
- Be careful about your markup semantics 〽️
I was aware of this for most of the journey, but I think I could have done a better job.
# First thing to improve

- I don't think I'm taking advantage of Next.js capabilities. There is a warning coming from the original repository in which server and client side classnames for one of the components don't match, but I wasn't able to fix it.

# Some thoughts and hiccups in the way

- I had never worked before with Next.js, GraphQL, or StyledComponents, and only a little bit with Typescript. I also had to search the web to be able to manage the local storage. I think that in a couple of months I will look back at this code and feel embarrased, but for today, specially since I could only allocate a couple of hours every couple of days this past week, I'm proud of my work. 
- I wanted to use Redux as my context manager, which was a real pain to get working with typescript. I think my job here is not quite as clean as it should, because every day I kept finding new ways in which typescript or next.js didn't want to cooperate as easily as I'm accustomed to in my current workplace. On the other hand I got to see some of the perks of working like this, and I can't wait to incorporate what I've learned so far in my day to day work. 
- For the filtering logic, the sensible thing would have been to learn how to do it with Apollo's own tools. I know that, but instead I wanted to at least showcase other things that I can use, in hopes of giving me a little bit of an edge over the other participants. That why I went for using ramda and selectors for this part.
