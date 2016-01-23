

Dan A.'s article on smart and dumb components:

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.oxwnc7x3u

(excerpt... note, this was before he created Redux)

## My dumb components:
* Have no dependencies on the rest of the app, e.g. Flux actions or stores.
* Often allow containment via this.props.children.
* Receive data and callbacks exclusively via props.
* Have a CSS file associated with them.
* Rarely have their own state.
* Might use other dumb components.
* Examples: *Page, Sidebar, Story, UserInfo, List.*

## My smart components:
* Wrap one or more dumb or smart components.
* Hold state from Flux stores and pass it as objects to dumb components.
* Call Flux actions and provide these as callbacks to dumb components.
* Never have their own CSS styles.
* Rarely emit DOM of their own, use dumb components for layout.
* Examples: *UserPage, FollowersSidebar, StoryContainer, FollowedUserList.*
