console.log("hii");
const parent=document.getElementById('container')
const root=ReactDOM.createRoot(parent);
const h2=React.createElement('h2', {}, "wellcome to react world")
const li1=React.createElement('li', {}, "java script")
const li2=React.createElement('li', {}, "java")
const ul=React.createElement('ul',{},[li1,li2]);
const div=React.createElement('div',{},[h2,ul]);
root.render(div);

