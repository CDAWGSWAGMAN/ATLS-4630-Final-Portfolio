import type { Project } from "../types";

// Pocket Breathalyzer
import brFinal from "../assets/BRFinal.jpg";
import brAssemble from "../assets/BRAsemble.jpg";
import brProto from "../assets/BRPrototype1.jpg";
import brFirstTest from "../assets/BrFirstTest.mov";
import brFinalTest from "../assets/BrFinalTest.mov";
import OpenWires from "../assets/OpenWires.mov"

import SCAHomeScreen from "../assets/SCAHomeScreen.png";
import SCAAssistant from "../assets/SCAAssistant.png";
import SCACollection from "../assets/SCACollection.png";
import SCAStarred from "../assets/SCAStarred.png";

import ClockFinal from "../assets/ClockFinal.jpg";
import Clock1 from "../assets/Clock1.jpg";
import Clock2 from "../assets/Clock2.jpg";

import Sounds from "../assets/Web copy.png";
import SoundVideo from "../assets/Impossible-sound.mov";

import Snake from "../assets/Snake copy.png";
import SnakeVideo from "../assets/snakemovie.mov";

import poker from "../assets/pokermovie.mov";
import poker2 from "../assets/Pokerz.png"

import Shirt1 from "../assets/Shirt1.jpg"
import Shirt2 from "../assets/Shirt2.jpg"
import Shirt3 from "../assets/Shirt3.jpg"

