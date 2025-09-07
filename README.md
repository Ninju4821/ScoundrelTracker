
# Scoundrel Tracker
This website was created to help keep track of the dungeon crawler card game Scoundrel. You can view and use this website at http://scoundrel.startuperror.xyz (a visual interface is also in the works). The adapted rules are below in case you wish to learn or teach the game.

## Setup
Give the deck a thorough shuffle. Deal out four cards face up in the center of the table. For each additional player above one, deal out two more cards. This creates your "room".

## Card Types


**Spades & Clubs: Enemies**
- Cards are valued as follows: 2–10 are equal to their face value, Jacks are 11, Queens are 12, Kings are 13, and Aces are 14.
- For your action, you can fight an enemy. It will deal damage equal to its value and then be discarded. (See "Fight a Monster" under Gameplay.)


**Diamonds: Weapons**
- Cards are valued as follows: Aces are 1, 2–10 are equal to their face values. The picture cards have special effects listed at the end.
- For your action, you may grab a weapon (if you already have one, discard it and any attached cards). Place the new weapon in front of you. (See "Grab or Swap a Weapon" under Gameplay.)
- When you choose to fight an enemy, you may use your weapon to decrease the damage taken (minimum 0). When an enemy is fought this way, keep it on your weapon rather than discarding it. You do not have to do this; you can instead choose to take the damage directly. (See "Fight a Monster" under Gameplay.)
- A weapon can only be used to fight an enemy of lesser value than the lowest value enemy attached to it. (E.g., if you used your weapon to fight a 7 of Clubs, you can now only fight cards valued 6 or less; if no enemy has been fought yet, there is no limit.)
- The Diamonds picture cards are valued as follows: Jacks are 1, Queens are 2, Kings are 3. They function as "Blacksmiths," removing monster cards from your weapon to "repair" it. (E.g., if you have a 7 of Diamonds, with an 8 and 2 on it, you can use a Jack of Diamonds to remove the 2 from it.) When a Diamonds picture card is used this way, it is set aside rather than being discarded. (See "Using Red Picture Cards".)


**Hearts: Health Potions**
- Cards are valued as follows: Aces are 1, 2–10 are equal to their face values. The picture cards have special effects listed at the end.
- For your action, you may use a health potion. Gain HP equal to the value of the potion (maximum of 20 HP), then discard it. (See "Use a Health Potion" under Gameplay.)
- The Hearts picture cards are valued as follows: Jacks are 1, Queens are 2, Kings are 3. They function as "Shields," providing temporary damage reduction. Keep it in front of you until it is utilized. (E.g., if you use the King of Hearts as a shield, the next time you take damage, you take 3 less, then set the King of Hearts aside.) When a Hearts picture card is used this way, it is set aside rather than being discarded. (See "Use a Red Picture Card" under Gameplay.)


**Jokers**
- The Black (or black and white) Joker is an enemy that deals 0 damage, but can only be fought with a weapon, and which automatically discards that weapon.
- The Red (or colored) Joker is a health potion that immediately fills your hit points to 20 HP.
- When either Joker is used, it is set aside rather than being discarded. (See "Use a Red Picture Card" under Gameplay.)


## Gameplay
After a room is dealt out, players take turns in a clockwise order, each performing one action. The first player to act rotates around the group each room, so that everyone gets a chance to act first. Actions are listed below:
- Fight a monster
- Grab or swap a weapon
- Use a health potion
- Use a red picture card
- Pass
- Offer to run

Each action is explained below:
#### Fight a Monster
Take damage equal to the monster's value, or use a weapon to take less damage. (See "Spades & Clubs: Enemies" and "Diamonds: Weapons" under Card Types.)
#### Grab or Swap a Weapon
Take a weapon from the room, and discard your current weapon (if any). (See "Diamonds: Weapons" under Card Types.)
#### Use a Health Potion
Heal HP equal to the potion's value. (See "Hearts: Health Potions" under Card Types.)
#### Use a Red Picture Card
Follow the effects of the picture card listed under "Card Types." (See also "Using a Red Picture Card" below.)
#### Pass
Forgo an action this round. You cannot pass twice in a row.
#### Offer to Run
Offer to run from the room. All players must sequentially choose this action for it to succeed. If so, pick up all of the remaining cards in the room and put them on the bottom of the deck. You cannot run if: you ran from the last room, you fought any monsters, or you used more than one red card each.


### Ending a Room
A room is cleared when only one card remains or when you choose to run from it. Deal out more cards until the room is refilled (4 cards plus 2 for every additional player).

### Ending a Floor
A floor is cleared when there are no more cards left in the deck/draw pile. Take the discard pile and reshuffle it to create a new deck/draw pile. (This is a good time to save your game state on the website!)


### Using a Red Picture Card
When you use a red picture card (or a Joker), it does not get discarded. Instead, set it aside into a different pile (and log it into the website if you're using it). (See "Use a Red Picture Card" under Gameplay.) Red cards do not reappear on every floor like other cards; instead, they reappear in the following pattern:
* Floor 5: Regain all red picture cards excluding the Jokers
* Floor 10: Regain both Queens and both Jacks
* Floor 15: Regain the Queen of Hearts and both Jacks
* Floor 20: Regain both Jacks
* Floor 25: Regain the Jack of Hearts
* Floor 30: Regain no red picture cards
* Floor 35: Regain all red picture cards
* Floor 40: Repeat floor 5 and follow the cycle again

Because they do not reappear as often, you may wish to preserve them. For your action, you can choose to forgo using a red card to instead place it directly into the discard pile with no effect. This way, it ends up shuffled into the next floor.


## Ending the Game
The game ends when no player has any remaining HP (track negative HP for extra fun). When one player dies but others remain, put their weapon and attached cards into the discard pile, and continue play while skipping their turn each cycle. Attempt to have your last player(s) make it as far into the dungeon as possible. The current record (as far as I know utilizing this specific ruleset) is 7 floors, 9 rooms.


## Special Cases
#### Red Room
A Red Room is a room filled solely with red cards. In this room, the turn order is irrelevant; you can use as many cards as you'd like and still run. Essentially, because there are no monsters, you are free to do what you'd like. The chances of a Red Room decrease with more players (and hence more cards per room).


## Using the Website
The website is designed for 1–4 players. Instructions are as follows:

### Player Trackers
#### Health Counters
The health counters have buttons to increment or decrement the player's health. They are programmed not to go above twenty (as per the rules).
#### Weapon Trackers
There is a text box to input what weapon a player has. This is purely for save state purposes so that you can pick up the exact same situation next time. A common format is: weapon:enemy1enemy2... (E.g., 8:KcJs7s6c5s or 10:AsKsQcJs10s where c = Clubs and s = Spades.)

### Floor Tracker
The floor tracker has buttons to increment or decrement the current floor. This is helpful to tell when red face cards will reappear and for tracking how long a run lasted.

### Used Red Face Cards Tracker
This text box is used purely for save state purposes. It is a text box where you can input what cards have been used to pick up the same situation next time. A common format is: JOKbJOKrKdQdJdKhQhJh (note: JOK means Joker, K, Q, and J mean King, Queen, and Jack respectively, and the lowercase letters represent suits).

### Save Data Inputs
#### Save Values
There is a text box to name the save file, and a button to save the current game state into a cookie. This input is case sensitive, and should not include special characters other than _ or - to ensure proper function. A common format is: player1_player2_player3_player4 (where you substitute in the name of that player).
#### Load Values
There is a text box to select the save file by name. This input is case sensitive. The button loads the values from the save file if it can find the cookie for it.
