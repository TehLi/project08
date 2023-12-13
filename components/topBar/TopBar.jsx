import React from 'react';
import {
  AppBar, Toolbar, Typography, Button
} from '@mui/material';
import './TopBar.css';
import fetchModel from "../../lib/fetchModelData";

/**
 * Define TopBar, a React componment of project #5
 */
// class TopBar extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <AppBar className="topbar-appBar" position="absolute">
//         <Toolbar>
//           <Typography variant="h5" color="inherit">
//               This is the TopBar component
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     );
//   }
// }

// export default TopBar;


//p5 Solution
class TopBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          app_info: undefined
      };
  }

      componentDidMount() {
        this.handleAppInfoChange();
      }

      handleAppInfoChange(){
          const app_info = this.state.app_info;
          if (app_info === undefined){
              fetchModel("/test/info")
                  .then((response) =>
                  {
                      this.setState({
                          app_info: response.data
                      });
                  });
          }
      }

    //display
      render() {
      return (
          <AppBar className="topbar-appBar" position="absolute">
            <Toolbar>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Teh Li Peh</Typography>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color="inherit">Text{this.props.main_content}</Typography>
              <Typography variant="h5" component="div" color="inherit">Version: {this.state.app_info}</Typography>
            </Toolbar>
          </AppBar>
        );
      }

  //   componentDidMount() {
  //       this.handleAppInfoChange();
  //   }

  //   handleAppInfoChange(){
  //       const app_info = this.state.app_info;
  //       if (app_info === undefined){
  //           fetchModel("/test/info")
  //               .then((response) =>
  //               {
  //                   this.setState({
  //                       app_info: response.data
  //                   });
  //               });
  //       }
  //   }

  // render() {
  //   return this.state.app_info ? (
  //     <AppBar className="topbar-appBar" position="absolute">
  //       <Toolbar>
  //           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Teh Li Peh</Typography>
  //           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} color="inherit">{this.props.main_content}</Typography>
  //           <Typography variant="h5" component="div" color="inherit">Version: {this.state.app_info.__v}</Typography>
  //       </Toolbar>
  //     </AppBar>
  //   ) : (
  //       <div/>
  //   );
  // }
}

export default TopBar;