React 

Git
Node
VS Code 
  VS Code Extensions
	ES7 React/Redux/GraphQl/Ract-Native snippets
	html to JSX
	Material Icon Theme
	Prettier - Code formatter
		copy ไปไว้ที่ setting
		"[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
        }

Postman
Chrome Extensions - React Developer Tools

Create React App
https://reactjs.org/docs/create-a-new-react-app.html
 npx create-react-app <project-name>
 
PropTyeps  (props typechecking)
	npm install --save prop-types@15
	
styled-components
	www.styled-components.com
	npm install --save style-components@5
	
Section 5 ใช้ React ร่วมกับ Bootstrap
 Bootstrap
	npm install bootstrap@4
 React Bootstrap
	npm install react-bootstrap@1
	npm install popper.js --save
 React Icons
	npm install react-icons@4 --save
React Router DOM
	npm install react-router-dom@5
	
Section 6 ติดต่อกับ Backend
 axios
	npm install axios@0
 date-fns
	npm install date-fns@2 --save

react-js-pagination
	$ npm install react-js-pagination
	
React Query
	npm i react-query@3
	
Section7
React Hook Form
	npm install react-hook-form@6
	Validation
	npm install @hookform/resolvers@1 yup@0
	
https://www.npmjs.com/package/react-toast-notifications
https://react-hot-toast.com/

npm install react-toast-notifications@2
-------------------------------------------
App.js
   import { ToastProvider } from 'react-toast-notifications';
   
   const App = () => (
 <ToastProvider placement="top-center" autoDismissTimeout={3000}>
    <xxxxxx />
  </ToastProvider>
);
-------------------------------------
-------------------------------------------------
ไฟล์ที่ต้องการ

import { useToasts } from "react-toast-notifications";
    ......
    const { addToast } = useToasts(); // ในฟังก์ชั่นที่ใช้
 
     addToast(resp.data.data.message, {appearance: "success", autoDismiss: true,});
-------------------------------------------------------------------------------
	
	REACT ROUTER
https://v5.reactrouter.com/web/example/auth-workflow

Redux
	npm install redux@4 --save
	npm install react-redux@7 --save
	
Redux persist   เก็บข้อมูลลงใน local storage
	npm install redux-persist@6

Redux Thunk ให้ code run async ได้
	 npm install redux-thunk

Redux DevTools Extension ใช้งานร่วมกัน redux persist - thunk
https://github.com/zalmoxisus/redux-devtools-extension
	npm install --save redux-devtools-extension

Section10 Report pdf / chart
	React-pdf
	npm install @react-pdf/renderer@1 --save

	 npm install "@david.kucsai/react-pdf-table"
	
	Charts
	https://recharts.org/en-US
	npm install recharts


