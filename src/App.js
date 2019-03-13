import React from 'react';
import { Admin, Resource } from 'react-admin';
// import { Admin, Resource, ListGuesser } from 'react-admin';
// import { Admin, Resource, EditGuesser } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


//スタイルテーマを追加
const theme = createMuiTheme({
    palette: {
        primary: { main: purple[200] }, // Hueを入れる場合は{ main: }内で定義
        secondary: red,
    },
    typography: {
        fontSize: 15, // フォントサイズ変更
    }
});

const App = () => (

    <div>
    <Admin theme={theme} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
      {/*<Resource name="posts" list={ListGuesser} />*/}
      {/*<Resource name="posts" list={PostList} />*/}
      {/*ラベル名変更の場合は"option"を使用*/}
      <Resource name="posts" options={{ label: 'Posts' }} list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
      <button>
          Click Here
      </button>
    </Admin>
    </div>
);

export default App;
