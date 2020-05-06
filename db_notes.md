# Notes for my db

## Design decisions made when creating the db

Everyone can create quests for every user. This should be changed to "friends" or "party members".

Quest statuses are enums with numbers. Default is 0. Maybe?

0. Sent/invited
1. Accepted/added
2. In progress (like, if someone has clicked on the map thing).
3. Complete
4. Rejected

Map markers are a circle, ie a point plus a radius. For "go to specific point", the radius should be relatively small (not very small though, so it's easier to find if player is there). Monster stuff could be bigger.

## Tables

users, quests, quest_statuses
