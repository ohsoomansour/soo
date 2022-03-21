
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home"; 
import Detail from "./routes/Detail";
/*이 '새로운 App 컴포넌트'는 URL을 보고 있음*/
/*방법1. npm i react-router-dom@5.3.0(아래) > 방법2. Switch 컴포넌트 > Routes컴포넌트로 대체 
  https://reactrouter.com/docs/en/v6/getting-started/overview */ 
/*<Route path="/movie/:id">에서 React Router한테 ':id' id값이 뭔지 알고 싶다는 뜻   */
/*<Route path="/">
        <Home /> */
/* */        
function App() {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/hello">
        <h1>Hello</h1>
      </Route>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />  
      </Route>
    </Switch>
  </Router> 
  );
}  
  export default App;