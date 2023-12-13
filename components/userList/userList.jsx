import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
}
from '@mui/material';
import {Link} from 'react-router-dom';
import './userList.css';
import fetchModel from "../../lib/fetchModelData";


/**
 * Define UserList, a React component of project #5
 */
// class UserList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <Typography variant="body1">
//           This is the user list, which takes up 3/12 of the window.
//           You might choose to use <a href="https://mui.com/components/lists/">Lists</a> and <a href="https://mui.com/components/dividers/">Dividers</a> to
//           display your users like so:
//         </Typography>
//         <List component="nav">
//           <ListItem>
//             <ListItemText primary="Item #1" />
//           </ListItem>
//           <Divider />
//           <ListItem>
//             <ListItemText primary="Item #2" />
//           </ListItem>
//           <Divider />
//           <ListItem>
//             <ListItemText primary="Item #3" />
//           </ListItem>
//           <Divider />
//         </List>
//         <Typography variant="body1">
//           The model comes in from window.models.userListModel()
//         </Typography>
//       </div>
//     );
//   }
// }

// export default UserList;

//P5 solution
class UserList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
              users: this.props.users || [],
              user_id: undefined
          };
  }

    //display
    render() {
      return (
        <div>
          <List component="nav">
            {this.state.users.map(user => (
              <React.Fragment key = {user_id}>
                <listItem button component = {Link} to = {'/user/${user.id}'}>
                  <ListItemText primary = {user.name} />
                </listItem>
                <Divider />
              </React.Fragment>
            ))}

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText primary="HOME"/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText primary="Explore"/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
            <ListItemButton>
                <ListItemIcon>
                  <ListItemText primary="Favorite"/>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <Divider />
          </List>
        </div>
      );
    }


    //p5 solu
  //   componentDidMount() {
  //       this.handleUserListChange();
  //   }

  //   componentDidUpdate() {
  //       const new_user_id = this.props.match?.params.userId;
  //       //console.log(new_user_id);
  //       const current_user_id = this.state.user_id;
  //       //console.log(current_user_id);
  //       if (current_user_id  !== new_user_id){
  //           this.handleUserChange(new_user_id);
  //       }
  //   }

  //   handleUserChange(user_id){
  //       this.setState({
  //           user_id: user_id
  //       });
  //   }

  //   handleUserListChange(){
  //       fetchModel("/user/list")
  //           .then((response) =>
  //           {
  //               this.setState({
  //                   users: response.data
  //               });
  //           });
  //   }

  // render() {
  //   return this.state.users ?(
  //       <div>
  //       <List component="nav">
  //           {
  //               this.state.users.map(user => (
  //               <ListItemButton selected={this.state.user_id === user._id}
  //                               key={user._id}
  //                               divider={true}
  //                               component="a" href={"#/users/" + user._id}>
  //                   <ListItemText primary={user.first_name + " " + user.last_name} />
  //               </ListItemButton>
  //           ))
  //           }
  //       </List>
  //       </div>
  //   ) : (
  //       <div/>
  //   );
  // }
}

export default UserList;