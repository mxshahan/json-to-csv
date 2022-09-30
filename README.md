# json2csv-export

A simplest javascript library that help you generate csv file and export

### Install Package

```bash
npm install json2csv-export --save
```

or

```bash
yarn add json2csv-export
```

or use cdn bellow before end of body tag
```html
<script src="https://unpkg.com/json2csv-export@1.0.5/index.js"></script>

```

### Example

```js
import { exportCsv } from "json2csv-export";

const yourCustomFunction = () => {
  const header = {
    name: "Fullname",
    age: "Age",
    designation: "Designation",
    role: "Profession",
    education: "Study",
    hometown: "Current City",
    email: "Email Address",
    post: "Total Post",
  };

  const data = [
    {
      name: "Shahan Chowdhury",
      age: "26",
      designation: "Mr.",
      role: "Software Engineer",
      education: "Computer Science and Engineering",
      hometown: "Sylhet",
      email: "shahan@test.com",
      post: 27,
    },
    {
      name: "Rayhan Chowdhury",
      age: "31",
      designation: "Mr.",
      role: "Test Engineer",
      education: "CS",
      hometown: "Sylhet",
      email: "rayhan@test.com",
      post: 25,
    },
  ];
  exportCsv({
    header, // header is optional. If you don't pass header, it will take keys from data
    data,
    filename: 'yourfilename' // the file will downloaded yourfilename.csv
  });
};

`
```

Support me by giving star
