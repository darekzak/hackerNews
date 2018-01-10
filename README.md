Write a simple frontend application which will be showing top stories for hacker news.
Put your code into your github account.

Tasks to make:
list of all top stories. fetch them using api call:
https://github.com/HackerNews/API
from the list user can click in the story and this will fetch more data about story
e.g. https://hacker-news.firebaseio.com/v0/item/15930143.json
show new view with fetched data for story
inside story by clicking `url` from json open a modal which show the page

Stack:
use react
use https://github.com/tleunen/react-mdl
use redux
use redux saga for async calls
write tests using jest