export const projects: Project[] = [
  {
    id: "Pocket-Breathylzer",
    title: "Pocket Breathylzer",
    image: brFinal,
     gallery: [brFinal, brProto, brAssemble, brFirstTest, OpenWires, brFinalTest],
    skills: ["Arduino", "Sketchup", "3D Printing"],
    shortDescription:
      " An innovative and engaging device for alcohol detection",
    processText:
        "This project started with a simple question: how do you make it easier for people at a party to check whether they’re actually okay to drive? My first prototype was a straightforward Arduino breathalyzer: blow into the sensor, and a set of LEDs would light up to indicate whether you were over a threshold. It worked technically, but it relied completely on people deciding on their own to walk over and try it—which most didn’t.\n\nFor the second iteration, I focused on engagement. I added a microphone and simple keyword detection so the device could listen for words like “keys”, “shot”, “beer”, and “drive” in the room. When those trigger words were heard, the breathalyzer flashed its lights and played an audio message—“come try me”—to pull attention in a friendly way. Once someone used it, the device mapped their reading into one of two playful responses: either a “keep partying”–style message or a gentle nudge that it was time for water instead. The result was less of a silent tool and more of an interactive party object that encouraged people to pause, check in with themselves, and make a safer choice."

  },
  {
    id: "sir-charts",
    title: "Sir-Charts-A-Lot",
    image: SCAHomeScreen,
     gallery: [
      SCAHomeScreen,
      SCAAssistant,
      SCACollection,
      SCAStarred,
    ],
    skills: ["Hackathon", "AI", "Figma", "Data Viz"],
    shortDescription: "Playful medieval-themed chart generator for messy data.",
    processText:   "Sir-Charts-A-Lot started as a hackathon idea: what if generating charts from messy data felt more like talking to a helpful character than fighting with a settings panel? My team and I wanted to make data tools less intimidating, especially for people who don’t think of themselves as “data people.” I took the lead on UX and visual design, exploring how a medieval assistant—our knight—could guide users through uploading data, picking chart types, and refining the output while still feeling professional enough to trust.\n\nI began by mapping out the core flow: import data → understand what’s in it → choose a visualization → refine. From there, I built Figma wireframes that paired straightforward layouts with medieval touches like banners, shields, and scroll-like panels. User feedback from quick hallway tests pushed me to simplify choices and reduce cognitive load: fewer chart options upfront, clear defaults, and strong empty states explaining what to do next. I iterated on the tone of voice for the knight so the theme stayed fun without getting in the way of the work. By the end, Sir-Charts-A-Lot felt like a focused assistant: it used AI to suggest helpful charts, offered a bit of personality, and showed how playful theming can coexist with genuinely useful, legible data visualization."

  },
  // add more
  {
    id: "A.L.A.N.-Alarm Clock",
    title: "A.L.A.N. Alarm Clock",
    image: ClockFinal,
     gallery: [
      Clock1, Clock2, ClockFinal
    ],
    skills: ["Onshape", "Laser cutting", "3D Printing", "Arduino"],
    shortDescription: "An alarm clock that requires users to solve a puzzle in order to deactivate it.",
    processText:   "ALAN (Alarm for Neural Activation) started from a question we all know too well: why is it so easy to hit snooze, roll over, and regret it later? Instead of just making a louder or more annoying alarm, my team and I explored how to gently force real brain engagement so waking up feels more intentional. We were inspired by things like Wordle and simple pattern games that require focus, memory, and just enough effort to flip your brain out of autopilot.\n\nThe core interaction we designed was a light-based puzzle. When the alarm goes off, ALAN doesn’t stop with a single tap. Instead, a sequence of lights flashes on the device. To silence it, the user has to correctly repeat the pattern using physical inputs—turning the alarm into a short, focused challenge. In prototyping, we experimented with different pattern lengths and speeds to balance frustration and wakefulness. Too simple, and people could do it half-asleep; too complex, and it felt punishing. Our final concept hits a middle ground: just enough cognitive load to get you mentally online, without turning your morning into a boss fight. The project showed me how small interaction details—like a pattern of lights—can meaningfully change behavior and turn a daily annoyance into something a little more playful and intentional."
  },
  {
    id: "Impossible-Sound",
    title: "Impossible Sound",
    image: Sounds,
     gallery: [
      Sounds, SoundVideo
    ],
    skills: ["HTML", "CSS", "JavaScript"],
    shortDescription: "A very difficult way to tunr volume up and down on your computer.",
    processText:   "Impossible Sound was a deliberate exercise in bad interaction design: we were asked to make turning the computer volume up or down as difficult as possible. Instead of using a normal slider, I designed a system of constantly moving circles, each carrying a value like '+1' or '−1'. As these circles bounced around and collided, they swapped values with each other, so there was no stable, predictable control point. To change the volume, the user had to click on a circle at just the right moment, hoping to catch a positive or negative value.\n\nDesigning this meant thinking less about usability and more about controlled chaos. I experimented with speed, number of circles, and collision behavior to keep the interface just barely usable but deeply annoying. Too slow and it felt like a quirky alternative slider; too fast and it became impossible to interact with at all. The final version creates this uneasy space where users feel like they’re playing a tiny, rigged game instead of adjusting a simple setting. As a project, it helped me understand why good interaction patterns exist in the first place—by breaking all the norms on purpose, it highlighted how much we rely on predictability, feedback, and direct manipulation in everyday interfaces."







  },
  {
    id: "Texas-Holdem-Simulator",
    title: "Texas Hold'em",
    image: poker2,
     gallery: [
      poker2, poker
    ],
    skills: ["Python"],
    shortDescription: "A simple text-based Texas Hold'em poker game simulator.",
    processText:   "For this project, I wanted to see if I could take something as visual and state-heavy as Texas Hold’em and recreate it entirely in the terminal. The goal was to let multiple players share one computer and play locally, with the program handling the deck, dealing, betting rounds, and showdown logic. I started by breaking the game into pieces: a representation of cards and a deck, player hands, the shared board, and the turn-based flow of pre-flop, flop, turn, and river. From there, I built a simple text interface that printed each player’s hand privately and showed shared cards and pot information in a clear, readable way.\n\nThe hardest part was managing state and rules cleanly—tracking whose turn it was, what actions were allowed, and when a round should advance. I implemented functions for shuffling, dealing, and basic hand evaluation, along with a simple betting system that supports folding, calling, and raising. Throughout, I focused on keeping the terminal output legible and paced, so players weren’t overwhelmed by walls of text. Building Texas Hold’em this way gave me a deeper understanding of game loops, turn-based logic, and how much UX still matters even when you don’t have a graphical interface."







  },
  {
    id: "Snake",
    title: "Snake",
    image: Snake,
     gallery: [
      Snake, SnakeVideo
    ],
    skills: ["Python"],
    shortDescription: "A varation of the iconic Snake game built using Python's Turtle module.",
    processText:   "This Snake game was one of my first real coding projects in Python, and it was a great way to turn abstract programming concepts into something visual and interactive. I started by setting up a basic game window and grid, then represented the snake as a list of coordinates that update every frame. Each tick of the game loop moved the snake in its current direction, while keyboard input changed that direction in real time. Food spawned at random positions, and when the snake’s head reached it, I increased the length of the snake and the player’s score.\n\nMost of the learning came from handling edge cases and collisions. I had to detect when the snake hit the wall or ran into its own body and trigger a game over state. I also tuned the speed and update timing so the game felt responsive but not impossible. Structuring the code pushed me to separate concerns—drawing, input handling, and game logic—so it didn’t turn into one long, unreadable function. By the end, I had a fully working Snake clone that not only felt nostalgic to play, but also solidified my understanding of loops, conditionals, lists, and state in a way that a problem set never could."







  },
  {
    id: "T-Shirts",
    title: "T-Shirt Designs",
    image: Shirt1,
     gallery: [
      Shirt1,
      Shirt2,
      Shirt3,
    ],
    skills: ["Photoshop", "Illustrator"],
    shortDescription: "A variety of T-Shirts created and designed by me.",
    processText:   "Designing t-shirts for my fraternity became an ongoing mini–brand project. Each shirt had to do a few things at once: represent the chapter, fit the theme of a specific event, and still be something people would actually wear outside of Greek life. I started each design by talking with the people organizing the event—what vibe they wanted, any inside jokes or references to include, and what had or hadn’t worked in past shirts. From there, I sketched out concepts and moved into Illustrator/Photoshop to experiment with typography, iconography, and color.\n\nBecause these designs were going to be screen-printed, I also had to think practically: limited color counts, line thickness, and how the artwork would sit on different shirt colors and sizes. I iterated on details like placement, scale, and readability from a distance, then shared a few variations with the group to get feedback before finalizing. Over time, I developed a loose visual language for the chapter—certain fonts, symbols, and layout patterns—that helped the shirts feel related without being repetitive. The project taught me a lot about designing within real constraints, gathering quick feedback, and translating abstract “vibes” into concrete graphics that people were excited to wear."







  },

];
