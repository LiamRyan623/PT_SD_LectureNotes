# Postman

An API client that allows us to create and read HTTP/s requests.

- A testing environment that helps us use client facing requests when we don't have a client side built out.
  - Usually a full stack app is built server first in small dev groups because the server determines what the data looks like/how it's structured
- Basically used as sudo front end to test our server endpoints and database connection.
- A way for us to test APIs

We will walk through making an API call with [HTTP Cats](https://http.cat/) or [HTTP Dog](https://http.dog/)

[Postman Learning Center Docs](https://learning.postman.com/docs/introduction/overview/)

### Creating a collection in postman
Collections button is at the top right of the left side bar.
After clicking collections, we can create a new collection with the "+", our collection is like a folder for our API requests. We can rename/etc. By right clicking the three dots on the collection name.

- We can right click the collection name, to add a new request.
- We can then name the request and save it to use as reference for later.

- Crtl+S or the Floppy Disc icon and save button will save the request to the collection

### Setting the method in Postman

To set methods in postman: 
  - In the top left of the request, the dropdown in front of the URL needs to be changed to the method matching our route.
  - GET / POST / PUT / DELETE
  