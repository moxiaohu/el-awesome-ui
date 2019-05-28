# el-awesome-ui

Flexible UI components based on [element-ui](https://element.eleme.io)

  
## Components
- ela-table
- ela-board

### ELA-TABLE
- Show automatically given list objects into a table with or without pre-defined structure
- Table component based on [el-table](https://element.eleme.io/#/en-US/component/table), how to use? see [example](src/components/ElaTableExamples.vue)

![example-screenshot](/src/assets/example-ela-table.png)
Structure is a list of column schema, types of schema:
- text
- img (gif is allowed)
- button

> **_NOTE:_**  By default, type is "text", label will take value of "key", even if structure === [], ```ela-table``` will automatically show all keys and values of given data list in el-table

#### Structures fields:

- ```type``` column schema type
- ```label``` is the label of this column
- ```key``` is the field in object

#### Text example
```
{
          type: "text",
          label: "Name",
          key: "name"
}
```
Simple version (type is by default "text", label is same as key):
```
{
          key: "content",
}
```

#### Image example

```
{
          type: "img",
          label: "Web img/gif",
          colWidth: 150,
          key: "webIcon1",
          config: {
            style: {
              width: "80px",
              height: "80px",
              background: "#dfdfdf"
            }
          }
},
```

#### Button example

```
{
          type: "button",
          label: "操作",
          colWidth: 150,
          config: {
            text: "删除",
            action: "delete",
            type: "danger" // <el-button> type
          }
}
```

- ```action``` used to handle click event, see how to implement in [example](src/components/ElaTableExamples.vue)

### ELA-BOARD
Board that show key and value of given object  pre-defined structure,see [example](src/components/ElaBoardExamples.vue)

![example-screenshot](/src/assets/example-ela-board.png)


## Run code on Localhost

```
yarn

yarn serve
```

## Install to your project

```

npm install el-awesome-ui

```
or

```

yarn add el-awesome-ui

```

#### Config in your project 
Same way as [element-ui](https://element.eleme.io)

e.g

```
import ElAwesomeUI from 'el-awesome-ui'

Vue.use(ElAwesomeUI)
```
