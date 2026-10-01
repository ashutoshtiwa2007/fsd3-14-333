1. create project and backend and frontend folders inside
2.open right side backend and make a server

## Components
- simple js function return html directly
- it must start with capital letter 
- it should be treated as html tag
- it must be true

## object destructure
```const{rating, bname, price, quantity, picUrl}=props.book;```
- does not depend on order if property not available it is initialized with null.
*** const{price, picUrl}=props.book; ***
- const { price,...rest}=props.book;
- return rest 
## Anyc component has styles
- external css : create class in index.css and use in component
- internal css : create property as object like below and then apply with style and pass the object
    ``` const qtyStyle={
        fontSize:"1rem",
        color: "blue",
        textAlign: "center",
        backgroundColor:"yellow",
        padding: "10px",
    }
    
     <h3 style={qtyStyle}>Quantity: {props.quantity}</h3>

   ```
- inline css: we use two curly bracket with style attributes all the css property must be single word for e.g text-align becomes textAlign(camel case)
- rafce arrow func
-rfce normal fun

