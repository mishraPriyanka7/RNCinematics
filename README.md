# RNCinematics Details

Follow Redux Architecture

1) Craete NavigationBar
2) FlatList Change to Grid View
3) On click on list item redirect to Detail Page.
    Detail page include : 1) Parallax ScrollView
                          2) Animation on Parallax ScrollView
                          3) It include 3 Tabs INFO, CAST, REVIEWS
INFO:
- Info tab shows Movie Overviews, Release Date, Dvd Release Date, Directed By, Budget, Revenue
- It shows Video Trailers (on click on video Deep linking to youtube)
- It shows More Movies and Similar Movies List

CAST:
- Cast list shows movie related Actors List
- on click on Particular actor redirect to People Details page.
    People Detail Page include 3 Tabs INFO, MOVIES, TV SHOWS
     INFO: It shows  Actors Details and related Images using PeopleID .
     MOVIES: It shows Movies List using PeopleID
     TV SHOWS: It shows Tv shows List using  PeopleID

REVIEWS:
    - shows  selected movie Reviews list.


