# el-awesome-ui

Flexible UI components based on [element-ui](https://element.eleme.io)

  
## Components
### ela-table
Table component based on **el-table**
render table with pre-defined structure, see [example](src/components/ElaTableExamples.vue)

![example-screenshot](/src/assets/example-ela-table.png)

#### structures types example:

##### text example
```
{
          type: "text",
          label: "内容",
          key: "content"
}
```

- ```label``` is the label of this column
- ```content``` is the name of field in each object of dataList

```
{
          key: "content",
}
```
by default , type will be "text" if not given, label will be key if not given

##### No structures provided

if (structures === [] | null) , ela-table will show all keys and values in table with key as column label

##### Image example

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

##### Button example

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

- ```action``` used to handle click event

### ela-board
Board that show key and value of given object  pre-defined structure,see [example](src/components/ElaBoardExamples.vue)

![example-screenshot](/src/assets/example-ela-board.png)

## Install to your project 

```

npm install el-awesome-ui

```

Usage is similar to [element-ui](https://element.eleme.io)

Vue.use(...)