# Orchestra

Orchestra is an application that was previously written using plain js & plain css, then redone better, then redone using gatsby+react+typescript and now I am attempting to make it React Native.

## Setup

I followed the [Getting started guide](https://reactnative.dev/docs/0.60/getting-started), for React Native CLI.

You need to install: `brew install watchman` and `sudo gem install cocoapods`, then go into `ios` folder and type `pod install`.

The base template is the [Typescript one](https://reactnative.dev/docs/typescript).

You need environment variables, and keys and such, in a file called `.env.js`. There is an example file called `.example.env.js`.

## notes

I have installed styled-components, but is not yet using it.
Can debug using react-devtools: `npm install -g react-devtools`, then from a terminal use `react-devtools`.

## todos implementation

- ~~Implement navigation (`react native navigation`)~~
  - ~~The quest detail screen should be a `navigation detail` screen.~~
  - ~~The other could be tabs?~~
    - ~~map~~
    - ~~questlog~~
    - ~~profile~~
  - startscreen with signup/login
- connect to db
  - hasura + graphql
  - Show quests
- Auth, JWT
- Map
  - Display map
  - Show icon from a quest
  - Get when user is in area for a quest
- Notifications

## Todo design

- Startscreen to have a login button and signup
- Signup flow
- Profile screen
- Create Quest
  - Assign to user
- App icon for all sizes and better design

## Todo extra

- I need to redo all my mountains so that they have the same height, for the design sake. Right now the padding is different for all.
  - Because of tab navigation, one mountain should transition into it's neighbor. so it looks like one landscape.
