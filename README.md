```
npx create-create-app .
npm install redux react-redux

```

vscode settings for prettier

1. mapStateToProps
  - subscribe to Redux store updates 
  - any time the store is updated, mapStateToProps will be called
2. mapDispatchToProps
  - when you do not supply a second parameter to connect(), component will receive dispatch
  - with ownProps, will be re-invoked whenever the connected component receives new props
    - Binds on component re-rendering
    ``` javascript
    render() {
      return <button onClick={() => this.props.toggleTodo(this.props.todoId)} />
    }

    const mapDispatchToProps = dispatch => {
      return {
        toggleTodo: todoId => dispatch(toggleTodo(todoId))
      }
    }
    ```
    - Binds on props change
    ``` javascript
    render() {
      return <button onClick={() => this.props.toggleTodo()} />
    }

    const mapDispatchToProps = (dispatch, ownProps) => {
      return {
        toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
      }
    }
    ```