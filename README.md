Test application according to the task described in Test Task RDL.pdf file in the root directory of this repository.

Application launch steps:

1. clone the repository
2. yarn install
3. yarn start
4. see in a browser on http://localhost:3000

Since the application does not have a backend, the data about available games is taken from the file games.json and further substituted as if it came from a server.

As breakpoints of media queries, standard values from MUI were used. Accordingly, the border between desktop and mobile is 600 pixels on the smallest side. 

There are two views - Grid and List, you can switch between them using the tabs at the top of the application window. In the Grid view you can see available games as cards and remove them from the grid by clicking (tapping) the Remove buttin. In the List view you can see available games as list items, reorder them by drag'n'drop and set their visibility on the grid by selecting the checkboxes.