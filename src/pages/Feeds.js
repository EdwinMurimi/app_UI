import React from 'react';

import Search from '../components/Search.js';
import AddFeeds from '../components/AddFeeds.js';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'

import NumberFormat from 'react-number-format';

export default function Feeds() {

    return (
      <div style={{ paddingTop: "10vh", }}>
        <AddFeeds/>
        <Search/>
          <div style={{ 
            marginLeft: "25%",
            width: '50%',
            marginTop: "60px", 
          }}> 
            <List>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src='./picture.svg' />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Sample Feed"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                            style = {{
                              display: 'inline',
                            }}
                          >
                          <span><NumberFormat value='10000000' displayType={'text'} thousandSeparator={true} prefix={'Ksh '} /> - </span> 
                          </Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ultrices velit. Quisque eget justo dolor.
                        </React.Fragment>
                      }
                    /> 
                    <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                </ListItem>
                
            <Divider variant="inset" component="li" />
          </List>                
        </div>
      </div>
    );
  }
