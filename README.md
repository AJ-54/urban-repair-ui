# Urban Repair

An idea to collaboratively manage and restructure and repair a city to improve the quality of life.

## Motivation
A city is an important public resource. There are issues like cleanliness, property damage, etc. in a city that often go overlooked for a long period of time. We wanted to build a platform that would empower everyone to bring attention to pressing problems. Collaboration makes it easy to address a problem that is usually difficult to address on an individual level.

## What it does?
Urban repair helps the residents to monitor, upload, and tag issues that the city is facing via posts, messages, and tagged pictures tied to a location on the map.

### Features:

* Latest feed browsing containing all the recent issues along with images uploaded. * Highlighting the incident to bring it to the notice of concerned authorities.
* Markers are placed on the map tied to each incident, which can be clicked to reveal an image and information about the incident.
* Automatic tagging of images based to help segregate and manage metadata for topics on issues around the city.
* In-app messaging service to discuss pressing topics. It would also support to request/offer help needed to solve the incident.

### Architecture
Urban Repair is packaged as web app to offer cross-platform (iOS/Android/Desktop) support to users.



## Technology Stack
- < Weavy />
    - Chat: Direct message and group chat functions add the benefits of contextual in-app chat for users.
    - File-Sharing: Powerful & secure file(pictures) sharing.
    - Feeds: For communicating and collaborating.
    - Tasks: Managing Action items around issues around the city.
- React.js (Typescript): Front End of the app.
- Node.js: Backend for Urban Repair
- Maps API (Open street maps): Open source map API for location in a city.
- Microsoft Azure Vision API: For image tagging and identification.

## Future
Adding support for group discussion and planning e.g. a group of friends getting help from the city in planning a dinner location. A major addition would include having an emergency services feed/chat that would allow the city to help in a collaborative manner in time of need.


## Getting Started

### Setting up the server SDK.

Follow the steps to setup the Server SDK from [here](https://docs.weavy.com/server/get-started)

Replace the url to clone the solution to https://github.com/mehulnirala/urban-repair-weavy-sln.git

In other words, instead of 
`$ git clone https://github.com/weavy/weavy-sln.git`

perform
`$ git clone https://github.com/mehulnirala/urban-repair-weavy-sln.git`

* Run the solution without debugging as mentioned in the docs.
* Point the browser to [https://localhost:44323/](https://localhost:44323/)
* Create a client in `Manage` section in weavy with `clientId` = `test` and `clientSecret` = `test`.


### Setting up the UI

Clone the repository from [https://github.com/mehulnirala/urban-repair-ui](https://github.com/mehulnirala/urban-repair-ui)

`
$ git clone https://github.com/mehulnirala/urban-repair-ui
$ cd urban-repair-ui
$ npm start
`

Point your favorite browser to [http://localhost:3000/](http://localhost:3000/)
