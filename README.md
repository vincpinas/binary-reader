# Binary Reading game
## Idea
The main goal in this game is to translate the random set of text in binary to actual text, then pass that into the input which will check whether your answer is right.

---
## Game Structure
1. The user will begin on the join page where they will pass in their name and how long they want the test to be.

2. The user then gets to the introduction which will tell them both the rules and a little bit about how it works.

3. After that the user will get a test question to see how it works. This question won't deduct any points from the user.

4. When this is done they get to the actual game where they can earn points for each question based on how long it is and the total amount of questions.

5. After finishing all the questions the user gets to an end screen which will show a friendly message, their score, the highest available score and ask them if they want to play again.

---
## Needed Components
Router
Join Page
Introduction
User Information
| Component    | Description                                                             |
| :-:          | -                                                                       |
| Router       | Contains all the main routers and passes the highest props.             |
| Join Page    | Initializes the user info object.                                       |
| Introduction | Gives a general introduction on how the game works.                     |
| User Info    | Displays the game info about the user.                                  |
| Game         | Contains the main game and most of the other components apart from join |