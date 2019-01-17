# Week 01: JS Language Fundamentals

> Learn the basics of the JavaScript language at a very in-depth level.  Understand how JavaScript compares to other programming languages.

1. Create a variable with your name

```
var name = 'niels';
```

2. Create a function that logs your name with console.log()

```
function printName() {
  console.log('niels');
}
```

3. Create an object called "me" that includes properties for your first and last names as well as other properties for your website and social media

```
var me = {
  firstName: 'niels',
  lastName: 'lange',
  website: 'https://nielslange.de',
  email: 'info@nielslange.de',
  social: {
    twitter: '@codenex',
    instagram: '@codenex'
  }
}
```

4. Create a boolean variable called loggedIn (set to either true or false)

```
var loggedIn = true;
```

5. Write a conditional statement that logs "Logged In" when loggedIn is true and "Please login" when loggedIn is false

```
var message = loggedIn ? 'Logged In' : 'Please login';
```

6. Create an array called ids filled with numbers that could represent post ids

```
var ids = [1, 2, 3, 5, 8];
```

7. Loop over the ids and log them all out

```
ids.forEach((e) => { console.log(e); });
```

8. Create an array of post objects. Include an id, title and content property on each object

```
var posts = [
  {
    id: 1,
    title: 'Hello World',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    postStatus: 'published'
  },
  {
    id: 2,
    title: 'Hello Zag',
    content: 'Praesentium voluptatum deleniti atque corrupti quos dolores.',
    postStatus: 'published'
  },
  {
    id: 3,
    title: 'Hello Wes',
    content: 'Et quas molestias excepturi sint occaecati cupiditate non provident.',
    postStatus: 'published'
  },
  {
    id: 5,
    title: 'Hello Earth',
    content: 'Similique sunt in culpa qui officia deserunt mollitia animi.',
    postStatus: 'draft'
  },
  {
    id: 8,
    title: 'Hello Niels',
    content: 'Id est laborum et dolorum fuga. Et harum quidem rerum facilis.',
    postStatus: 'scheduled'
  }
];
```

9. Loop over the array of posts and log out the title of each one

```
posts.forEach((e) => {
  if (e.postStatus == 'published') {
    console.log(e.title);
  }
});
```

10. Create a function that will take an array of posts and log out the title and content of each post.

```
function printPosts(data) {
  data.forEach((e) => {
    console.log(e.title + '\n' + e.content);
  });
}
```